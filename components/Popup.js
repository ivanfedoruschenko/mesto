export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
  }

  open(){
    this._popupSelector.classList.add("popup_opened")
  }

  close() {
    this._popupSelector.classList.remove("popup_opened")
  }

  _handleEscClose(evt){
    if (evt.key === "Escape") {
      const target = document.querySelector(".popup_opened")
      this.close(target)
    }
  }

  setEventListeners(popup){
    popup.addEventListener("mousedown", (evt) =>{
      if(evt.target.classList.contains("popup_opened")){
        this.close(popup)
      }
      if(evt.target.classList.contains("popup__close")){
        this.close(popup)
      }
    })
  }
}
