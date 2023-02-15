  const popupEditProfile = document.querySelector(".popup_edit_profile");
  const formElement = popupEditProfile.querySelector(".popup__container");
  const nameInput = formElement.querySelector(".popup__input_type_name");
  const jobInput = formElement.querySelector(".popup__input_type_info");
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
  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
      popup.addEventListener("mousedown", (evt) =>{
        if(evt.target.classList.contains("popup_opened")){
          togglePopup(popup)
        }
        if(evt.target.classList.contains("popup__close")){
          togglePopup(popup)
        }
      })
    }) //цикл для навешивания слушателя событий на все крестики в попапах

  function togglePopup(popup){
    popup.classList.toggle("popup_opened")
  }

  function openPopupEditProfile () {  // функция открытия попапа редактирования профиля
    togglePopup(popupEditProfile)
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
  }

  function handleFormSubmitProfile (evt) { //функция редактирования профиля
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    togglePopup(popupEditProfile)
  }

  const openCreateNewCard = () =>{
    togglePopup(popupCreateCard);
  }

  const handleFullSizeImgOpen = (e) => {  //функция открытия попапа с увеличенной картинкой
    const thisElement = e.target.closest(".element")
    const thisImg = thisElement.querySelector(".element__img")
    const thisElementName = thisElement.querySelector(".element__name")
    imgFullSize.src = thisImg.src;
    imgFullSize.alt = thisImg.alt;
    imgName.textContent = thisElementName.textContent;
    togglePopup(popupFullSizeImg)
  };

  const handleLikeClick = (e) => { //функция для активации лайка
    e.target.classList.toggle('element__like_active');
  };

  const handleCardDelete = (e) => { //функция для удаления карточки
    e.target.closest(".element").remove()
  };

  const createCards = (card) => { //функция клонирования содержимого темплейта и добавления активных элементов
    const cardElement = cardTemplate.cloneNode(true); // Клонируем содержимое темплейта
    const newElementImg = cardElement.querySelector('.element__img') ;// наполняем содержимым
    newElementImg.src = card.link;
    newElementImg.alt = card.name;
    const newElementName = cardElement.querySelector('.element__name');
    newElementName.textContent = card.name;
    const like = cardElement.querySelector(".element__like");
    like.addEventListener("click", handleLikeClick); //добавляем событие на кнопку лайка
    const cardDelete = cardElement.querySelector(".element__trash");
    cardDelete.addEventListener("click", handleCardDelete); //добавляем событие на кнопку корзины
    const imgFull = cardElement.querySelector(".element__img");
    imgFull.addEventListener("click", handleFullSizeImgOpen) //добавляем событие при открытии картинки

    return cardElement
  };

  const renderItem = (wrap,card) => { //функция вставки склонированнохо ранее темплейта
    wrap.append(createCards(card))
  };

  initialCards.forEach((card) => { //функция рендеринга карточек
    renderItem(cardsContainer, card)
  });

  const renderNewCard = (container,card) => {
    container.prepend(createCards(card))
  };

  const createNewCard = (evt) => {
    evt.preventDefault();
    const card = {name:newElementTitle.value,link:newElementLink.value}
    renderNewCard(cardsContainer,card)
    openCreateNewCard()
  }

  buttonCreate.addEventListener("submit", createNewCard);
  buttonAddCard.addEventListener("click", openCreateNewCard);
  buttonEditProfile.addEventListener("click",openPopupEditProfile);
  formElement.addEventListener('submit', handleFormSubmitProfile);
