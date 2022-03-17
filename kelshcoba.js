const main = document.querySelector('#js-main');
const animal = document.querySelector('#js-animal');
const progressBar = document.querySelector('#js-progressbar');
let mainScroll = main.scrollTop;
let mainHeight = main.scrollHeight - main.clientHeight;
let scrollPercent = (mainScroll / mainHeight) * 100;

progressBar.setAttribute('value', scrollPercent);
animal.style.setProperty('--move', scrollPercent + '%');

main.addEventListener('scroll', function() {
  mainScroll = main.scrollTop;
  mainHeight = main.scrollHeight - main.clientHeight;
  scrollPercent = (mainScroll / mainHeight) * 100;
  progressBar.setAttribute('value', scrollPercent);
  animal.style.setProperty('--move', scrollPercent + '%');
});

function gameFunction() {
    location.replace("game.html")
}

