class List {
  cards = [];
  title = "no title";
  index;
  template = ({ title, cardTemplates }) => `
    <div class="list-content">
        <div class="list-header">
            <textarea class="list-header">${title}</textarea>
        </div>
        <div class="list-cards">
          ${cardTemplates}
        </div>
        <div class="list-control">
            <button class="btn-toggle-add-card-form">+ Add Card</button>
            <form name="add-card">
            <input class="list-name-input" placeholer="Enter a title for this card…">
            <button type="submit" class="btn-submit-add-card">Add List</button>
            <button class="btn-toggle-add-card-form" type="button">X</button>
          </form>
        </div>
    </div>
  `

  constructor({ title, cards = [], index }) {
    this.title = title;
    this.index = index;
    this.cards = cards.map((card, cardIndex) => new Card({ ...card, index: cardIndex }));
  }

  mounted() {
    this.element = document.querySelectorAll('.list-wrapper')[this.index];

    this.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-toggle-add-card-form')) {
        this.toggleEdit();
      }
    });

    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      const cardTitle = e.target.children[0].value;
      this.addCard(cardTitle ? cardTitle : 'no title');
      this.render();
    });

    this.cards.forEach(card => card.mounted());
  }

  toggleEdit() {
    this.element.classList.toggle('edit');
  }

  addCard(title) {
    const index = this.cards.length;
    this.cards.push(new Card({ title, index }));
    this.render();
  }

  getTemplate() {
    const cardTemplates = this.cards.map(card => card.getTemplate()).join('');
    return this.template({ title: this.title, cardTemplates })
  }

  render() {
    this.element.innerHTML = this.getTemplate();
  }
}