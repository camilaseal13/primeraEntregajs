//Simulador de entrenamiento y recetas 

const rutinas = { // acá defino 3 opciones disponibles con sus respectivas rutinas y con el uso de .sort() ordeno la información alfabeticamente 
    deficitCalorico: ["Correr 30 min", "Sentadillas 3x15", "Burpees 3x10", "Planchas 3x30 segundos"].sort(),
    ganarMusculo: ["Peso muerto 3x10", "Press de banca 3x12", "Sentadillas 4x12", "Dominadas 3x8"].sort(),
    mantenerseForma: ["Trotar 20 min", "Flexiones 3x12", "Sentadillas 3x15", "Abdominales 3x20"].sort()
};

const comidas = { // acá tengo varis sugerencias de comidas dependiendo la opción escogida por el usuario y con el uso de .sort() ordeno la información alfabeticamente 
    deficitCalorico: ["Ensalada verde", "Pescado al horno con verduras", "Sopa de verduras", "Frutas frescas"].sort(),
    ganarMusculo: ["Pollo a la parrilla con arroz integral", "Batido de proteínas", "Tortilla de claras de huevo con espinacas", "Frutos secos"].sort(),
    mantenerseForma: ["Yogur con granola y frutas", "Salmón con quinoa", "Pasta integral con verduras", "Té verde"].sort()
};

const datos = {
    ingreso: false, //aún el usuario no ha iniciado sesión porque falta que cree el usuario y la contraseña 
    usuario: null, // como no está autenticado aún, de deja el valor como null
    contrasenia: null //como no está autenticado aún, de deja el valor como null y se usa la palabra contrasenia en vez de contraseña ya que no se deben usar caracteres especiales
};

alert("Bienvenid@ a la asesoria virtual") //se le da la bienvenida al usuario 

function crearAcceso() {
    // Permite al usuario crear una cuenta con nombre de usuario y contraseña
    let usuarioValido = false;
    let contraseniaValida = false;

    // Validar el nombre de usuario
    while (!usuarioValido) {
        const nombreUsuario = prompt("Cree su nombre de usuario (solo letras y números):"); // se lo pido al usuario

        //verifica que el usuario haya creado un nombre de usuario correcto

        const patronUsuario = /^[a-zA-Z0-9]+$/; //un ejemplo patrón que me ayuda a entender qué entradas se pueden y cuales no 

        if (patronUsuario.test(nombreUsuario)) { //valida que se cumplan los requisitos 
            datos.usuario = nombreUsuario; // guarda lo que ingresé en nombreUsuario en datos.usuarios
            usuarioValido = true;  //valida la conexión
        } else {
            alert("El nombre de usuario solo puede contener letras y números. Inténtelo de nuevo."); //sale este mensaje si no se cumplen los requisitos
        }
    }

    // Validar la contraseña
    while (!contraseniaValida) {
        const contrasenia = prompt("Cree su contraseña (solo letras y números):"); //le pido esto al usuario

        // Verifica si la contraseña cumple con los requisitos 

        const patronContrasenia = /^[a-zA-Z0-9]+$/; //un ejemplo patrón que me ayuda a entender qué entradas se pueden y cuales no 

        if (patronContrasenia.test(contrasenia)) {   // revisa que el valor ingresado en contrasenia cumpla con los requisitos
            datos.contrasenia = contrasenia; // Guarda el valor ingresado desde contrasenia a datos.contrasenia
            contraseniaValida = true; // Marca como válida para salir del bucle e "iniciar sesión"
        } else {
            alert("La contraseña solo puede contener letras y números. Inténtelo de nuevo."); //sale este mensaje si no se cumplieron los requisitos previos mencionados 
        }
    }

    alert("La cuenta ha sido creada satisfactoriamente. Ahora puede iniciar sesión.");
}


function login(intentos, maximaCantidadIntentos) { //creo una funciona llamada login

    alert(`Tiene ${maximaCantidadIntentos} intentos posibles de ingresar, este es su intento ${intentos + 1}`); //hago uso de `` para así poder usar variables como maximaCantidadIntentos y intentos 
    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    let contrasenia = prompt("Ingrese su contraseña");

    if (nombreUsuario === datos.usuario && contrasenia === datos.contrasenia) {
        alert("Bienvenido, " + nombreUsuario);
        datos.ingreso = true;
        return true;
    } else {
        alert(`Le quedan ${maximaCantidadIntentos - (intentos + 1)} intentos`);
        return false;
    }
}

