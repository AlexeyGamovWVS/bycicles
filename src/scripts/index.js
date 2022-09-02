import "../styles/pages/index.scss";

import { setParallaxEffect } from "./components/parallax";
import { setUpFadeInUpAnima } from "./components/fadeInUp";
import { setUpFadeInAnima } from "./components/fadeIn";
import { Slider } from "./components/slider";
import { Tabs } from "./components/tabs";

const textSlider = new Slider('.roads__text-slider', '.roads__button_type_next', '.roads__button_type_prev', 1000, 1);
const photoSlider = new Slider('.roads__slider-corusel', '.roads__button_type_next', '.roads__button_type_prev', 1000, 2);

const fadeInUpArray = document.querySelectorAll(".fade-in-up");
const fadeInArray = document.querySelectorAll(".fade-in");

const parallaxHeroConfig = {
	triggerSelector: ".hero__bike-fix",
	start: "20% center",
	end: "60% center",
};

//Tabs configs

const UI_SELECTORS = {
	TAB_ROW: ".cycles__container", 
  TAB_BUTTON: ".cycles__filter", 
  TAB_CONTENT: ".cycles__cards",
  SECTION: ".cycles", 
	TAB_BTN_ACTIVE: ".cycles__filter_active",
  TAB_CONTENT_ACTIVE: ".cycles__cards_active",
};

const UI_CLASSES = {
  TAB_BTN_ACTIVE: "cycles__filter_active", 
  TAB_CONTENT_ACTIVE: "cycles__cards_active",
};

const tabs = new Tabs(UI_SELECTORS,UI_CLASSES);


setUpFadeInUpAnima(fadeInUpArray);
setUpFadeInAnima(fadeInArray);
setParallaxEffect(parallaxHeroConfig);

textSlider.init();
photoSlider.init();

tabs.initTabs();