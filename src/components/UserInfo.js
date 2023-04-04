import {profileInfo, profileName} from "../utils/constants.js";

export default class UserInfo {
  constructor({selectorUserName, selectorUserInfo}) {
    this._selectorUserName = selectorUserName;
    this._selectorUserInfo = selectorUserInfo;
  }

  getUserInfo() {
    this._formValues = {name: this._selectorUserName.textContent, info: this._selectorUserInfo.textContent};
    return this._formValues;
  }

  setUserInfo(element) {
    profileName.textContent = element.name;
    profileInfo.textContent = element.info ;
  }
}
