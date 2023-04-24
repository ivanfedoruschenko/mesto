export default class UserInfo {
  constructor({userName, userInfo, avatarSelector}) {
    this._userName = userName;
    this._userInfo = userInfo;
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    this._inputValues = {name: this._userName.textContent, about: this._userInfo.textContent, avatar: this._avatar.src};
    return this._inputValues;
  }

  setAvatar(element){
    this._avatar.src = element.avatar;
  }

  setUserInfo(element) {
    this._userName.textContent = element.name;
    this._userInfo.textContent = element.about;
    this._avatar.src = element.avatar;
  }
}
