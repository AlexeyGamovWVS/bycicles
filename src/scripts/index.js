import "../styles/pages/index.scss";
import "./components/parallax.js";
import { setUpFadeInUpAnima } from "./components/fadeInUp";
import { setUpFadeInAnima } from "./components/fadeIn";

const fadeInUpArray = document.querySelectorAll('.fade-in-up');
setUpFadeInUpAnima(fadeInUpArray);

const fadeInArray = document.querySelectorAll('.fade-in');
setUpFadeInAnima(fadeInArray);