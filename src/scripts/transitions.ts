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

const slideAnim = (duration: number, toRight: boolean) => {
    return {
        forwards: {
            old: [{
                name: "slideTo" + (toRight ? "Right" : "Left"),
                duration,
                easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                fillMode: "both"
            }],
            new: [{
                name: "slideFrom" + (toRight ? "Left" : "Right"),
                duration,
                easing: "cubic-bezier(0.76, 0, 0.24, 1)",
                fillMode: "both"
            }]
        },
        backwards: {
            old: [
                { "name": "slideTo" + (toRight ? "Left" : "Right") }
            ],
            new: [
                { "name": "slideFrom" + (toRight ? "Right" : "Left") }
            ]
        }
    };
}

export const slideCustom = (duration: number, direction = 'left') => {
    if (direction === 'right')
        return slideAnim(duration, true);
    else if (direction === 'left')
        return slideAnim(duration, false);
    else throw new Error('Invalid direction');
};