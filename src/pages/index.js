import './index.css'
import Card from "../components/Card.js";
import {
  buttonAddCard,
  buttonEditProfile,
  cardTemplate,
  jobInput,
  nameInput,
  parameters,
  popupCreateCard,
  popupEditProfile, popupFullSizeImg,
  profileInfo,
  profileName,
  popupDeleteCard
} from "../utils/constants.js"
import Section from "../components/Section.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit";
import {logPlugin} from "@babel/preset-env/lib/debug";

const popupEditProfileValidation = new FormValidator(parameters, popupEditProfile)
popupEditProfileValidation.enableValidation()

const popupAddCardValidation = new FormValidator(parameters, popupCreateCard)
popupAddCardValidation.enableValidation()

const popupFullImg = new PopupWithImage(popupFullSizeImg)
popupFullImg.setEventListeners()

const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: "3a98338d-a57d-4dce-ad75-e1c5dfaa5739",
    'Content-Type': "application/json",
  }
})

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo(res)
})
  .catch((error) => console.log(`Ошибка: ${error}`))

api.getInitialCards()
  .then(res => {
  })
  .catch((error) => console.log(`Ошибка: ${error}`))


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    let userId = userData._id

    function createCard(cards) {
      const card = new Card(
        {
          data: cards,
          user: userId,
          handleCardLike: () =>{
            if(card.isLiked()){
              api.deactivateLike(cards)
                .then(res => {
                  card.setLikes(res.likes)})
            }
            else{
              api.activateLike(cards)
                .then(res => {
                  card.setLikes(res.likes)})
            }
          },
          handleCardClick: () =>{
          },
          handleCardDelete: () => {
          }
        },
        cardTemplate)
      card.toggleLike()
     return card.generateCard()
    }


    const cardList = new Section({
      data:cards,
      renderer: (cardItem) => {
        const newCard = createCard(cardItem)
        cardList.addItem(newCard)
      }
    },".elements" )
    cardList.renderItems()

    const popupAddCard = new PopupWithForm(popupCreateCard, {
      handleFormSubmit: (formData) => {
        api.postNewCard(formData)
          .then(res => {
            cardList.renderItems(res)
          })
      },
    });

    const popupCardDelete = new PopupWithSubmit(popupDeleteCard,{
      handleSubmit: () => {
      }
    })

    buttonAddCard.addEventListener("click",() => {
      popupAddCard.open()
      popupAddCard.setEventListeners()
      popupAddCardValidation.resetValidation()
    });

    buttonEditProfile.addEventListener("click", () => {
      nameInput.value = userInfo.getUserInfo().name;
      jobInput.value = userInfo.getUserInfo().about;
      popupEditProfileValidation.resetValidation()
      popupUserInfo.open()
    });


    popupCardDelete.setEventListeners()


  })
  .then(res => {

    }
  )

const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileInfo,
  avatarSelector: ".profile__avatar"
})

const popupUserInfo = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: (element) => {
    api.patchUserInfo(element)
      .then(res =>{
        userInfo.setUserInfo(res)
      })
  }
})

popupUserInfo.setEventListeners()




