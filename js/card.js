class Card {
  title = 'no title';
  description = "";
  index;
  template = (title) => `
  <a class="card">
    <span class="card-title">
        ${title}
    </span>
  </a>
  `

  constructor({ title, index }) {
    this.title = title;
    this.index = index;
  }

  getTemplate() {
    return this.template(this.title);
  }

  mounted() {
    this.element = document.querySelectorAll('.card')[this.index];
    this.element.addEventListener('click', (e) => {
      new CardDetail(this)
    })
  }

  updateCard({ title, description }) {
    this.title = title;
    this.description = description;

    this.element.querySelector('.card-title').innerHTML = title;
  }
}