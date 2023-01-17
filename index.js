// Находим форму в DOM
  let popup = document.querySelector(".popup")
  let formElement = document.querySelector(".popup__container")// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
  let nameInput = formElement.querySelector(".popup__name")// Воспользуйтесь инструментом .querySelector()
  let jobInput = formElement.querySelector(".popup__info")// Воспользуйтесь инструментом .querySelector()

  let editButton = document.querySelector(".profile__edit-button")
  let popupOpened = formElement.querySelector(".popup_opened")
  let cross = formElement.querySelector(".popup__cross")
  let popupButton = formElement.querySelector(".popup__button")

  function popupOpen () {
    if(editButton) {
      popup.classList.add('popup_opened')
    }
  }

  function popupClose () {
    if(cross || popupButton){
      popup.classList.remove('popup_opened')
    }
  }

  editButton.addEventListener("click",popupOpen);
  cross.addEventListener("click",popupClose);



  function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.


    let profileName = document.querySelector('.profile__name');
    let profileInfo = document.querySelector(".profile__info");
    let formName = nameInput.value;
    let formInfo = jobInput.value;

    profileName.textContent = formName;
    profileInfo.textContent = formInfo;

    popupClose()
  }
formElement.addEventListener('submit', handleFormSubmit);

