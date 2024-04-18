const textAnim = {
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
    forwards: textAnim,
    backwards: textAnim,
};

const circleAnim = {
    old: {
        name: 'circleIn',
        duration: '.5s',
        easing: 'ease-in',
        fillMode: 'forwards',
    },
    new: {
        name: 'circleOut',
        duration: '0.5s',
        easing: 'ease-out',
        fillMode: 'backwards',
    }
};

export const circleAnimation = {
    forwards: circleAnim,
    backwards: circleAnim,
};