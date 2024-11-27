"use strict";

const h1 = document.querySelector("h1");
const classP = document.querySelector(".paragrafo strong");// espaço para o js procurar o filho
const idP = document.querySelector("#paragrafo");

console.log(h1);
console.log(classP/* ou .querySelector("strong")*/);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
    title.innerText = Timer;
    timer++
}, 1000);