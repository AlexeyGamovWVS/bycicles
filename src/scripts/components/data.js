import { Slider } from "./doubleSlider";
import { Tabs } from "./tabs";
import { Burger } from "./burgerMenu";
import { Validate } from "./validation";
import { GridSlider } from "./gridSlider";

const photoSlider = new Slider(
  ".roads__slider-corusel",
  ".roads__button_type_next",
  ".roads__button_type_prev",
  1000,
  2
);

// const goodRows = document.querySelectorAll('.cycles__cards');
// goodRows.forEach(row, ()=> {

// });

const fadeInUpArray = document.querySelectorAll(".fade-in-up");
const fadeInArray = document.querySelectorAll(".fade-in");

const parallaxHeroConfig = {
  triggerSelector: ".hero__bike-fix",
  start: "20% center",
  end: "60% center",
};

const UI_SELECTORS = {
  TAB_ROW: ".cycles__container",
  TAB_BUTTON: ".cycles__filter",
  TAB_CONTENT: ".cycles__cards",
  SECTION: ".cycles",
  TAB_BTN_ACTIVE: ".cycles__filter_active",
  TAB_CONTENT_ACTIVE: ".cycles__cards_active",
	SELECT_FILTER: "#cycles__filters"
};

const UI_CLASSES = {
  TAB_BTN_ACTIVE: "cycles__filter_active",
  TAB_CONTENT_ACTIVE: "cycles__cards_active",
};

const tabs = new Tabs(UI_SELECTORS, UI_CLASSES);

const form = document.querySelector(".footer__form");

const formValidate = new Validate(form, {
  inputSelector: ".form__item",
  submitSelctor: ".form__submit",
  activeBtnClass: "form__submit_ready",
});

const themeElements = document.querySelectorAll("[data-theme='themeMod']");

const switcher = document.querySelector(".switcher__btn");

const burger = new Burger({
  headerSel: ".header",
  burgerElemSel: ".header__burger",
  burgerVisibleClass: "header__burger_visible",
  openBtnSel: ".header__open-menu-btn",
  closeBtnSel: ".header__close-btn",
});

export {
  photoSlider,
//	goodsSlider,
  fadeInUpArray,
  fadeInArray,
  parallaxHeroConfig,
  tabs,
  formValidate,
  themeElements,
  switcher,
  burger,
};
