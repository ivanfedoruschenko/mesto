import './index.css'
import Card from "../components/Card.js";
import {
  buttonAddCard,
  buttonEditProfile,
  cardTemplate,
  initialCards,
  jobInput,
  nameInput,
  parameters,
  popupCreateCard,
  popupEditProfile, popupFullSizeImg,
  profileInfo,
  profileName
} from "../utils/constants.js"
import Section from "../components/Section.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const popupEditProfileValidation = new FormValidator(parameters, popupEditProfile)
popupEditProfileValidation.enableValidation()

const popupAddCardValidation = new FormValidator(parameters, popupCreateCard)
popupAddCardValidation.enableValidation()

const popupFullImg = new PopupWithImage(popupFullSizeImg)
popupFullImg.setEventListeners()

function createCard(cardData) {
  const card = new Card({
    data: cardData,
    handleCardClick: () =>{
      popupFullImg.open(cardData)
    }}, cardTemplate)
  return card.generateCard()
}

const cardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
   const newCard = createCard(cardItem)
    cardList.addItem(newCard)
  }
},".elements" )

const popupAddCard = new PopupWithForm(popupCreateCard, {
    handleFormSubmit: (formData) => {
      const cardElement = createCard(formData)
      cardList.addItem(cardElement)
      },
  });

const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileInfo})

const popupUserInfo = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: (element) => {
    userInfo.setUserInfo(element)
  }
})

cardList.renderItems()
popupAddCard.setEventListeners()
popupUserInfo.setEventListeners()


buttonAddCard.addEventListener("click",() => {
  popupAddCard.open()
  popupAddCardValidation.resetValidation()
});
buttonEditProfile.addEventListener("click", () => {
  nameInput.value = userInfo.getUserInfo().user;
  jobInput.value = userInfo.getUserInfo().info;
  popupEditProfileValidation.resetValidation()
  popupUserInfo.open()
});

