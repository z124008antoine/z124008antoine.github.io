document.addEventListener('astro:page-load', () => {
    // Fade in text elements
    const textElements = gsap.utils.toArray('.process-section > *');
    textElements.forEach((el) => {
        const text = el as HTMLElement;
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'bottom 95%',
                end: 'bottom 100',
                toggleActions: 'play reverse play reverse',
            },
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
        });
    });
});