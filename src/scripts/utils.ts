// this function generates a random position style while making sure the element is still visible on the screen
export const getCircularPosition = (number: number, amount: number, padding = 0) => {
    // position is generated on a circle
    let angle = ((number+0.33)/(amount)) * 2 * Math.PI;
    angle += (Math.random() - 0.5);
    const x = (1+Math.cos(angle)) * (50-padding);
    const y = (1+Math.sin(angle)) * (50-padding);
    return `top: ${y}%; left: ${x}%; transform: translate(${-x}%, ${-y}%);`;
}