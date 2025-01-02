"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value;
    const senha = form.senha.value;

    const formData = new FormData(form);

    formData.set("name", name);
    formData.set("senha", senha);
    
    console.log(formData.has("name"));
    console.log(formData.has("senha"));

    console.log(formData.get("name"));
    console.log(formData.get("senha"));

    //if (formData.has("name") || formData.has("senha")) {
    //    console.log(formData.get("name"));
    //    console.log(formData.get("senha"));    
    //}
    
    // DELETE

    formData.delete("name");
    console.log(formData.has("name"));

    //formData.forEach((res) => {
    //    console.log(res);
    //})

    //if(name && senha) {
    //    console.log(name, senha);
    //
    //    form.submit();
    //}    
});