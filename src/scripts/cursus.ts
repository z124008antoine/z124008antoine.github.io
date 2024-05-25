document.addEventListener('astro:page-load', () => {
    if (!document.querySelector('.cursus'))
        return;

    if (window.matchMedia('screen and (min-width: 1000px)').matches) {
        gsap.to('#first-section', {
            scrollTrigger: {
                trigger: '#first-section',
                start: 'top top',
                end: () => `+=${document.querySelector('.cursus')?.clientHeight || 0}`,
                pin: true,
                pinSpacing: false,
            }
        });

        gsap.to('.cursus', {
            scrollTrigger: {
                trigger: '#second-section',
                start: 'top top',
                end: 'bottom top',
                pin: true,
                scrub: true,
            },
            ease: 'none',
            y: '-100%'
        });
    }

    const experiences = gsap.utils.toArray('.experience');
    experiences.forEach((experience, index) => {
        const div = experience as HTMLElement;
        const circle = div.querySelector('.circle') as HTMLElement;
        const line = div.querySelector('.line') as HTMLElement;
        const content = div.querySelector('.content') as HTMLElement;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: circle,
                start: 'center 80%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.from(circle, {
            height: 0,
            width: 0,
            duration: 0.3,
        })
        .from(line, {
            width: 0,
            duration: 0.5,
        }, '>')
        .from(content, {
            x: 20,
            opacity: 0,
            duration: 0.5,
        }, '<');
    });
});