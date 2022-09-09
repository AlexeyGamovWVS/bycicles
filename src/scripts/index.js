import "../styles/pages/index.scss";

import { setParallaxEffect } from "./components/parallax";
import { setUpFadeInUpAnima } from "./components/fadeInUp";
import { setUpFadeInAnima } from "./components/fadeIn";
import { changeTheme } from "./components/changeTheme";
import { GridSlider } from "./components/gridSlider";
import {
  //goodsSlider,
  photoSlider,
  fadeInUpArray,
  fadeInArray,
  parallaxHeroConfig,
  tabs,
  formValidate,
  themeElements,
  switchers,
  burger,
} from "./components/data";

burger.init();
photoSlider.init();
tabs.initTabs();
formValidate.enableValidation();

setUpFadeInUpAnima(fadeInUpArray);
setUpFadeInAnima(fadeInArray);
setParallaxEffect(parallaxHeroConfig);

switchers.forEach((switcher) => {
  switcher.addEventListener("click", () => {
    const switherIcon = switcher.querySelector(".switcher__icon");
    const switherIconDarkClass = "switcher__icon_pos_dark";
    switherIcon.classList.toggle(switherIconDarkClass);
    changeTheme(themeElements);
  });
});

const goodRows = document.querySelectorAll(".cycles__cards");
goodRows.forEach((row, index) => {
  const goodSlider = new GridSlider(
    `.cycles__cards[data-index="${index}"]`,
    `.cycles__cards[data-index="${index}"] .cycles__pagination`,
    1000
  );
  goodSlider.init();
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
