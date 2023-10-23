//el js solo se ejecuta si el dom esta cargado
addEventListener("DOMContentLoaded", (event) => {
    
    // Carrousel de Homepage
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    //Define que slide mostrar segun cual es el slide actualmente siendo mostrado
    if(slides.length != 0){
        function showSlide(n) {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + n + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        //Inicia en el primer slide
        showSlide(0);
    }

    //permite a los botones del carrousel cambiar la imagen
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');

    if(prev && next){
        prev.addEventListener('click', event => {
            showSlide(-1);
        });

        next.addEventListener('click', event => {
            showSlide(1);
        });
    }

    // Validacion de Formulario

    const contactForm = document.getElementById("ContactForm");
    const nombreInput = document.getElementById("Nombre");
    const apellidoInput = document.getElementById("Apellido");
    const emailInput = document.getElementById("Email");
    const telefonoInput = document.getElementById("Telefono");
    const asuntoInput = document.getElementById("Asunto");
    const mensajeInput = document.getElementById("Mensaje");


    const nombreError = document.getElementById("nombreError");
    const apellidoError = document.getElementById("apellidoError");
    const emailError = document.getElementById("emailError");
    const telefonoError = document.getElementById("telefonoError");
    const asuntoError = document.getElementById("asuntoError");
    const mensajeError = document.getElementById("mensajeError");

    //Si el formulario existe,
    if (contactForm){
        //Cuando se envia el formulario,
        contactForm.addEventListener("submit", function(event) {
            let isValid = true;

            // Validación de nombre
            if (nombreInput.value.trim() === "") {
                nombreError.textContent = "El nombre es obligatorio";
                isValid = false;
            } else {
                nombreError.textContent = "";
            }

            // Validación de apellido
            if (apellidoInput.value.trim() === "") {
                apellidoError.textContent = "El apellido es obligatorio";
                isValid = false;
            } else {
                apellidoError.textContent = "";
            }

            // Validación de correo electrónico
            const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Ingresa un correo electrónico válido";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Validación de teléfono
            const phonePattern = /^\d{10}$/; // Asumiendo un formato de 10 dígitos
            if (!phonePattern.test(telefonoInput.value)) {
                telefonoError.textContent = "Ingresa un número de teléfono válido (10 dígitos)";
                isValid = false;
            } else {
                telefonoError.textContent = "";
            }

            // Validación de asunto
            if (asuntoInput.value.trim() === "") {
                asuntoError.textContent = "El asunto es obligatorio";
                isValid = false;
            } else {
                asuntoError.textContent = "";
            }

            // Validación de mensaje
            if (mensajeInput.value.trim() === "") {
                mensajeError.textContent = "El mensaje es obligatorio";
                isValid = false;
            } else {
                mensajeError.textContent = "";
            }

            if (!isValid) {
                event.preventDefault(); // Evita el envío del formulario si hay errores
            }
        });
    }

    //Funcion para hacer el nav responsive
    const habilitarMenu = document.querySelector('.habilitar-menu');
    const navLinks = document.querySelector('.nav-links');
    
    habilitarMenu.addEventListener('click', () => {
        navLinks.classList.toggle('mostrar');
    });

    //si el banner existe
    if(document.querySelector('.banner')){
        //realiza un fetch a una api de valor del dolar
        fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            data.forEach(dolar => {
                //Cuando encuentra el dolar correcto en el array, cambia los valores correspondientes en el html
                if (dolar.casa == 'oficial'){
                    document.querySelector("#precioDolar").innerHTML = dolar.venta;
                };
                if (dolar.casa == 'blue'){
                    document.querySelector("#precioDolarBlue").innerHTML = dolar.venta;
                };
            });
        });
    }
    
    const sectionTitles = document.querySelectorAll('.section-title, .section-title2');

    //Si hay alguna seccion
    if(sectionTitles.length != 0){
        //Permite hacerle click al titulo y abrir su contenido
        sectionTitles.forEach(title => {
            title.addEventListener('click', () => {
                const content = title.nextElementSibling;
                content.classList.toggle('hidden');
            });
        });
    }


});
