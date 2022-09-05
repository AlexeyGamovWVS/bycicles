export class Validate {
	constructor(form, { inputSelector, submitSelctor, activeBtnClass }) {
		this._form = form;
		this._inputSelector = inputSelector;
		this._submitSelector = submitSelctor;
		this._activeBtnClass = activeBtnClass;
	}

	enableValidation() {
		this._getInitialItems();
		this._setEventListeners();
	}

	_getInitialItems() {
		this._inputs = this._form.querySelectorAll(this._inputSelector);
		this._submitBtn = this._form.querySelector(this._submitSelector);
	}

	_setEventListeners() {
		this._inputs.forEach((input) => {
			input.addEventListener("input", () => {
				input.value.length > 1 ? this._toggleButtonState(this._form.checkValidity()) : this._toggleButtonState(); 
			});
		});
		this._form.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._form.reset();
			this._toggleButtonState(false);
			// console.log("sended");
		});
	}

	_toggleButtonState(isValid = false) {
		isValid
			? this._submitBtn.classList.add(this._activeBtnClass)
			: this._submitBtn.classList.remove(this._activeBtnClass);
	}
}
