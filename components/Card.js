import {imgFullSize, imgName, popupFullSizeImg} from "../utils/constants.js";
import {openPopup} from "../scripts";

class Card {
  constructor({data,handleCardClick}, template) {
    this._title = data.title;
    this._link = data.link;
    this._handleCardClick = handleCardClick
    this._template = template;
    this._element = this._getTemplate()
    this._buttonLike = this._element.querySelector(".element__like");
  }

  _getTemplate(){
    return this._template.querySelector('.element').cloneNode(true)
  }

  generateCard() {
    const newElementImg = this._element.querySelector('.element__img') ;// наполняем содержимым
    newElementImg.src = this._link;
    newElementImg.alt = this._title;
    const newElementName = this._element.querySelector('.element__name');
    newElementName.textContent = this._title;
    this._setEventListener()
    return this._element
  }

  _handleLikeClick() { //метод для активации лайка
   this._buttonLike.classList.toggle('element__like_active');

  };

  _handleCardDelete() { //метод для удаления карточки
    this._element.remove()
  };

  _setEventListener(){
    this._buttonLike.addEventListener("click", () => {this._handleLikeClick()}) //добавляем событие на кнопку лайка
    this._element.querySelector(".element__trash").addEventListener("click", () => {this._handleCardDelete()}); //добавляем событие на кнопку корзины
    this._element.querySelector(".element__img").addEventListener("click", () =>{this._handleCardClick()})
  }
}

export {Card}
