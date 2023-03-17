const popupEditProfile = document.querySelector(".popup_edit_profile");
const formEditProfile = popupEditProfile.querySelector(".popup__container");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_info");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector(".profile__info");
const cardTemplate = document.querySelector("#card").content;
const cardsContainer = document.querySelector(".elements");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupCreateCard = document.querySelector(".popup_create_card");
const popupFullSizeImg = document.querySelector(".popup_open-img");
const imgName = document.querySelector(".popup__img-name");
const imgFullSize = document.querySelector(".popup__img_full-size");
const newElementTitle = document.querySelector(".popup__input_type_title");
const newElementLink = document.querySelector(".popup__input_type_link");
const buttonCreate = document.querySelector(".popup__container_create");
const popups = document.querySelectorAll(".popup")

export {popupEditProfile,
  formEditProfile,
  nameInput,
  jobInput,
  buttonEditProfile,
  profileName,
  profileInfo,
  cardTemplate,
  cardsContainer,
  buttonAddCard,
  popupCreateCard,
  popupFullSizeImg,
  imgName,
  imgFullSize,
  newElementTitle,
  newElementLink,
  buttonCreate,
  popups,
}
