"use strict";

const input = document.querySelector("#idNome");

console.log(input.value);

setTimeout( () => {
    input.value = "Abacate";
    console.log(input.value);
}, 1000);