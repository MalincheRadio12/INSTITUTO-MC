function enviarCorreo(event) {
    event.preventDefault();  // Prevenir el envío por defecto del formulario

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const escolaridad = document.getElementById('escolaridad').value;
    const horario = document.getElementById('horario').value;
    const fechaInicio = document.getElementById('fecha-inicio').value;
    const padreTutor = document.getElementById('padre-tutor').value;
    const consultor = document.getElementById('consultor').value;

    // Crear el mensaje que se enviará por WhatsApp
    const mensaje = `
        *Formulario de Registro:*
        Nombre: ${nombre}
        Correo: ${correo}
        Fecha de Nacimiento: ${fechaNacimiento}
        Dirección: ${direccion}
        Teléfono: ${telefono}
        Escolaridad: ${escolaridad}
        Horario: ${horario}
        Fecha de Inicio: ${fechaInicio}
        Padre o Tutor: ${padreTutor}
        Consultor: ${consultor}
    `;

    // Reemplazar los saltos de línea y caracteres especiales
    const mensajeEncode = encodeURIComponent(mensaje.trim());

    // Número de WhatsApp al que se enviarán los datos
    const numeroWhatsApp = '2411621447';

    // URL para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeEncode}`;

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(urlWhatsApp, '_blank');

    // Redirigir a otra página web (por ejemplo, una página de agradecimiento)
    window.location.href = 'https://www.mercadopago.com.mx/checkout/v1/payment/redirect/cfa3b6b3-97e1-49d5-8f0f-c09adda22e3a/payment-option-form-v2/?preference-id=305220955-e628f1f3-e067-434c-9329-d96c08800844&router-request-id=ba139c64-55b9-4e23-aabe-5282e5da12a5&p=3ec27e98bfbb3b8830b62958baaffd4a';
}
