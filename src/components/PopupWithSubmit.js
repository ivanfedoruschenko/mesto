import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup{
  constructor(popup) {
    super(popup);

    this._element = this._popup.querySelector(".popup__submit")
  }

  updateHandleSubmit(fn){
    this._handleSubmit = fn
  }



  setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleSubmit()
      this.close()
    })
    super.setEventListeners();
  }
}
