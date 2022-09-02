import Swiper, { Navigation } from "swiper";

export class Slider {
	constructor(
		sliderSelector,
		btnNextSelector,
		btnPrevSelector,
		speed,
		amountSlides = "1"
	) {
		this._slider = sliderSelector;
		this._btnNext = btnNextSelector;
		this._btnPrev = btnPrevSelector;
		this._speed = speed;
		this._amountSlides = amountSlides;
	}

	init() {
		this._setUpOptions();
		this._swiper = new Swiper(this._slider, this._options);
		this._swiper.init();
	}

	_setUpOptions() {
		this._options = {
			speed: this._speed,
			rewind: false,
			loop: true,
			modules: [Navigation],
			spaceBetween: 40,
			slidesPerView: this._amountSlides,
			navigation: {
				nextEl: this._btnNext,
				prevEl: this._btnPrev,
			},
			init: false,
		};
	}
}
