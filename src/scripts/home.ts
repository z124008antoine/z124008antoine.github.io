import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('astro:page-load', () => {
    // sub-sections that will be animated when they are bigger than the screen width
    const contents = gsap.utils.toArray(".content");
    contents.forEach((content) => {
        const c = content as HTMLElement;
        const extraWidth = () => c.offsetWidth - window.innerWidth;
        if (extraWidth() < 10) {
            return; // skip if content is not wider than the screen
        }
        const parent = c.parentElement;
        gsap.to(c, {
            scrollTrigger: {
                trigger: parent,
                start: "top top",
                end: `+=${extraWidth()}px top`,
                scrub: 0.5,
                pin: true,
            },
            ease: "none",
            x: () => -(extraWidth()),
        });

        const title = c.previousElementSibling as HTMLElement;
        gsap.to(title as HTMLElement, {
            scrollTrigger: {
                trigger: title as HTMLElement,
                start: "top 60px",
                end: `+=${extraWidth()}`,
                endTrigger: c,
                toggleActions: "restart none none reverse",
            },
            duration: 0.4,
            ease: "power1.inOut",
            bottom: "4rem",
            scale: 1.2,
        });

        // HTMLCollection to Array
        /* const children = Array.from(c.children);
        children.forEach((child) => {
            if (child.classList.contains("image-wrap"))
                return;

            gsap.to(child, {
                scrollTrigger: {
                    trigger: parent,
                    start: "top top",
                    end: `+=${extraWidth()}px top`,
                    scrub: 2,
                },
                ease: "none",
                x: -extraWidth()/5,
            });
        }); */
    });
});