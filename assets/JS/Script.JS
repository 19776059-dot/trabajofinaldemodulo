// ===============================
// MOUNTAIN ESCAPE JAVASCRIPT
// ===============================


// Animación al cargar la página

window.addEventListener("load", () => {

    const hero = document.querySelector(".contenido-hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";


    setTimeout(() => {

        hero.style.transition = "1s";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    },300);


});




// Botón explorar destinos

const boton = document.querySelector(".contenido-hero button");


boton.addEventListener("click", () => {


    document.querySelector("#destinos").scrollIntoView({

        behavior:"smooth"

    });


});




// Efecto al pasar por las tarjetas

const tarjetas = document.querySelectorAll(".card");


tarjetas.forEach(card => {


    card.addEventListener("mouseenter",()=>{

        card.style.transition="0.3s";

    });


});