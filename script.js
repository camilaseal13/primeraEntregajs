// Definir las rutinas de ejercicios y comidas según el objetivo del usuario
const rutinas = {
    deficitCalorico: ["Correr 30 min", "Sentadillas 3x15", "Burpees 3x10", "Planchas 3x30 segundos"].sort(),
    ganarMusculo: ["Peso muerto 3x10", "Press de banca 3x12", "Sentadillas 4x12", "Dominadas 3x8"].sort(),
    mantenerseForma: ["Trotar 20 min", "Flexiones 3x12", "Sentadillas 3x15", "Abdominales 3x20"].sort()
};

const comidas = {
    deficitCalorico: ["Ensalada verde", "Pescado al horno con verduras", "Sopa de verduras", "Frutas frescas"].sort(),
    ganarMusculo: ["Pollo a la parrilla con arroz integral", "Batido de proteínas", "Tortilla de claras de huevo con espinacas", "Frutos secos"].sort(),
    mantenerseForma: ["Yogur con granola y frutas", "Salmón con quinoa", "Pasta integral con verduras", "Té verde"].sort()
};

// Datos del usuario
const datos = {
    usuario: null,
    contrasenia: null,
    ingreso: false
};

// Crear cuenta
document.getElementById("create-account").addEventListener("click", () => {
    // Obtener nombre de usuario y contraseña
    const nombreUsuario = document.getElementById("username").value;
    const contrasenia = document.getElementById("password").value;

    // Validar que solo contengan letras y números
    if (/^[a-zA-Z0-9]+$/.test(nombreUsuario) && /^[a-zA-Z0-9]+$/.test(contrasenia)) {
        datos.usuario = nombreUsuario;
        datos.contrasenia = contrasenia;
        localStorage.setItem("datos", JSON.stringify(datos)); // Guardar en almacenamiento local
        alert("Cuenta creada con éxito. Ya puede continuar e iniciar sesión.");
    } else {
        alert("Entrada incorrecta. El usuario y la contraseña solo pueden contener letras y números.");
    }
});

// Iniciar sesión
document.getElementById("login").addEventListener("click", () => {
    // Obtener los datos ingresados de usuario y contraseña
    const usuarioIngresado = document.getElementById("login-username").value;
    const contraseniaIngresada = document.getElementById("login-password").value;
    const datosGuardados = JSON.parse(localStorage.getItem("datos")); // Recuperar datos guardados

    // Verificar que los datos ingresados coincidan con los guardados
    if (datosGuardados && usuarioIngresado === datosGuardados.usuario && contraseniaIngresada === datosGuardados.contrasenia) {
        datos.ingreso = true;
        document.getElementById("login-section").style.display = "none"; 
        document.getElementById("goal-selection").style.display = "block"; 
    } else {
        document.getElementById("login-message").textContent = "Credenciales incorrectas. Por favor inténtelo de nuevo.";
    }
});

// Selección de objetivo
document.querySelectorAll("#goal-selection button").forEach(boton => {
    boton.addEventListener("click", (evento) => {
        const objetivo = evento.target.getAttribute("data-goal");
        mostrarRutinaYComida(objetivo); 
    });
});

// Función para mostrar la rutina y comidas recomendadas
function mostrarRutinaYComida(objetivo) {
    const ejercicios = obtenerRutina(objetivo);
    const comidasRecomendadas = obtenerComidas(objetivo);

    // Mostrar la lista de ejercicios
    const listaEjercicios = document.getElementById("exercise-list");
    listaEjercicios.innerHTML = "<h3>Rutina diaria:</h3>";
    ejercicios.forEach(ejercicio => {
        const item = document.createElement("li");
        item.textContent = ejercicio;
        listaEjercicios.appendChild(item);
    });

    // Mostrar la lista de comidas
    const listaComidas = document.getElementById("meal-list");
    listaComidas.innerHTML = "<h3>Comidas recomendadas:</h3>";
    comidasRecomendadas.forEach(comida => {
        const item = document.createElement("li");
        item.textContent = comida;
        listaComidas.appendChild(item);
    });

    // Mostrar la sección de resultados
    document.getElementById("results").style.display = "block";
}

// Obtener la rutina según el objetivo seleccionado
function obtenerRutina(objetivo) {
    switch (objetivo) {
        case "1": return rutinas.deficitCalorico;
        case "2": return rutinas.ganarMusculo;
        case "3": return rutinas.mantenerseForma;
        default: return [];
    }
}

// Obtener las comidas recomendadas según el objetivo seleccionado
function obtenerComidas(objetivo) {
    switch (objetivo) {
        case "1": return comidas.deficitCalorico;
        case "2": return comidas.ganarMusculo;
        case "3": return comidas.mantenerseForma;
        default: return [];
    }
}
