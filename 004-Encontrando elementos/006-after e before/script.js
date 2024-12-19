"use strict";

const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Olá, Isaac!";

container.before(newP);
// container.after(newP);