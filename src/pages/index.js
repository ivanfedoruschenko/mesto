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
  popupDeleteCard, elements, popupUpdateAvatar, buttonPatchAvatar
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

const popupPatchAvatarValidation= new FormValidator(parameters, popupUpdateAvatar)
popupPatchAvatarValidation.enableValidation()

const popupFullImg = new PopupWithImage(popupFullSizeImg)
popupFullImg.setEventListeners()

const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: "3a98338d-a57d-4dce-ad75-e1c5dfaa5739",
    'Content-Type': "application/json",
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    const userId = userData._id
    userInfo.setUserInfo(userData)

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
                .catch((error) => console.log(`Ошибка: ${error}`))
            }
            else{
              api.activateLike(cards)
                .then(res => {
                  console.log(res)
                  card.setLikes(res.likes)})
                .catch((error) => console.log(`Ошибка: ${error}`))
            }
          },
          handleCardClick: () =>{
              popupFullImg.open(cards)
            },
          handleCardDelete: () => {
            popupCardDelete.setButtonText("Да")
            popupCardDelete.open()
            popupCardDelete.updateHandleSubmit(() => {
              popupCardDelete.setButtonText("Удаление...")
              api.deleteCard(cards)
                .then(res => {
                  card.removeCard()
                })
                .then(res => {
                  popupCardDelete.close()
                })
                .catch((error) => console.log(`Ошибка: ${error}`))
                .finally(() => {
                  popupCardDelete.setButtonText("Да")
                });
            })
            popupCardDelete.setEventListeners()
          }
        },
        cardTemplate)
      card.toggleLike()
      card.checkOwner()
     return card.generateCard()
    }

    const cardList = new Section({
      renderer: (cardItem) => {
        const newCard = createCard(cardItem)
        cardList.addItem(newCard)
      }
    },".elements" )

    cardList.renderItems(cards)

    const popupAddCard = new PopupWithForm(popupCreateCard, {
      handleFormSubmit: (formData) => {
        popupAddCard.setButtonText("Создание...")
        api.postNewCard(formData)
          .then(res => {
            cardList.addItem(createCard(res))
          })
          .then(res => {
            popupAddCard.close()
          })
          .catch((error) => console.log(`Ошибка: ${error}`))
          .finally(() => {
            popupAddCard.setButtonText("Создать")
          });
      },
    });

    popupAddCard.setEventListeners()

    const popupCardDelete = new PopupWithSubmit(popupDeleteCard)

    const userInformation = userInfo.getUserInfo();

    buttonAddCard.addEventListener("click",() => {
      popupAddCard.open()
      popupAddCardValidation.resetValidation()
    });

    buttonEditProfile.addEventListener("click", () => {
      nameInput.value = userInformation.name;
      jobInput.value = userInformation.about;
      popupEditProfileValidation.resetValidation()
      popupUserInfo.open()
    });

    buttonPatchAvatar.addEventListener("click", () => {
      popupPatchAvatarValidation.resetValidation()
      popupPatchAvatar.open()
    });
  })

const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileInfo,
  avatarSelector: ".profile__avatar"
})

const popupUserInfo = new PopupWithForm(popupEditProfile, {
  handleFormSubmit: (element) => {
    popupUserInfo.setButtonText("Сохранение...")
    api.patchUserInfo(element)
      .then(res =>{
        userInfo.setUserInfo(res)
      })
      .then(res => {
        popupUserInfo.close()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        popupUserInfo.setButtonText("Сохранить")
      });
  }
})

popupUserInfo.setEventListeners()

const popupPatchAvatar = new PopupWithForm(popupUpdateAvatar, {
  handleFormSubmit: (element) =>{
    popupPatchAvatar.setButtonText('Сохранение...')
    api.patchAvatar(element)
      .then(res =>{
        userInfo.setAvatar(res)
      })
      .then(res => {
        popupPatchAvatar.close()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        popupPatchAvatar.setButtonText('Сохранить')
      });
  }
})
popupPatchAvatar.setEventListeners()
