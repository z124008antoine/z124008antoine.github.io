const anim = {
    old: {
        name: 'textShrink',
        duration: '0.2s',
        easing: 'ease-in',
        fillMode: 'forwards',
    },
    new: {
        name: 'textGrow',
        duration: '0.4s',
        easing: 'ease-out',
        fillMode: 'backwards',
    }
};

export const textSpacing = {
    forwards: anim,
    backwards: anim,
};