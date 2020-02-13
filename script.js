"use strict";
window.addEventListener("DOMContentLoaded", randomNum);

// const array = [20, 12, 5, 10, 25, 8, 25, 30, 2, 17, 28, 10, 15, 4, 20, 34, 28, 1];
// const array = [0, 0];
const array = [];
array.length = 40;

function randomNum() {
  let random = Math.floor(Math.random() * 32);
  array.push(random);

  array.shift();

  setTimeout(setHeight, 1000);
}

function setHeight() {
  document.querySelectorAll(".bar").forEach((bar, i) => {
    bar.style.setProperty("--height", array[i]);
  });
  randomNum();
}

//   let bar;
//   for (let i = 0; i < 20; i++) {
//     // find the first bar
//     const bar = document.querySelector(`#bars > div:nth-child(${i + 1})`);
//     bar.style.setProperty("--height", array[i]);
//   }
