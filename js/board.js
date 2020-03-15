class Board {
  lists = [];
  title = "no title";
  targetDOM = '';
  template = ({ title, listTemplates }) => `
    <div class="board">
      <div class="board-menu-bar">
          <input class="board-title" value="${title}"></input>
      </div>
      <div class="board-content">
          ${listTemplates}
          <div class="list-wrapper add-list">
              <button class="btn-toggle-add-list-form" type="button">
                  + Add another list
              </button>
              <form name="add-list">
                <input class="list-name-input" placeholer="Enter tile...">
                <button type="submit" class="btn-submit-add-list">Add List</button>
                <button class="btn-toggle-add-list-form" type="button">X</button>
              </form>
          </div>
      </div>
    </div>
  `

  constructor({ title, lists = [] }) {
    this.title = title;
    this.lists = lists.map((list, index) => new List({ ...list, index }));
  }

  getTemplate() {

    return this.template({
      title: this.title,
      onSubmit: this.onSubmit,
      listTemplates: this.lists
        .map(list => `
          <div class="list-wrapper">${list.getTemplate()}</div>
          `)
        .join('')
    });
  }

  render(targetDOM = this.targetDOM) {
    document.querySelector(targetDOM).innerHTML = this.getTemplate();

    document.querySelector('form[name=add-list]').addEventListener('submit', (e) => {
      e.preventDefault();
      const listTitle = e.target.children[0].value;
      this.addList(listTitle ? listTitle : 'no title');
      this.render();
    });

    document.querySelector('.list-wrapper.add-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-toggle-add-list-form')) {
        document.querySelector('.add-list').classList.toggle('edit');
      }
    })

    if (!this.targetDOM) {
      this.targetDOM = targetDOM
    }

    this.onMounted();
  }

  onMounted() {
    this.lists.forEach(list => list.mounted());
  }

  addList(title) {
    const index = this.lists.length;
    this.lists.push(new List({ title, index }))
  }
}