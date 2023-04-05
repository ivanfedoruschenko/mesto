const popupEditProfile = document.querySelector(".popup_edit_profile");
const formEditProfile = popupEditProfile.querySelector(".popup__container");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_info");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector(".profile__info");
const cardTemplate = document.querySelector("#card").content;
const buttonAddCard = document.querySelector(".profile__add-button");
const popupCreateCard = document.querySelector(".popup_create_card");
const popupFullSizeImg = document.querySelector(".popup_open-img");


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
}

export {popupEditProfile,
  formEditProfile,
  nameInput,
  jobInput,
  buttonEditProfile,
  profileName,
  profileInfo,
  cardTemplate,
  buttonAddCard,
  popupCreateCard,
  popupFullSizeImg,
  initialCards,
  parameters,
}
