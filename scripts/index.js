  let popup = document.querySelector(".popup");
  let formElement = popup.querySelector(".popup__container");
  let nameInput = formElement.querySelector(".popup__input_type_name");
  let jobInput = formElement.querySelector(".popup__input_type_info");
  let editButton = document.querySelector(".profile__edit-button");
  let cross = formElement.querySelector(".popup__cross");
  let profileName = document.querySelector('.profile__name');
  let profileInfo = document.querySelector(".profile__info");
  const cardTemplate = document.querySelector("#card").content;
  const elements = document.querySelector(".elements");
  const createBtn = document.querySelector(".profile__add-button");
  const popupCreate = document.querySelector(".popup__create-element");
  const crossCreate = document.querySelector(".popup_cross_create_close");
  const popupImg = document.querySelector(".popup_open-img");
  const imgName = document.querySelector(".popup__img-name");
  const imgFullSize = document.querySelector(".popup__img_full-size");
  const imgFullSizeClose = document.querySelector(".popup__cross_img_close");
  const newElementTitle = document.querySelector(".popup__input_type_title");
  const newElementLink = document.querySelector(".popup__input_type_link");
  const buttonCreate = document.querySelector(".popup__container_create");

  function popupOpen () {  // функция открытия попапа редактирования профиля
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
  };

  function popupClose () {
    popup.classList.remove('popup_opened')  //функция закрытия попапа редактирования профиля
  };

  function handleFormSubmit (evt) { //функция редактирования профиля
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    popupClose()
  };

  const addOpen = () =>{  //функция открытия попапа для добавления карточки
    popupCreate.classList.add('popup_opened')
  };

  const imgOpen = (e) => {  //функция открытия попапа с увеличенной картинкой
    const thisElement = e.target.closest(".element")
    const thisImg = thisElement.querySelector(".element__img")
    const thisElementName = thisElement.querySelector(".element__name")
    imgFullSize.src = thisImg.src;
    imgFullSize.alt = thisImg.alt;
    imgName.textContent = thisElementName.textContent;
    popupImg.classList.add('popup_opened')
  };

  const imgClose = () => { //функция закрытия попапа с увеличенной картинкой
    popupImg.classList.remove('popup_opened')
  };

  const likeActive = (e) => { //функция для активации лайка
    e.target.classList.toggle('element__like_active');
  };

  const popupCreateClose = () => { //функция для закрытия попапа добавления карточки
    popupCreate.classList.remove('popup_opened')
  };

  const cardDelete = (e) => { //функция для удаления карточки
    e.target.closest(".element").remove()
  };


  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const getElements = (data) => { //функция клонирования содержимого темплейта и добавления активных элементов
    const cardElement = cardTemplate.cloneNode(true); // Клонируем содержимое темплейта
    const newElementImg = cardElement.querySelector('.element__img') ;// наполняем содержимым
    newElementImg.src = data.link;
    newElementImg.alt = data.name;
    const newElementName = cardElement.querySelector('.element__name');
    newElementName.textContent = data.name;
    const like = cardElement.querySelector(".element__like");
    like.addEventListener("click", likeActive); //добавляем событие на кнопку лайка
    const deleteElement = cardElement.querySelector(".element__trash");
    deleteElement.addEventListener("click", cardDelete); //добавляем событие на кнопку корзины
    const imgFull = cardElement.querySelector(".element__img");
    imgFull.addEventListener("click", imgOpen) //добавялем событие при открытии картинки

    return cardElement
  };

  const renderItem = (wrap,data) => { //функция вставки склонированнохо ранее темплейта
    wrap.append(getElements(data))
  };

  initialCards.forEach((data) => { //функция рендеринга карточек
    renderItem(elements, data)
  });

  const renderNewCard = (data) => {
    elements.prepend(getElements(data))
  };

  const createNewCard = (evt) => {
    evt.preventDefault();
    const data = {name:newElementTitle.value,link:newElementLink.value}
    renderNewCard(data)
    popupCreateClose()
  }

  buttonCreate.addEventListener("submit", createNewCard);
  imgFullSizeClose.addEventListener("click", imgClose);
  createBtn.addEventListener("click", addOpen);
  editButton.addEventListener("click",popupOpen);
  cross.addEventListener("click",popupClose);
  crossCreate.addEventListener("click", popupCreateClose);
  formElement.addEventListener('submit', handleFormSubmit);
