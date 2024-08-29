function validarFormulario() {
    // Validar Email
    const email = document.getElementById("email").value;
    const errorEmail = document.getElementById("error-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorEmail.textContent = "Por favor, introduzca un email válido.";
        errorEmail.style.color = "red";
        return false;
    } else {
        errorEmail.textContent = ""; // Limpiar mensaje de error
    }

    // Validar Contraseñas
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorPassword = document.getElementById("error-password");

    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres y al menos una letra mayúscula.";
        errorPassword.style.color = "red";
        return false;
    }

    if (password !== confirmPassword) {
        errorPassword.textContent = "Las contraseñas no coinciden.";
        errorPassword.style.color = "red";
        return false;
    } else {
        errorPassword.textContent = ""; // Limpiar mensaje de error
    }

    // Validar Fecha de Nacimiento
    const fechaNacimiento = new Date(document.getElementById("fecha-nacimiento").value);
    const fechaActual = new Date();
    const errorFecha = document.getElementById("error-fecha-nacimiento");

    if (fechaNacimiento >= fechaActual) {
        errorFecha.textContent = "La fecha de nacimiento debe ser anterior al día de hoy.";
        errorFecha.style.color = "red";
        return false;
    } else {
        errorFecha.textContent = ""; // Limpiar mensaje de error
    }

    // Validar que los campos no tengan solo espacios en blanco
    const inputs = document.querySelectorAll("input[type='text'], input[type='password'], input[type='email'], select");
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Por favor, complete todos los campos correctamente.");
            return false;
        }
    }

    // Mostrar mensaje de feedback tras enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}

function cambiarEstilo() {
    const stylesheet = document.getElementById("stylesheet");
    if (stylesheet.getAttribute("href") === "css/style1.css") {
        stylesheet.setAttribute("href", "css/style2.css");
    } else {
        stylesheet.setAttribute("href", "css/style1.css");
    }
}

