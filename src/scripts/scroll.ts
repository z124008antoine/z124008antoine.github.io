import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
})

gsap.ticker.lagSmoothing(0);

window.addEventListener('scrollend', (e) => {
    // prevent other listeners from being called
    if (lenis.isScrolling)
        e.stopImmediatePropagation();
});