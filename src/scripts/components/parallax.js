import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero__bike-fix', { 
	y: 0, 
	scrollTrigger: {
		trigger: '.hero__bike-fix',
		start: '20% center',
		end: '80% center',
		markers: false,
		scrub: false,
		pin: true,
	} 
});
