import {
  buttonAddCard,
  buttonCreate,
  buttonEditProfile,
  cardsContainer,
  cardTemplate,
  formCreateCard,
  formEditProfile,
  initialCards,
  jobInput,
  nameInput, newCard,
  newElementLink,
  newElementTitle,
  parameters,
  popupCreateCard,
  popupEditProfile,
  popups,
  profileInfo,
  profileName
} from "./constants.js"
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const popupEditProfileValidation = new FormValidator(parameters, popupEditProfile)
popupEditProfileValidation.enableValidation()

const popupAddCardValidation = new FormValidator(parameters, popupCreateCard)
popupAddCardValidation.enableValidation()

function closePopupEsc(evt){
  if (evt.key === "Escape") {
    const target = document.querySelector(".popup_opened")
    closePopup(target)
  }
}

const closePopup = (popup) => {
  popup.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopupEsc)
}// функция закрытия попапа и удаления слушателей событий

const openPopup = (popup) => {
  popup.classList.add("popup_opened")
  document.addEventListener("keydown", closePopupEsc)
} // функция для открытия попапа и добавления слушателей событий

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) =>{
    if(evt.target.classList.contains("popup_opened")){
      closePopup(popup)
    }
    if(evt.target.classList.contains("popup__close")){
      closePopup(popup)
    }
  })
}) //цикл для навешивания слушателя событий на все крестики в попапах

function openPopupEditProfile () {  // функция открытия попапа редактирования профиля
  openPopup(popupEditProfile)
  popupEditProfileValidation.resetValidation()
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}

function openPopupAddCard () {
  openPopup(popupCreateCard)
  popupAddCardValidation.resetValidation()
  formCreateCard.reset()
}

function handleFormSubmitProfile (evt) { //функция редактирования профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup(popupEditProfile)
}

function createCard(cardData) {
  const card = new Card(cardData.title, cardData.link, cardTemplate);
  return card.generateCard()
}

initialCards.forEach((item) => { //функция рендеринга карточек
  cardsContainer.append(createCard(item))
});

const createNewCard = (evt) => {
  evt.preventDefault();
  newCard.title = newElementTitle.value;
  newCard.link = newElementLink.value
  cardsContainer.prepend(createCard(newCard))
  closePopup(popupCreateCard)
}

buttonCreate.addEventListener("submit", createNewCard);
buttonAddCard.addEventListener("click", openPopupAddCard);
buttonEditProfile.addEventListener("click",openPopupEditProfile);
formEditProfile.addEventListener('submit', handleFormSubmitProfile);

export {openPopup}
