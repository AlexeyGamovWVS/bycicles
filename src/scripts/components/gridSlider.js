import Swiper, { Navigation, Pagination } from "swiper";

export class GridSlider {
  constructor(sliderSelector, paginationSelector, speed) {
    this._slider = sliderSelector;
    this._pagination = paginationSelector;
    this._speed = speed;
  }

  init() {
    this._setUpOptions();
    this._swiper = new Swiper(this._slider, this._options);
    this._swiper.init();
  }

  _setUpOptions() {
    this._options = {
      modules: [Pagination],
      init: false,
      breakpoints: {
        320: {
          speed: this._speed,
          rewind: false,
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          allowsSlideNext: true,
          allowsSlidePrev: true,
          allowTouchMove: true,
          pagination: {
            el: ".cycles__pagination",
            dynamicBullets: false,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + "</span>"
              );
            },
          },
        },
        960: {
          allowsSlideNext: false,
          allowsSlidePrev: false,
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  }
}
