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

    const titles = gsap.utils.toArray(".project-title");
    titles.forEach((title) => {
        const t = title as HTMLElement;
        gsap.from(t, {
            scrollTrigger: {
                trigger: t,
                start: "center 80%",
                end: "center 50%",
                scrub: 0.5,
            },
            scale: 0.8,
        });
    });
});