import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup,{handleFormSubmit}) {
    super(popup)
    this._handleFormSubmit = handleFormSubmit
    this._element = this._popup.querySelector(".popup__form")
    this._inputList = Array.from(this._element.querySelectorAll('.popup__input'))

  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }

  setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues())
    })
    super.setEventListeners();
  }

  close() {
    this._element.reset()
    super.close();
  }
}
