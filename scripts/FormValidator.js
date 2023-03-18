

class FormValidator {
  constructor(data, element) {
    this._data = data;
    this._element = element;
  }

  _getButtonElement() {
    return this._element.querySelector(this._data.submitButtonSelector)

  }

  _getInputList() {
    return Array.from(this._element.querySelectorAll(this._data.inputSelector));
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
    this._getInputList().forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    const formList = Array.from(this._element.querySelectorAll(this._data.formSelector));
    formList.forEach(() => {
      this._setEventListeners();
    });
  };

  _hasInvalidInput() {
    return this._getInputList().some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._getButtonElement().setAttribute("disabled", true)
      this._getButtonElement().classList.add(this._data.inactiveButtonClass);
    } else {
      this._getButtonElement().removeAttribute("disabled")
      this._getButtonElement().classList.remove(this._data.inactiveButtonClass);
    }
  }

  resetValidation() {
    this._getInputList().forEach((input) => {
      this._hideInputError(input)
    })
    this._toggleButtonState()
  }
}

export {FormValidator}

