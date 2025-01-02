"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkedValues = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const checkbox = form.checkbox;

    
    submit.innerHTML = checkedValues;
});

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const checkbox = form.checkbox;
//     checkValues = [];

//     checkbox.forEach(element => {
//         if(element.checked) {
//             checkValues.push(element.value);
//             console.log(checkValues)
//         }        
//     });

//     submit.innerHTML = checkValues;
// });

form.checkbox.forEach((element) => {
    element.addEventListener("change", (event) => {
        hasChecked(event, element);
        change.innerHTML = checkedValues;
    });
});

const hasChecked = (event, element) => {
    const { target } = event;

    if(target.checked){
        return checkedValues.push(element.value)
    }

    if(!target.checked){
        return checkedValues.map((checkedValue, index) => {
            if(element.value === checkedValue){
                return checkedValues.splice(index, 1);
            }
        })
    }
}