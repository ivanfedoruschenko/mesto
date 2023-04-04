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

const cardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    const card = new Card({
        data: cardItem,
      handleCardClick: () =>{
        const popupFullImg = new PopupWithImage(popupFullSizeImg, cardItem)
        popupFullImg.open()
      }},
      cardTemplate);
    const cardElement =card.generateCard()
    cardList.addItem(cardElement)
  }
},".elements" )

const popupAddCard = new PopupWithForm(popupCreateCard, {
    handleFormSubmit: (formData) => {
    const card = new Card({
        data: formData,
        handleCardClick: () =>{
          const popupFullImg = new PopupWithImage(popupFullSizeImg, formData)
          popupFullImg.open()
        }},
      cardTemplate);
    const cardElement =card.generateCard()
    cardList.addItem(cardElement)
  }
});

const userInfo = new UserInfo({
  selectorUserName: profileName,
  selectorUserInfo: profileInfo})

const popupUserInfo = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: (element) => {
    const newUserInfo = new UserInfo({
      selectorUserName: profileName,
      selectorUserInfo: profileInfo})

    newUserInfo.setUserInfo(element)
  }
})

cardList.renderItems()

buttonAddCard.addEventListener("click",() => {
  popupAddCard.open()
});
buttonEditProfile.addEventListener("click", () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().info;
  popupUserInfo.open()
});
