import "../styles/pages/index.scss";

import { setParallaxEffect } from "./components/parallax";
import { setUpFadeInUpAnima } from "./components/fadeInUp";
import { setUpFadeInAnima } from "./components/fadeIn";
import { Slider } from "./components/slider";

const textSlider = new Slider('.roads__text-slider', '.roads__button_type_next', '.roads__button_type_prev', 1000, 1);
const photoSlider = new Slider('.roads__slider-corusel', '.roads__button_type_next', '.roads__button_type_prev', 1000, 2);

const fadeInUpArray = document.querySelectorAll(".fade-in-up");
const fadeInArray = document.querySelectorAll(".fade-in");

const parallaxHeroConfig = {
	triggerSelector: ".hero__bike-fix",
	start: "20% center",
	end: "60% center",
};

setUpFadeInUpAnima(fadeInUpArray);
setUpFadeInAnima(fadeInArray);
setParallaxEffect(parallaxHeroConfig);

textSlider.init();
photoSlider.init();