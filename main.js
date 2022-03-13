// credits: https://codepen.io/chriscoyier/pen/eYNQyPe

const range = document.querySelector('#gridsize-input');
const bubble = document.querySelector('.range-bubble');
range.addEventListener("input", () => setBubble(range, bubble));
setBubble(range, bubble);

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = `${val}x${val}`;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
