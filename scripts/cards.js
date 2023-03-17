import {imgFullSize, imgName, popupFullSizeImg} from "./constants.js";
import {openPopup} from "./index.js";

const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card {
  constructor(title,link,template) {
    this._title = title;
    this._link = link;
    this._template = template;
  }
  _getTemplate(){
    return this._template.querySelector('.element').cloneNode(true)
  }

  generateCard() {
    this._element = this._getTemplate()

    const newElementImg = this._element.querySelector('.element__img') ;// наполняем содержимым
    newElementImg.src = this._link;
    newElementImg.alt = this._title;
    const newElementName = this._element.querySelector('.element__name');
    newElementName.textContent = this._title;
    this._setEventListener()

    return this._element
  }

  _handleLikeClick() { //метод для активации лайка
    this._element.querySelector(".element__like").classList.toggle('element__like_active');

  };

  _handleCardDelete() { //метод для удаления карточки
    this._element.remove()
  };

  _handleFullSizeImgOpen() {  //функция открытия попапа с увеличенной картинкой
    imgFullSize.src = this._link;
    imgFullSize.alt = this._title;
    imgName.textContent = this._title;
    openPopup(popupFullSizeImg)
  };

  _setEventListener(){
    this._element.querySelector(".element__like").addEventListener("click", () => {this._handleLikeClick()}) //добавляем событие на кнопку лайка
    this._element.querySelector(".element__trash").addEventListener("click", () => {this._handleCardDelete()}); //добавляем событие на кнопку корзины
    this._element.querySelector(".element__img").addEventListener("click", () =>{this._handleFullSizeImgOpen()})
  }
}

export {Card, initialCards}
