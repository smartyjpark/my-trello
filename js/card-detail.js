class CardDetail {
  targetElement = document.querySelector('.card-detail');
  template = ({ title, description }) => `
    <div class="card-detail-content">
      <div class="card-detail-header">
        <input class="card-detail-title" value="${title}"></input>
        <span class="btn-card-detail-off">X</span>
      </div>
      <form class="card-deatil-description-form">
        <h3>Desciption</h3>
        <textarea class="card-detail-textarea">${description}</textarea>
        <div class="card-detail-desciption-control">
          <button class="btn btn-update-description" type="button">Save</button>
        </div>
      </form>
    </div>
  `;

  constructor(card) {
    this.card = card;
    this.title = card.title;
    this.description = card.description;
    this.updateCard = card.updateCard.bind(card);

    this.targetElement.innerHTML = this.template(card);
    this.targetElement.classList.add('on');
    this.mounted();
  }

  mounted() {
    const titleInput = this.targetElement.querySelector('input.card-detail-title');
    const cardDetailOffButton = this.targetElement.querySelector('.btn-card-detail-off');
    const desciptionTextarea = this.targetElement.querySelector('.card-detail-textarea');
    const updateDescriptionButton = this.targetElement.querySelector('.btn-update-description');

    titleInput.addEventListener('change', (e) => {
      this.updateTitle(e.target.value);
    });

    cardDetailOffButton.addEventListener('click', (e) => {
      this.removeCardDetail();
    });

    desciptionTextarea.addEventListener('focus', (e) => {
      this.targetElement.classList.add('edit-description');
    })

    desciptionTextarea.addEventListener('focusout', (e) => {
      if (!!e.relatedTarget && e.relatedTarget.classList.contains('btn-update-description')) return;
      this.targetElement.classList.remove('edit-description');
      desciptionTextarea.value = this.description;
    });

    updateDescriptionButton.addEventListener('click', (e) => {
      const description = this.targetElement.querySelector('.card-detail-textarea').value;
      this.updateDescription(description);
    });
  }

  updateTitle(title) {
    this.updateCard({
      title: title,
      description: this.description
    });
  }

  updateDescription(description) {
    this.updateCard({
      title: this.title,
      description
    });
    this.description = this.card.description;
    this.targetElement.classList.remove('edit-description');

  }

  removeCardDetail() {
    this.targetElement.classList.remove('on')
    this.targetElement.innerHTML = '';
  }
}