

class FormValidator {
  constructor(data, element) {
    this._data = data;
    this._element = element;
    this._buttonSubmit = this._element.querySelector(this._data.submitButtonSelector)
    this._inputList = Array.from(this._element.querySelectorAll(this._data.inputSelector))
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._data.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.classList.remove(this._data.errorClass);
    errorElement.textContent = '';
  };

  _isValid(inputElement) {
    if (inputElement.validity.valueMissing) {
      this._showInputError(inputElement, "Вы пропустили это поле");
    } else if (inputElement.validity.typeMismatch) {
      this._showInputError(inputElement, "Ведите адрес сайта");
    } else if (inputElement.validity.tooShort) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmit.setAttribute("disabled", true)
      this._buttonSubmit.classList.add(this._data.inactiveButtonClass);
    } else {
      this._buttonSubmit.removeAttribute("disabled")
      this._buttonSubmit.classList.remove(this._data.inactiveButtonClass);
    }
  }

  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input)
    })
    this._toggleButtonState()
  }
}

export {FormValidator}
