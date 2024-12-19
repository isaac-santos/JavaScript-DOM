"use strict";

const container = document.querySelector(".container");

//container.append("Olá Isaac!")

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Isaac!"
container.appendChild(newDiv);