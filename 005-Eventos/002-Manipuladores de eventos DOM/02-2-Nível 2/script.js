"use strict";

const btn = document.querySelector("button");

// btn.addEventListener('click', (event) => {
//     console.log(1);
//     // console.log(event);
//     // console.log(event.clientX, event.clientY);
// });

// btn.addEventListener('click', (event) => {
//     console.log(2);
// });

btn.addEventListener('click', (event) => {
    document.querySelector('body').style.background = "black";
});

btn.addEventListener('mouseleave', (event) => {
    document.querySelector('body').style.background = "white";
});

// btn.addEventListener('mouseover', (event) => {
//     document.querySelector('body').style.background = "white";
// });