const speed = 4;
document.addEventListener('astro:page-load', () => {
    const cogs = gsap.utils.toArray('.cog');
    cogs.forEach((cog) => {
        const c = cog as HTMLElement;
        const size = Number(c.getAttribute('data-cog-size')) || 1;
        const offset = Number(c.getAttribute('data-cog-offset')) || 0;
        const direction = c.getAttribute('data-cog-clockwise') === '' ? 1 : -1;
        gsap.fromTo(c, {
                rotate: offset
            }, {
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
                invalidateOnRefresh: true,
            },
            rotate: () => offset + direction * ((document.body.clientHeight - window.innerHeight)*speed / size),
            ease: 'none',
        });
    });
});