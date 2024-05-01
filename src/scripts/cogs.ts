const speed = 2;
document.addEventListener('astro:page-load', () => {
    const cogs = gsap.utils.toArray('.cog');
    cogs.forEach((cog) => {
        const c = cog as HTMLElement;
        const size = Number(c.getAttribute('data-cog-size')) || 1;
        const offset = Number(c.getAttribute('data-cog-offset')) || 0;
        const direction = c.getAttribute('data-cog-clockwise') === '' ? 1 : -1;
        console.log( c.getAttribute('data-cog-clockwise') );
        gsap.to(c, {
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                markers: true,
            },
            rotate: () => direction * (offset * 360 + (window.innerHeight*speed / size)),
        });
    });
});