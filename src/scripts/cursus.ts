document.addEventListener('astro:page-load', () => {
    if (!document.querySelector('.cursus'))
        return;

    const matches = () => window.matchMedia('screen and (min-width: 1000px)').matches;
    let anims: gsap.core.Tween[] = [];
    const update = () => {
        // make sure to add the animations if the screen gets bigger
        if (matches() && anims.length === 0) {
            anims.push(gsap.to('#first-section', {
                scrollTrigger: {
                    trigger: '#first-section',
                    start: 'top top',
                    end: 'top -100%',
                    pin: true,
                    pinSpacing: false,
                }
            }));

            anims.push(gsap.to('.cursus', {
                scrollTrigger: {
                    trigger: '#second-section',
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    scrub: true,
                },
                ease: 'none',
                y: '-100%'
            }));
        }
    }
    update();
    window.addEventListener('resize', update);

    const experiences = gsap.utils.toArray('.experience');
    const curve = document.querySelector('.curve') as SVGPathElement;
    const length = curve.getTotalLength();
    curve.style.strokeDasharray = `${length}px`;
    curve.style.strokeDashoffset = `${length}px`;
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

        if (index !== 0)
            tl.fromTo(curve, {
                strokeDasharray: length,
                strokeDashoffset: length * (experiences.length - index + 1)/experiences.length,
            }, {
                strokeDashoffset: (experiences.length - index) * (length / experiences.length),
                duration: 0.6,
                immediateRender: false,
                ease: 'power1.inOut',
            });
        tl.from(circle, {
            height: 0,
            width: 0,
            duration: 0.2,
        })
        .from(line, {
            width: 0,
            duration: 0.3,
        }, '>')
        .from(content, {
            x: 20,
            opacity: 0,
            duration: 0.3,
        }, '<');
    });
});