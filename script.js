//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.addEventListener('scroll', function () {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    // Compruebo  si el usuario está en la sección de skills
    if (distancia_skills >= 300) {
        // Añado las  clases para iniciar las animaciones
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    } else {
        // Si el usuario ya no está en la sección, elimino  las clases para reiniciar la animación
        document.getElementById("html").classList.remove("barra-progreso1");
        document.getElementById("js").classList.remove("barra-progreso2");
        document.getElementById("bd").classList.remove("barra-progreso3");
        document.getElementById("ps").classList.remove("barra-progreso4");
    }
    
});

window.addEventListener('scroll', function () {
    var proyectos = document.getElementById("proyectos");
    var proyectosItems = proyectos.getElementsByClassName("proyecto");

    Array.from(proyectosItems).forEach(function (proyecto) {
        var distancia_proyecto = window.innerHeight - proyecto.getBoundingClientRect().top;

        // Si el proyecto entra en la vista (por ejemplo, con 300px de margen)
        if (distancia_proyecto >= 50) {
            // Añadimos la clase 'visible' cuando entra en la vista
            if (!proyecto.classList.contains("visible")) {
                proyecto.classList.add("visible");
                proyecto.classList.remove("hidden"); // Elimina la clase hidden si la tiene
            }
        } else {
            // Si el proyecto sale de la vista, añadimos la clase 'hidden'
            if (!proyecto.classList.contains("hidden")) {
                proyecto.classList.add("hidden");
                proyecto.classList.remove("visible"); // Elimina la clase visible si la tiene
            }
        }
    });
}); 



