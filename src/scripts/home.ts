document.addEventListener('astro:page-load', () => {
    // sub-sections that will be animated when they are bigger than the screen width
    const contents = gsap.utils.toArray(".content");
    contents.forEach((content) => {
        const c = content as HTMLElement;
        const extraWidth = c.offsetWidth - window.innerWidth;
        if (extraWidth < 10) {
            return; // skip if content is not wider than the screen
        }
        const parent = c.parentElement;
        gsap.to(c, {
            scrollTrigger: {
                trigger: parent,
                start: "top 46",
                end: () => `+=${c.offsetWidth - window.innerWidth}px top`,
                scrub: 0.5,
                pin: true,
                invalidateOnRefresh: true,
            },
            ease: "none",
            x: () => window.innerWidth - c.offsetWidth,
        });
    });
});