document.addEventListener("DOMContentLoaded", function() {
    const check = document.getElementById("check");
    const ul = document.querySelector("nav ul");
    const checkbtn = document.querySelector(".checkbtn"); // Agrega esta línea

    ul.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            check.checked = false; // Desmarca el checkbox
            ul.style.left = "-100%"; // Oculta la lista de menú
        }
    });

    // Agrega un controlador de eventos al icono de menú
    checkbtn.addEventListener("click", function() {
        if (check.checked) {
            ul.style.left = "0"; // Muestra la lista de menú
        } else {
            ul.style.left = "-100%"; // Oculta la lista de menú
        }
    });
});