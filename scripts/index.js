import {popupEditProfile,
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
  newElementTitle,
  newElementLink,
  buttonCreate,
  popups,
} from "./constants.js"
import {Card, initialCards} from "./cards.js";
import {FormValidator, parameters,} from "./validate.js";

const popup = Array.from(popups);

function closePopupEsc(evt){
    const target = document.querySelector(".popup_opened")
    if (evt.key === "Escape") {
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
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
  }

  function openPopupAddCard () {
    openPopup(popupCreateCard)
    document.querySelector("#form_create_card").reset()
  }

  function handleFormSubmitProfile (evt) { //функция редактирования профиля
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopup(popupEditProfile)
  }

  initialCards.forEach((item) => { //функция рендеринга карточек
    const card = new Card(item.title, item.link, cardTemplate);
    const cardElement = card.generateCard()
    cardsContainer.append(cardElement)
  });

  const createNewCard = (evt) => {
    evt.preventDefault();
    const card = new Card(newElementTitle.value,newElementLink.value, cardTemplate)
    const cardElement = card.generateCard()
    cardsContainer.prepend(cardElement)
    closePopup(popupCreateCard)
  }


  popup.forEach((item) => {   // цикл валидации всех инпутов
    const popupElement = new FormValidator(parameters,item)
    popupElement.enableValidation()
  })


  buttonCreate.addEventListener("submit", createNewCard);
  buttonAddCard.addEventListener("click", openPopupAddCard);
  buttonEditProfile.addEventListener("click",openPopupEditProfile);
  formEditProfile.addEventListener('submit', handleFormSubmitProfile);

  export {openPopup}
