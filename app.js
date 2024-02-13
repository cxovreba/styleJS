const body = document.querySelector('.main');
const main = document.createElement('div');
const intro = document.createElement('div');
const details = document.createElement('div');
const subscribe = document.createElement('div');
const feature = document.createElement('div');
const email = document.createElement('div');

body.appendChild(main);
main.appendChild(intro);
main.appendChild(details);
body.appendChild(subscribe);
subscribe.appendChild(feature);
subscribe.appendChild(email);

main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.textAlign = 'center';
main.style.background = '#252B42';
main.style.width = '100%';
main.style.gap = '80px';
main.style.paddingBlock = '60px';
intro.style.width = '699px';
intro.style.display = 'flex';
intro.style.flexDirection = 'column';
intro.style.alignItems = 'center';
intro.style.gap = '40px';
details.style.display = 'flex';
details.style.width = '1155px';
details.style.gap = '30px';

function title(color, fontSize, fontWeight, letterSpacing, width, margin, text) {
    const title = document.createElement('div');
    title.style.color = color;
    title.style.fontSize = fontSize;
    title.style.fontWeight = fontWeight;
    title.style.letterSpacing = letterSpacing;
    title.style.width = width;
    title.style.margin = margin;
    title.textContent = text;
    return intro.appendChild(title);
}

title('#23A6F0', '16px', '700', '0.1px', '536px', '0', 'Welcome');
title('#FFFFFF', '57px', '700', '0.2px', '536px', '0', 'Selling on the internet like a pro');
title('#FFFFFF', '20px', '400', '0.2px', '536px', '0', 'We know how large objects will act, but things on a small scale just do not act that way.');

// function div(display, gap) {
//     const div = document.createElement('div');
//     div.style.display = display;
//     div.style.gap = gap;
//     return intro.appendChild(div);
// }

// div('flex', '10px');

function button(background_color, display_button, justifyContent, alignItems, width, height, color, fontSize, fontWeight, letterSpacing, border, borderRadius, text) {
    const button = document.createElement('button');
    button.style.background = background_color;
    button.style.display = display_button;
    button.style.justifyContent = justifyContent;
    button.style.alignItems = alignItems;
    button.style.width = width;
    button.style.height = height;
    button.style.color = color;
    button.style.fontSize = fontSize;
    button.style.fontWeight = fontWeight;
    button.style.letterSpacing = letterSpacing;
    button.style.border = border;
    button.style.borderRadius = borderRadius;
    button.textContent = text;
    return intro.appendChild(button);
}

button('#23A6F0', 'flex', 'center', 'center', '193px', '52px', '#FFFFFF', '14px', '700', '0.2px', '0', '5px', 'Get Quote Now');
button('#252B42', 'flex', 'center', 'center', '162px', '52px', '#23A6F0', '14px', '700', '0.2px', '1px solid #23A6F0', '5px', 'Learn More');

function card(width_card, display_card, flexDirection_card, alignItems_card, background_card, gap_card, padding_card, background_img, padding_img, borderRadius_img, img_url, text_title, width_title, height_title, fontSize_title, fontWeight_title, letterSpacing_title, color_title, width_rect, border_rect, text_info, textAlign_info, width_info, height_info, fontSize_info, fontWeight_info, letterSpacing_info, color_info) {
    const card = document.createElement('div');
    card.style.width = width_card;
    card.style.display = display_card;
    card.style.flexDirection = flexDirection_card;
    card.style.alignItems = alignItems_card;
    card.style.background = background_card;
    card.style.gap = gap_card;
    card.style.padding = padding_card;
    const smile = document.createElement('img');
    smile.style.background = background_img;
    smile.style.padding = padding_img;
    smile.style.borderRadius = borderRadius_img;
    smile.src = img_url;
    card.appendChild(smile);
    const title = document.createElement('div');
    title.textContent = text_title;
    title.style.width = width_title;
    title.style.height = height_title;   
    title.style.fontSize = fontSize_title;
    title.style.fontWeight = fontWeight_title;
    title.style.letterSpacing = letterSpacing_title;
    title.style.color = color_title;
    card.appendChild(title);
    const rect = document.createElement('div');
    rect.style.width = width_rect;
    rect.style.border = border_rect;
    card.appendChild(rect);
    const cardInfo = document.createElement('div');
    cardInfo.textContent = text_info;
    cardInfo.style.textAlign = textAlign_info;
    cardInfo.style.width = width_info;
    cardInfo.style.height = height_info;
    cardInfo.style.fontSize = fontSize_info;
    cardInfo.style.fontWeight = fontWeight_info;
    cardInfo.style.letterSpacing = letterSpacing_info;
    cardInfo.style.color = color_info;
    card.appendChild(cardInfo);
    return details.appendChild(card);
}

