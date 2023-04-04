export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
  }

  open(){
    this._popupSelector.classList.add("popup_opened")
    this.setEventListeners(this._popupSelector)
    document.addEventListener("keydown", (evt) => { this._handleEscClose(evt)},{ once: true })
  }

  close() {
    this._popupSelector.classList.remove("popup_opened")
  }

  _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close()
      }

  }

  setEventListeners(popup){
    popup.addEventListener("mousedown", (evt) =>{
      if(evt.target.classList.contains("popup_opened")){
        this.close()
      }
      if(evt.target.classList.contains("popup__close")){
        this.close()
      }
    })
  }
}
