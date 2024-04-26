const textAnim = {
    old: {
        name: 'textShrink',
        duration: '1s',
        easing: 'ease-in',
        fillMode: 'forwards',
    },
    new: {
        name: 'textGrow',
        duration: '1s',
        easing: 'ease-out',
        fillMode: 'backwards',
    }
};

export const textSpacing = {
    forwards: textAnim,
    backwards: textAnim,
};