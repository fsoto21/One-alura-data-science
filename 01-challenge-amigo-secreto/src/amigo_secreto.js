let amigos = []; // Lista de amigos

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que solo contenga letras y espacios
    if (!esTextoValido(nombre)) {
        alert("Solo se permiten letras en el nombre.");
        return;
    }

    // Verificar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    actualizarLista();
    limpiarCaja();
}

// Función para validar que solo haya letras y espacios
function esTextoValido(texto) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(texto);
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) { // Validar que haya al menos dos nombres
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    document.getElementById("resultado").textContent = "Amigo Secreto: " + amigos[indice];
}

// Función para limpiar el campo de entrada después de añadir un nombre
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}