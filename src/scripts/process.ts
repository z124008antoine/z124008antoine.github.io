import TextPlugin from "gsap/TextPlugin";

document.addEventListener('astro:page-load', () => {
    gsap.registerPlugin(TextPlugin);

    const largeScreen = () => window.matchMedia('(min-width: 1100px)').matches;
    // Pin the project box
    gsap.to('.project-box', {
        scrollTrigger: {
            trigger: '.project-box',
            start: () => largeScreen() ? 'center 50%' : 'bottom 300',
            end: () => `+=${document.body.clientHeight} bottom`,
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
                end: () => largeScreen() ? 'bottom 100' : 'bottom 350',
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

    const images = gsap.utils.toArray('#step-image img');
    images.forEach((image, index) => {
        const img = image as HTMLImageElement;
        gsap.fromTo(img, {
            scale: 0.5,
            opacity: 0,
            y: 100,
        }, {
            scrollTrigger: titleTrigger(index+1),
            scale: 1,
            opacity: 1,
        });
    });

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
    gsap.from('.project-box button', {
        scrollTrigger: titleTrigger(2, '30%'),
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
    });

    // Step 3
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#step-3',
            start: `top 70%`,
            end: 'center top',
            scrub: 1,
        },
    });
    const registerCogConfig = (config: { [key: string]: string }[]) => {
        config.forEach((position, index) => {
            tl.to(`#cog-${index+1}`, { ...position }, index === 0 ? '>+.25' : '<');
        });
    }
    registerCogConfig([
        { left: '-2rem', top: '3rem' },
        { left: '1rem', top: '1rem' },
        { left: '6.3rem', top: '-2.8rem' },
        { right: '-0.4rem', bottom: '-0.7rem' },
        { right: '-1.5rem', bottom: '3.5rem' },
        { right: '-0.5rem', top: '-1rem' },
    ]);
    tl.to('.project-box button', { x: 70, y: -20 }, '<');
    registerCogConfig([
        { left: '2.8rem', top: '10rem' },
        { left: '-1rem', top: '6rem' },
        { left: '-2rem', top: '-0.8rem' },
        { right: '-1rem', bottom: '2.8rem' },
        { right: '1rem', bottom: '-0.7rem' },
        { right: '2rem', top: '-1rem' },
    ]);
    tl.to('.project-box button', { x: -50, y: 0 }, '<');
    
    // Step 4
    const drops = gsap.utils.toArray('.drop');
    const dropTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#step-4',
            start: `bottom 70%`,
            end: 'bottom top',
            scrub: 1.5,
        }
    });
    const buttonStyles: { [key: string]: string }[] = [
        { backgroundColor: '#fac411', color: 'black', borderRadius: '0', border: '0.08rem solid #000', padding: '0.4rem 1rem'  },
        { backgroundColor: '#ec49f5', color: 'white', borderRadius: '20rem', border: 'none', boxShadow: 'inset .1rem .1rem 0.2rem #fff8, inset -.1rem -.1rem 0.2rem #0005' },
        { backgroundColor: '#5a41e5', color: '#ffffff', borderRadius: '0.5rem', boxShadow: '.2rem .2rem .1rem #0008'},
    ]
    drops.forEach((drop, index) => {
        const d = drop as HTMLElement;
        const bgColor = d.style.backgroundColor;
        const color = d.style.color;
        const prevD = index > 0 ? drops[index - 1] as HTMLElement : null;
        const prevBgColor = prevD ? prevD.style.backgroundColor : 'white';
        
        // Animate the drop and the background circle animation
        dropTl.from(d, { y: '-=200', opacity: 0, duration: 1, ease: 'power1.in' }, '>+.5')
            .fromTo('.style', {
                backgroundImage: `radial-gradient(circle, ${bgColor} 0%, ${prevBgColor} 0%)`
            }, {
                backgroundImage: `radial-gradient(circle, ${bgColor} 100%, ${prevBgColor} 100%)`,
                duration: 0.5,
                immediateRender: false
            }, '>')
            .to(d, { scale: 0 }, '<')
            .to('.project-box button', { ...buttonStyles[index] }, '<')
            .to('.cog .circle', { backgroundColor: buttonStyles[index].backgroundColor, stagger: 0.1 }, '<')
            .to('.project-box', { color: color, fontWeight: 700, fontFamily: 'unset', duration: 0.3 }, '<');
    });

    // Step 5
    gsap.to('.project-box', {
        scrollTrigger: {
            trigger: '.process-end',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
        },
        height: '20rem',
        maxHeight: '20rem',
        scale: 1.1,
    });
    gsap.from('.end-text > *', {
        scrollTrigger: {
            trigger: '.process-end',
            start: 'top 60%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
        },
        text: '',
        duration: .6,
        stagger: 0.5,
    });
});