document.addEventListener('astro:page-load', () => {
    const titles = gsap.utils.toArray(".project-title");
    titles.forEach((title) => {
        const t = title as HTMLElement;
        gsap.from(t, {
            scrollTrigger: {
                trigger: t,
                start: "center bottom",
                end: "center top",
                toggleActions: "restart none none reverse",
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
                start: "bottom bottom",
                end: "top top",
                scrub: 1,
            },
            objectPosition: "80% 80%",
        });
    });

    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((card) => {
        const c = card as HTMLElement;
        gsap.to(c, {
            scrollTrigger: {
                trigger: c,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            y: - Math.random() * 500,
        });
    });
});