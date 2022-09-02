import "../styles/pages/index.scss";
import "./components/parallax.js";
import { setUpFadeInUpAnima } from "./components/fadeInUp";
import { setUpFadeInAnima } from "./components/fadeIn";
import Swiper, { Navigation } from "swiper";

function setUpSwiper(sliderSelector, options) {
	const swiper = new Swiper(sliderSelector, options);
	return swiper;
}

const fadeInUpArray = document.querySelectorAll(".fade-in-up");
setUpFadeInUpAnima(fadeInUpArray);

const fadeInArray = document.querySelectorAll(".fade-in");
setUpFadeInAnima(fadeInArray);

const textSliderOptions = {
	sliderSelector: ".roads__text-slider",
	options: {
		modules: [Navigation],
		spaceBetween: 40,
		cssMode: true,
		mousewheel: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	}
};

const swiper = setUpSwiper(textSliderOptions.sliderSelector, textSliderOptions.options);