card('328px', 'flex', 'column', 'start', '#FFFFFF', '20px', '35px', '#FFDCD1', '20px', '10px', './icons/coolicon.png', 'training Courses', '135px', '24px', '15px', '700', '0.1px', '#252B42', '50px', '1px solid #E74040', 'The gradual accumulation of information about atomic and small-scale behaviour...', 'start', '222px', '60px', '14px', '400', '0.2px', '#737373');
card('328px', 'flex', 'column', 'start', '#FFFFFF', '20px', '35px', '#B9EAA8', '20px', '10px', './icons/coolicon (1).png', '2,769 online courses', '160px', '24px', '15px', '700', '0.1px', '#252B42', '50px', '1px solid #E74040', 'The gradual accumulation of information about atomic and small-scale behaviour...', 'start', '222px', '60px', '14px', '400', '0.2px', '#737373');
card('328px', 'flex', 'column', 'start', '#23A6F0', '20px', '35px', '#FFDCD1', '20px', '10px', './icons/coolicon (2).png', 'training Courses', '135px', '24px', '15px', '700', '0.1px', '#FFFFFF', '50px', '1px solid #FFFFFF', 'The gradual accumulation of information about atomic and small-scale behaviour...', 'start', '222px', '60px', '14px', '400', '0.2px', '#FFFFFF');

subscribe.style.display = 'flex';
subscribe.style.flexDirection = 'column';
subscribe.style.alignItems = 'center';
subscribe.style.textAlign = 'center';
subscribe.style.background = '#FFFFFF';
subscribe.style.width = '100%';
subscribe.style.gap = '80px';
subscribe.style.paddingBlock = '60px';
feature.style.width = '699px';
feature.style.display = 'flex';
feature.style.flexDirection = 'column';
feature.style.alignItems = 'center';
feature.style.gap = '40px';
email.style.width = '688px';
email.style.height = '58px';
email.style.display = 'flex';

function sub_title(color, fontSize, fontWeight, letterSpacing, width, margin, text) {
    const sub_title = document.createElement('div');
    sub_title.style.color = color;
    sub_title.style.fontSize = fontSize;
    sub_title.style.fontWeight = fontWeight;
    sub_title.style.letterSpacing = letterSpacing;
    sub_title.style.width = width;
    sub_title.style.margin = margin;
    sub_title.textContent = text;
    return feature.appendChild(sub_title);
}

sub_title('#23A6F0', '14px', '700', '0.2px', '445px', '0', 'Practice Advice');
sub_title('#252B42', '40px', '700', '0.2px', '445px', '0', 'Featured Products');
sub_title('#252B42', '14px', '400', '0.2px', '445px', '0', 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics');

function emailCheck(width, background, border, borderRadius, text) {
    const emailCheck = document.createElement('input');
    emailCheck.style.width = width;
    emailCheck.style.background = background;
    emailCheck.style.border = border;
    emailCheck.style.borderRadius = borderRadius;
    emailCheck.placeholder = text;
    return email.appendChild(emailCheck);
}

emailCheck('571px', '#F9F9F9', '1px solid #E6E6E6', '5px', 'Your Email');

function check(background_color, display_button, justifyContent, alignItems, width, height, color, fontSize, fontWeight, letterSpacing, border, borderRadius, text) {
    const check = document.createElement('button');
    check.style.background = background_color;
    check.style.display = display_button;
    check.style.justifyContent = justifyContent;
    check.style.alignItems = alignItems;
    check.style.width = width;
    check.style.height = height;
    check.style.color = color;
    check.style.fontSize = fontSize;
    check.style.fontWeight = fontWeight;
    check.style.letterSpacing = letterSpacing;
    check.style.border = border;
    check.style.borderRadius = borderRadius;
    check.textContent = text;
    return email.appendChild(check);
}

check('#23A6F0', 'flex', 'center', 'center', '193px', '58px', '#FFFFFF', '14px', '700', '0.2px', '0', '5px', 'Subscribe');