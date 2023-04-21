export default class Card {
  constructor({data, user, handleCardClick, handleCardDelete, handleCardLike}, template) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.ownerId;
    this._cardId = data.cardId;
    this._likes = data.likes;
    this._user = user;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._template = template;
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".element__like");
    this._likesCounter = this._element.querySelector(".element__like-number");
    this._buttonTrash = this._element.querySelector(".element__trash");
  }

  _getTemplate(){
    return this._template.querySelector('.element').cloneNode(true)
  }

  setLikes(newLikes){
    this._likesCounter.textContent = newLikes.length;
    this._likes = newLikes;

    this.toggleLike()
  }

  toggleLike(){
    if(this.isLiked()){
      this._buttonLike.classList.add('element__like_active')
    }
    else{
      this._buttonLike.classList.remove('element__like_active')
    }
  }

  isLiked() {
    return this._likes.some((element) => {
      return element._id === this._user})

  }


  generateCard() {
    const newElementImg = this._element.querySelector('.element__img') ;// наполняем содержимым
    newElementImg.src = this._link;
    newElementImg.alt = this._name;
    const newElementName = this._element.querySelector('.element__name');
    newElementName.textContent = this._name;
    if(this._ownerId !== this._user){  this._buttonTrash.classList.add("element__trash_hidden")}
    if(this._likes.length !== 0){
      this._likesCounter.textContent = this._likes.length
    }
    else{
      this._likesCounter.remove()
    }
    this._setEventListener()
    return this._element
  }


  _setEventListener(){
    this._buttonLike.addEventListener("click", () => {this._handleCardLike()}) //добавляем событие на кнопку лайка
    this._buttonTrash.addEventListener("click", () => {this._handleCardDelete()}); //добавляем событие на кнопку корзины
    this._element.querySelector(".element__img").addEventListener("click", () =>{this._handleCardClick()})
  }
}
