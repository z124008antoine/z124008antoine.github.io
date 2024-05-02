import TextPlugin from "gsap/TextPlugin";

document.addEventListener('astro:page-load', () => {
    gsap.registerPlugin(TextPlugin);

    // Pin the project box
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

    // Fade in text elements
    const textElements = gsap.utils.toArray('.process-section > *');
    textElements.forEach((el) => {
        const text = el as HTMLElement;
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'bottom 95%',
                end: 'bottom 350',
                toggleActions: 'play reverse play reverse',
            },
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
        });
    });

    // Helper function to create a ScrollTrigger.Vars object for a title trigger
    const titleTrigger = (id: number, start="center"):ScrollTrigger.Vars => {
        return {
            trigger: '#step-'+id,
            start: 'top ' + start,
            end: 'center top',
            toggleActions: 'play none none reverse'
        };
    }

    // Step 1
    gsap.from('.cog-wrap', {
        scrollTrigger: titleTrigger(1),
        stagger: 0.1,
        scale: 0,
        duration: .3,
    });

    // Step 2
    const step2Text = document.getElementById('step-2')?.getAttribute('data-text-change') || '';
    gsap.to('.project-box .display', {
        scrollTrigger: titleTrigger(2),
        text: step2Text,
        duration: 1,
    });

    // Step 3
    const registerCogConfig = (start: string, config: { [key: string]: string }[]) => {
        const tl = gsap.timeline({
            scrollTrigger: titleTrigger(3, start),
            defaults: {
                duration: .5,
                ease: 'power1.out',
            }
        });
        config.forEach((position, index) => {
            tl.to(`#cog-${index+1}`, { ...position }, '<');
        });
    }
    registerCogConfig('70%', [
        { left: '-2rem', top: '3rem' },
        { left: '1rem', top: '1rem' },
        { left: '6.3rem', top: '-2.8rem' },
        { right: '-0.4rem', bottom: '-0.7rem' },
        { right: '-1.5rem', bottom: '3.5rem' },
        { right: '-0.5rem', top: '-1rem' },
    ]);
    registerCogConfig('40%', [
        { left: '2.8rem', top: '10rem' },
        { left: '-1rem', top: '6rem' },
        { left: '-2rem', top: '-0.8rem' },
        { right: '-1rem', bottom: '2.8rem' },
        { right: '1rem', bottom: '-0.7rem' },
        { right: '2rem', top: '-1rem' },
    ]);
    

    // Step 4
    const drops = gsap.utils.toArray('.drop');
    const dropTl = gsap.timeline({
        scrollTrigger: {
        trigger: '#step-4',
        start: `top 80%`,
        end: 'top top',
        scrub: 1,
    }});
    drops.forEach((drop, index) => {
        const d = drop as HTMLElement;
        const bgColor = d.style.backgroundColor;
        const color = d.style.color;
        const prevD = index > 0 ? drops[index - 1] as HTMLElement : null;
        const prevBgColor = prevD ? prevD.style.backgroundColor : 'white';
        
        // Animate the drop and the background circle animation
        dropTl.from(d, { scale: 0, x: '-=200', duration: 1, ease: 'power1.in' }, '>+.5')
            .fromTo('.style', {
                backgroundImage: `radial-gradient(circle, ${bgColor} 0%, ${prevBgColor} 0%)`
            }, {
                backgroundImage: `radial-gradient(circle, ${bgColor} 100%, ${prevBgColor} 100%)`,
                duration: 0.5,
                immediateRender: false
            }, '>')
            .to('.project-box', { color: color, duration: 0.001 }, '>-0.4');
    });
});