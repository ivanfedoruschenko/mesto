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
const elements =  document.querySelector(".elements");
const popupDeleteCard = document.querySelector(".popup_delete-card")
const popupUpdateAvatar = document.querySelector(".popup_patch_avatar");
const buttonPatchAvatar = document.querySelector(".profile__avatar-container")

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
  parameters,
  elements,
  popupDeleteCard,
  popupUpdateAvatar,
  buttonPatchAvatar
}
