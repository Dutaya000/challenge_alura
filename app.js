// Array para almacenar los nombres de los amigos
let amigos = [];

// Referencias a elementos del DOM
const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = input.value.trim(); // Captura y limpia el valor del campo

    // Validar la entrada
    if (!validarEntrada(nombre)) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array y limpiar el campo de entrada
    amigos.push(nombre);
    input.value = "";

    // Mostrar la lista actualizada
    mostrarListaAmigos();
}

// Función para validar que el nombre no esté vacío
function validarEntrada(nombre) {
    return nombre !== "";
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    lista.innerHTML = ""; // Limpiar la lista existente

    // Crear elementos <li> para cada amigo y agregarlos a la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio y obtener el amigo sorteado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    resultado.innerHTML = `<li>El amigo secreto es: ${amigo}</li>`;
}
