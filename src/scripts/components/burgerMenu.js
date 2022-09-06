export class Burger {
	constructor({
		headerSel,
		burgerElemSel,
		burgerVisibleClass,
		openBtnSel,
		closeBtnSel,
	}) {
		this._headerSel = headerSel;
		this._burgerSel = burgerElemSel;
		this._openSel = openBtnSel;
		this._closeSel = closeBtnSel;
		this._burgerVisibleClass = burgerVisibleClass;

		this._openBurger = this._openBurger.bind(this);
		this._closeBurger = this._closeBurger.bind(this);
		this._setEscHandler = this._setEscHandler.bind(this);
	}

	init() {
		this._getElements();
		this._setListeners();
	}

	_getElements() {
		this._header = document.querySelector(this._headerSel);
		this._burger = this._header.querySelector(this._burgerSel);
		this._openBtn = this._header.querySelector(this._openSel);
		this._closeBtn = this._header.querySelector(this._closeSel);
	}

	_setListeners() {
		this._openBtn.addEventListener("click", this._openBurger);
		document.addEventListener("keydown", this._setEscHandler);
	}

	_openBurger() {
		this._burger.classList.add(this._burgerVisibleClass);
		this._closeBtn.addEventListener("click", this._closeBurger);
	}

	_closeBurger() {
		this._burger.classList.remove(this._burgerVisibleClass);
		this._closeBtn.removeEventListener("click", this._closeBurger);
	}

	_setEscHandler(evt) {
		if (evt.key === "Escape") {
			this._closeBurger();
		}
	}
}
