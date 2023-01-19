
  let popup = document.querySelector(".popup")
  let formElement = popup.querySelector(".popup__container")
  let nameInput = formElement.querySelector(".popup__input_type_name")
  let jobInput = formElement.querySelector(".popup__input_type_info")
  let editButton = document.querySelector(".profile__edit-button")
  let cross = formElement.querySelector(".popup__cross")
  let profileName = document.querySelector('.profile__name');
  let profileInfo = document.querySelector(".profile__info");


  function popupOpen () {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
  }

  function popupClose () {
    popup.classList.remove('popup_opened')
  }

  function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    popupClose()
  }

  editButton.addEventListener("click",popupOpen);
  cross.addEventListener("click",popupClose);
  formElement.addEventListener('submit', handleFormSubmit);


