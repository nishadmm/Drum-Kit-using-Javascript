const crashRide = document.getElementById('crash-ride'),
  hiHatTop = document.getElementById('hihat-top');

// Animation of cymbals
function animateCrashRide() {
  crashRide.style.transform = 'rotate(0deg) scale(1.6)';
}
function animateHiHatTop() {
  hiHatTop.style.top = '293px';
}

// Play audio
function playAudio(e) {

  // keyCode
  const datakey = e.keyCode;

  // Key
  const key = document.querySelector(`kbd[data-key="${datakey}"]`);

  if (!key) return;

  // AudioElement
  const audioElement = document.querySelector(`audio[data-key= "${datakey}"]`);
  audioElement.currentTime = 0;
  audioElement.play();

  // Statement For Animation Of Cymbals
  switch (datakey) {
    case 69:
    case 82:
      animateCrashRide();
      break;
    case 73:
    case 75:
      animateHiHatTop();
      break;
  }

  // Adding playing class in Key
  key.classList.add('playing');
};

// remove Animation of cymbals
function removeAnimateCrashRide(e) {
  e.target.style.transform = 'rotate(-7deg) scale(1.6)';
};

function removeAnimateHiHapTop(e) {
  e.target.style.top = '287px';
};

// remove Key Transition
function removeKeyTransition(e) {
  e.target.classList.remove('playing');
};

// Keys array
const drumbKeys = Array.from(document.querySelectorAll('.key'));

drumbKeys.forEach((key) => {

  key.addEventListener('transitionend', removeKeyTransition)

});

// cymbals Listner for remove animation 
crashRide.addEventListener('transitionend', removeAnimateCrashRide);
hiHatTop.addEventListener('transitionend', removeAnimateHiHapTop);

// Window Listner
window.addEventListener('click', playAudio);
// Bg-video playing listner
document.addEventListener('DOMContentLoaded', function () {
  const bgAudio = document.getElementById('bg-audio');
  bgAudio.currentTime = 0;
  bgAudio.play();
});