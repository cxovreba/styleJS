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

intro.innerHTML = `
    <h5>Welcome</h5>
    <h1>Selling on the internet like a pro</h1>
    <h4>We know how large objects will act, but things on a small scale just do not act that way.</h4>
    <div class="getIn">
        <button class="link">Get Quote Now</button>
        <button class="info-link">Learn More</button>
    </div>
`;
details.innerHTML = `
    <div class="card1">
        <div class="icon1"><img src="./icons/coolicon.png" alt=""></div>
        <div class="title1">training Courses</div>
        <div class="rectangle1"></div>
        <div class="card-info1">The gradual accumulation of information about atomic and small-scale behaviour...</div>
    </div>
    <div class="card2">
        <div class="icon2"><img src="./icons/coolicon (1).png" alt=""></div>
        <div class="title2">2,769 online courses</div>
        <div class="rectangle2"></div>
        <div class="card-info2">The gradual accumulation of information about atomic and small-scale behaviour...</div>
    </div>
    <div class="card3">
        <div class="icon3"><img src="./icons/coolicon (2).png" alt=""></div>
        <div class="title3">training Courses</div>
        <div class="rectangle3"></div>
        <div class="card-info3">The gradual accumulation of information about atomic and small-scale behaviour...</div>
    </div>
`;
feature.innerHTML = `
    <h6>Practice Advice</h6>
    <h2>Featured Products</h2>
    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
`;
email.innerHTML = `
    <input type="text" placeholder="Your Email">
    <button>Subscribe</button>
`;

main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.textAlign = 'center';
main.style.background = '#252B42';
main.style.width = '1440px';
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

import { h5 } from "./style.js";

h5('#23A6F0', '16px', '700', '0.1px', '536px', '0');

const h1 = document.querySelector('h1');
h1.style.color = '#FFFFFF';
h1.style.fontSize = '58px';
h1.style.fontWeight = '700';
h1.style.letterSpacing = '0.2px';
h1.style.width = '536px';
h1.style.margin = '0';

const h4 = document.querySelector('h4');
h4.style.color = '#FFFFFF';
h4.style.fontSize = '20px';
h4.style.fontWeight = '400';
h4.style.letterSpacing = '0.2px';
h4.style.width = '536px';
h4.style.margin = '0';


const getIn = document.querySelector('.getIn');
getIn.style.display = 'flex';
getIn.style.gap = '10px';

const link = document.querySelector('.link');
link.style.background = '#23A6F0';
link.style.display = 'flex';
link.style.justifyContent = 'center';
link.style.alignItems = 'center';
link.style.width = '193px';
link.style.height = '52px';
link.style.color = '#FFFFFF';
link.style.fontSize = '14px';
link.style.fontWeight = '700';
link.style.letterSpacing = '0.2px';
link.style.border = '0';
link.style.borderRadius = '5px';

const infoLink = document.querySelector('.info-link');
infoLink.style.background = '#252B42';
infoLink.style.display = 'flex';
infoLink.style.justifyContent = 'center';
infoLink.style.alignItems = 'center';
infoLink.style.width = '162px';
infoLink.style.height = '52px';
infoLink.style.color = '#23A6F0';
infoLink.style.fontSize = '14px';
infoLink.style.fontWeight = '700';
infoLink.style.letterSpacing = '0.2px';
infoLink.style.border = '1px solid #23A6F0';
infoLink.style.borderRadius = '5px';

import { card1 } from "./style.js";

card1('328px', 'flex', 'column', 'start', '#FFFFFF', '20px');

const smile = document.querySelector('.icon')