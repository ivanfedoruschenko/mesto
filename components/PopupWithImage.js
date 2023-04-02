import Popup from "./Popup.js";
import {imgFullSize, imgName} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._link = data.link
    this._title = data.title
  }

  open() {
    imgFullSize.src = this._link;
    imgFullSize.alt = this._title;
    imgName.textContent = this._title;
    super.open()
  }
}
