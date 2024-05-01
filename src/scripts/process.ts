import TextPlugin from "gsap/TextPlugin";

document.addEventListener('astro:page-load', () => {
    gsap.registerPlugin(TextPlugin);

    gsap.to('.project-box', {
        scrollTrigger: {
            trigger: '.project-box',
            start: 'bottom 300',
            end: '+=5000 bottom',
            scrub: 1,
            pin: true,
            pinSpacing: false,
        }
    });

    const textElements = gsap.utils.toArray('section > *');
    textElements.forEach((el) => {
        const text = el as HTMLElement;
        gsap.from(text, .8, {
            scrollTrigger: {
                trigger: text,
                start: 'bottom 95%',
                end: 'bottom 350',
                toggleActions: 'play reverse play reverse',
            },
            scale: 0.5,
            opacity: 0,
        });
    });

    const titleTrigger = (id: number):ScrollTrigger.Vars => {
        return {
            trigger: '#step-'+id,
            start: 'top center',
            end: 'center top',
            toggleActions: 'play none none reverse'
        };
    }

    gsap.from('.cog-wrap', {
        scrollTrigger: titleTrigger(1),
        stagger: 0.1,
        scale: 0,
        duration: .3,
    });

    // retrieve the text changes from the data-text-changes attribute
    const step2Text = document.getElementById('step-2')?.getAttribute('data-text-change') || '';
    gsap.to('.project-box .display', {
        scrollTrigger: titleTrigger(2),
        text: step2Text,
        duration: 1,
    });

    const step3Text = document.getElementById('step-3')?.getAttribute('data-text-change') || '';
    console.log(step3Text);
    gsap.fromTo('.project-box .display', {
        text: step2Text,
    }, {
        scrollTrigger: titleTrigger(3),
        text: step3Text,
        duration: 2,
        ease: 'none',
        // don't keep the from value
        immediateRender: false,
    });
});