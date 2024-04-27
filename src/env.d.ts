/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// import gsap type
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis/types";
interface Window { 
    lenis: typeof Lenis;
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
}