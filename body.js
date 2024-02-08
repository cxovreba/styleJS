const body = document.querySelector('.main');

export function main_container(display, flexDirection, alignItems, textAlign, background, width, gap, paddingBlock) {
    const main = document.createElement('div');
    main.style.display = display;
    main.style.flexDirection = flexDirection;
    main.style.alignItems = alignItems;
    main.style.textAlign = textAlign;
    main.style.background = background;
    main.style.width = width;
    main.style.gap = gap;
    main.style.paddingBlock = paddingBlock;
    body.appendChild(main);
}