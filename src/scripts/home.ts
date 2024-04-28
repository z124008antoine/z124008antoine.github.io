document.addEventListener('astro:page-load', () => {
    const titles = gsap.utils.toArray(".project-title");
    titles.forEach((title) => {
        const t = title as HTMLElement;
        gsap.from(t, {
            scrollTrigger: {
                trigger: t,
                start: "center bottom",
                end: "center top",
                toggleActions: "restart none none none",
            },
            scale: 0.8,
            duration: 0.3,
        });
    });

    const covers = gsap.utils.toArray(".project-cover");
    covers.forEach((cover) => {
        const c = cover as HTMLElement;
        gsap.to(c, {
            scrollTrigger: {
                trigger: c,
                start: "center 80%",
                end: "center 20%",
                scrub: 0.3,
            },
            objectPosition: "100% 100%",
        });
    });
});