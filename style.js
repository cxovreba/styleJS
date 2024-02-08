export function h5(color, fontSize, fontWeight, letterSpacing, width, margin) {
    const h5 = document.querySelector('h5');
    h5.style.color = color;
    h5.style.fontSize = fontSize;
    h5.style.fontWeight = fontWeight;
    h5.style.letterSpacing = letterSpacing;
    h5.style.width = width;
    h5.style.margin = margin;
}

export function card1(width, display, flexDirection, alignItems, background, gap) {
    const card1 = document.querySelector('.card1');
    card1.style.width = width;
    card1.style.display = display;
    card1.style.flexDirection = flexDirection;
    card1.style.alignItems = alignItems;
    card1.style.background = background;
    card1.style.gap = gap;
}