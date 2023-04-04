import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector,{handleFormSubmit}) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._element = this._popupSelector.querySelector(".popup__form")
  }

  open() {
    this._setEventListeners(this._popupSelector)
    super.open();
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__input')
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues)
    return this._formValues;
  }

  _setEventListeners(popup) {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues())
      this.close()
    })
    super.setEventListeners(popup);
  }

  close() {
    this._element.reset()
    super.close();
  }
}
