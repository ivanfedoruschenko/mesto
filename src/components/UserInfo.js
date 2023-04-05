export default class UserInfo {
  constructor({userName, userInfo}) {
    this._userName = userName;
    this._userInfo = userInfo;
    this._profileName = document.querySelector('.profile__name');
    this._profileInfo = document.querySelector(".profile__info");
  }

  getUserInfo() {
    this._inputValues = {user: this._userName.textContent, info: this._userInfo.textContent};
    return this._inputValues;
  }

  setUserInfo(element) {
    this._profileName.textContent = element.user;
    this._profileInfo.textContent = element.info ;
  }
}
