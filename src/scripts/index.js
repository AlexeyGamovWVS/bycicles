import "../styles/pages/index.scss";

import { setParallaxEffect } from "./components/parallax";
import { setUpFadeInUpAnima } from "./components/fadeInUp";
import { setUpFadeInAnima } from "./components/fadeIn";
import { changeTheme } from "./components/changeTheme";
import {
	textSlider,
	photoSlider,
	fadeInUpArray,
	fadeInArray,
	parallaxHeroConfig,
	tabs,
	formValidate,
	themeElements,
	switcher,
	burger
} from "./components/data"

burger.init();
// textSlider.init();
photoSlider.init();
tabs.initTabs();
formValidate.enableValidation();

setUpFadeInUpAnima(fadeInUpArray);
setUpFadeInAnima(fadeInArray);
setParallaxEffect(parallaxHeroConfig);

switcher.addEventListener("click", () => {
	const switherIcon = switcher.querySelector(".switcher__icon");
	const switherIconDarkClass = "switcher__icon_pos_dark";
	switherIcon.classList.toggle(switherIconDarkClass);
	changeTheme(themeElements);
});