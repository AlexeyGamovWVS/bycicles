import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setParallaxEffect({ triggerSelector, start, end }) {
	const mm = gsap.matchMedia();
	mm.add("(min-width: 541px)", ()=> {
		gsap.to(triggerSelector, {
			y: 0,
			scrollTrigger: {
				trigger: triggerSelector,
				start: start,
				end: end,
				markers: false,
				scrub: false,
				pin: true,
			},
		});
	})
	mm.add("(max-width: 540px)", ()=> {
		gsap.to(triggerSelector, {
			y: 0,
			scrollTrigger: {
				trigger: triggerSelector,
				start: "-20px center",
				end: "20px center",
				markers: false,
				scrub: false,
				pin: true,
			},
		});
	})
}
