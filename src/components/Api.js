export default class Api {
  constructor(setting) {
    this._address = setting.baseUrl;
    this._headers = setting.headers;
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`,
      {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

  getInitialCards() {
    return fetch(`${this._address}/cards `,
      {
        method: "GET",
        headers: this._headers,
      })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

  patchUserInfo(data) {
    return fetch(`${this._address}/users/me`,
      {
        method: "PATCH",
        body: JSON.stringify({name: data.name, about: data.about}),
        headers: this._headers,
      })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

  postNewCard(data){
    return fetch(`${this._address}/cards `,
      {
        method: "POST",
        body: JSON.stringify({name: data.name, link: data.link}),
        headers: this._headers,
      })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

  deleteCard(data){
    return fetch(`${this._address}/cards/${id} `,
      {
        method: "DELETE",
        headers: this._headers,
      })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

  activateLike(data){
    return fetch(`${this._address}/cards/${data._id}/likes `,
      {
        method: "PUT",
        headers: this._headers,
      })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

  deactivateLike(data){
    return fetch(`${this._address}/cards/${data._id}/likes `,
      {
        method: "DELETE",
        headers: this._headers,
      })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status));
  }

}

