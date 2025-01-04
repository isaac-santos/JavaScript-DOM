"use strict";

const form = document.forms.namedItem("registration");


// Fazendo com que o texto só apareça quando clicar no enviar


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const name = form.name.value;
    
//     const newDivElement = document.createElement('div');
//     newDivElement.innerText = name;

//     form.nextElementSibling.remove();
//     form.after(newDivElement);
// });


// Fazendo com que o texto apareça no decorrer da escrita

form.addEventListener('input', (event) => {
    event.preventDefault();
    
    const name = form.name.value;
    
    const newDivElement = document.createElement('div');
    newDivElement.innerText = name;
    
    form.nextElementSibling.remove();
    form.after(newDivElement);
});