import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup{
  constructor(popup,{handleSubmit}) {
    super(popup);
    this._handleSubmit = handleSubmit
    this._element = this._popup.querySelector(".popup_delete-card")
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
