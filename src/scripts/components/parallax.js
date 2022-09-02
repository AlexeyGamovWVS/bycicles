import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setParallaxEffect({triggerSelector, start, end}) {
	gsap.to(triggerSelector, { 
		y: 0, 
		scrollTrigger: {
			trigger: triggerSelector,
			start: start,
			end: end,
			markers: false,
			scrub: false,
			pin: true,
		} 
	});
}
