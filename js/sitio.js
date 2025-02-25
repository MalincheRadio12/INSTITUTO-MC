// Configuración de fondo para un botón de video
document.querySelectorAll('.video-container').forEach(video => {
    video.style.background = "url('owl.video.play.png') no-repeat";
    video.style.backgroundSize = "cover";
});



// Iniciamos Smoothscroll
new SmoothScroll('a[href*="#"]').init({
    speed: 10,  // Velocidad de desplazamiento en milisegundos
    offset: 10, // Desplazamiento en píxeles
});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTÓN IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });
});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {
    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});

// Animación simple con scroll (reemplaza WOW.js)
$(window).on('scroll', function () {
    $('.elemento-animado').each(function () {
        var elementTop = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scrollPos + windowHeight > elementTop + 100) {  // 100px de margen
            $(this).addClass('elemento-visible');  // Agrega la clase de visibilidad
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const formularioBuscar = document.querySelector('#bloque-buscar');

    formularioBuscar.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita la recarga del formulario

        const input = formularioBuscar.querySelector('input[type="text"]');
        const palabraClave = input.value.trim().toLowerCase(); // Normaliza la palabra clave
        const contenido = document.body; // Todo el contenido de la página
        let encontrado = false;

        // Limpia cualquier resaltado previo
        const marcas = contenido.querySelectorAll('mark');
        marcas.forEach((marca) => {
            const texto = document.createTextNode(marca.textContent);
            marca.parentNode.replaceChild(texto, marca);
        });

        if (palabraClave) {
            // Buscar y resaltar coincidencias
            const texto = contenido.innerHTML;
            const regex = new RegExp(`(${palabraClave})`, 'gi');

            if (regex.test(texto)) {
                contenido.innerHTML = texto.replace(regex, '<mark>$1</mark>'); // Resalta las palabras encontradas
                const primeraCoincidencia = document.querySelector('mark');
                if (primeraCoincidencia) {
                    primeraCoincidencia.scrollIntoView({ behavior: 'smooth' }); // Desplaza a la primera coincidencia
                    encontrado = true;
                }
            }
        }

        if (!encontrado) {
            alert('No se encontró la palabra clave.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');

    // Preguntas y respuestas predefinidas
    const preguntas = [
        { pregunta: '¿Cuáles son los horarios?', respuesta: 'Nuestros horarios son de lunes a viernes de 10:00 am a 6:00 pm.' },
        { pregunta: '¿Cuánto cuesta la inscripción?', respuesta: 'El costo de inscripción es de $950 MXN.' },
        { pregunta: '¿Dónde están ubicados?', respuesta: 'Estamos en Apizaco, Tlaxcala. Consulta nuestra sección de sucursales.' },
        { pregunta: '¿Tienen clases en línea?', respuesta: 'Sí, contamos con una plataforma en línea para tus estudios.' },
        { pregunta: '¿Puedo inscribirme desde otro estado?', respuesta: 'Sí, puedes inscribirte desde cualquier lugar de México.' },
        // Agrega más preguntas y respuestas aquí
    ];

    let indiceInicio = 0;

    // Mostrar tres preguntas a la vez
    const mostrarPreguntas = () => {
        chatOptions.innerHTML = '';
        const opcionesVisibles = preguntas.slice(indiceInicio, indiceInicio + 3);
        opcionesVisibles.forEach(({ pregunta }) => {
            const boton = document.createElement('button');
            boton.classList.add('chat-option');
            boton.textContent = pregunta;
            boton.addEventListener('click', () => enviarPregunta(pregunta));
            chatOptions.appendChild(boton);
        });
    };

    const enviarPregunta = (pregunta) => {
        // Mostrar la pregunta en el chat
        const preguntaElemento = document.createElement('div');
        preguntaElemento.classList.add('chat-response', 'user');
        preguntaElemento.textContent = pregunta;
        chatMessages.appendChild(preguntaElemento);

        // Mostrar la respuesta en el chat
        const respuesta = preguntas.find(p => p.pregunta === pregunta)?.respuesta || 'Lo siento, no tengo una respuesta para eso.';
        const respuestaElemento = document.createElement('div');
        respuestaElemento.classList.add('chat-response');
        respuestaElemento.textContent = respuesta;
        chatMessages.appendChild(respuestaElemento);

        // Desplazar el chat hacia abajo
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Actualizar preguntas visibles
        indiceInicio = (indiceInicio + 1) % preguntas.length;
        mostrarPreguntas();
    };

    // Inicia mostrando las primeras preguntas
    mostrarPreguntas();
});
