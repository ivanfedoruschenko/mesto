const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
}

class FormValidator {
  constructor(data, element) {
    this._data = data;
    this._element = element;
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
    const inputList = Array.from(this._element.querySelectorAll(this._data.inputSelector));
    const buttonElement = this._element.querySelector(this._data.submitButtonSelector)
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    const formList = Array.from(this._element.querySelectorAll(this._data.formSelector));
    formList.forEach(() => {
      this._setEventListeners();
    });
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", true)
      buttonElement.classList.add(this._data.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled")
      buttonElement.classList.remove(this._data.inactiveButtonClass);
    }
  }
}

export {FormValidator, parameters}

