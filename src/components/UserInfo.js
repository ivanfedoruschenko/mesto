export default class UserInfo {
  constructor({userName, userInfo}) {
    this._userName = userName;
    this._userInfo = userInfo;
  }

  getUserInfo() {
    this._inputValues = {user: this._userName.textContent, info: this._userInfo.textContent};
    return this._inputValues;
  }

  setUserInfo(element) {
    this._userName.textContent = element.user;
    this._userInfo.textContent = element.info ;
  }
}