function loginLoop(intentos, maximaCantidadIntentos) {   //acá defino cuantas veces se puede realizar el login

    do {
        if (login(intentos, maximaCantidadIntentos)) {
            break; // termina el ciclo
        }
        intentos++;
    } while (intentos < maximaCantidadIntentos); // se repite mientras que los intentos sean menos que la maxima cantidad de intentos
}

function mostrarRutina(objetivo) {  //creo una funcion la cual me muestra varias opciones dependiendo de la opcion que escoja 
    let ejercicios = []; //creo un array vacio para guardar los valores de ejercicios 
    switch (objetivo) {  //creo un switch con 3 cases

        case "1":
            ejercicios = rutinas.deficitCalorico;  // muestro los ejercicios cogiendo la primera variable definida que es deficitCalorico
            alert("Tu objetivo es deficit Calorico. Aquí está tu rutina diaria:");
            break;
        case "2":
            ejercicios = rutinas.ganarMusculo; // muestro los ejercicios cogiendo la segunda variable definida que es ganarMusculo
            alert("Tu objetivo es ganar músculo. Aquí está tu rutina diaria:");
            break;
        case "3":
            ejercicios = rutinas.mantenerseForma; // muestro los ejercicios cogiendo la tercera variable definida que es mantenerseForma
            alert("Tu objetivo es mantenerte en forma. Aquí está tu rutina diaria:");
            break;
    }

    // Mostrar los ejercicios en un solo alert
    let rutinaCompleta = "Rutina diaria:\n";
    for (let i = 0; i < ejercicios.length; i++) {
        rutinaCompleta += `${i + 1}. ${ejercicios[i]}\n`;
    }
    alert(rutinaCompleta);
}

function mostrarComidas(objetivo) {  // creo una funcion con la cual pueda mostrar las comidas sugeridas dependiendo de mi decision anterior
    let comidasEjemplo = [];
    switch (objetivo) {
        case "1":
            comidasEjemplo = comidas.deficitCalorico;
            alert("Ejemplos de comidas para deficit Calorico peso:");
            break;
        case "2":
            comidasEjemplo = comidas.ganarMusculo;
            alert("Ejemplos de comidas para ganar músculo:");
            break;
        case "3":
            comidasEjemplo = comidas.mantenerseForma;
            alert("Ejemplos de comidas para mantenerse en forma:");
            break;
    }

    // Mostrar las comidas en un solo alert
    let listaComidas = "Comidas recomendadas:\n";
    for (let i = 0; i < comidasEjemplo.length; i++) {
        listaComidas += `${i + 1}. ${comidasEjemplo[i]}\n`;
    }
    alert(listaComidas);
}

const preguntaSeleccion = () => { // uso de funcion flecha para cambiar de forma de escribir las funciones 
    // Función con lista de opciones y devuelve la selección elegida
    let eleccion = prompt("Que desea hacer: \n1 - deficitCalorico\n2 - Ganar Músculo\n3 - Mantenerse en Forma\nPor favor ingrese el número del proceso seleccionado."); //la variable elección me gusta lo escogido por el usuario
    return eleccion;
};

const selector = (eleccion) => {
    switch (eleccion) {
        case "1":
        case "2":
        case "3":
            mostrarRutina(eleccion);
            mostrarComidas(eleccion); 
            break;
        default:
            alert("Ingreso un valor inválido"); // si no se escoge ninguno de los cases anteriores, se muestra este mensaje 
    }
};

const inicializar = () => {
    crearAcceso();  // Llamada para crear una cuenta antes de iniciar sesión
    let intentos = 0;
    const maximaCantidadDeIntentos = 4; // Defino la máxima cantidad de intentos

    // Llamada al login
    loginLoop(intentos, maximaCantidadDeIntentos);

    if (datos.ingreso) {
        let loop = true;
        do {
            const eleccion = preguntaSeleccion(); // Pregunta al usuario qué opción desea elegir
            selector(eleccion); // Ejecuta la función correspondiente según la elección
            loop = confirm("¿Desea continuar?"); // Pregunta al usuario si quiere continuar
        } while (loop); // Repite el bucle mientras el usuario elija continuar
    }
};

// Inicia la simulación completa sin necesidad de usar la consola 
inicializar();
