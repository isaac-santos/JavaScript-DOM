"use strict";

/*
* textContent => Retorna o text COM formatações, mas sem os elementos HTML (tags)
* innerText => Retorna somente o texto, sem formatações ou elementos HTML (tags)
*/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

//p.textContent = "Dener Troquatte";
p.innerText = "<strong>Isaac</strong>";