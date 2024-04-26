/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// import gsap type
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
interface Window { 
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
}