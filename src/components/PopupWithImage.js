import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imgName = document.querySelector(".popup__img-name");
    this._imgFullSize = document.querySelector(".popup__img_full-size");
  }

  open(data) {
    this._imgFullSize.src = data.link;
    this._imgFullSize.alt = data.name;
    this._imgName.textContent = data.name;
    super.open()
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
