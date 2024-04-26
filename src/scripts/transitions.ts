const textAnim = {
    old: {
        name: 'textShrink',
        duration: '.3s',
        easing: 'ease-in',
        fillMode: 'forwards',
    },
    new: {
        name: 'textGrow',
        duration: '.5s',
        easing: 'ease-out',
        fillMode: 'backwards',
    }
};

export const textSpacing = {
    forwards: textAnim,
    backwards: textAnim,
};