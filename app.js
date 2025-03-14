// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;

    if(nombre.trim() === "" || nombre.trim().length <= 1){
        alert("Por favor, inserte un nombre");
        limpiarCaja();       
    }else{
        listaAmigos.push(nombre);
    }
    limpiarCaja();
    listadoAmigos();
}

function listadoAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < listaAmigos.length ; i++){
        let amigos = listaAmigos[i];
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos;
        lista.appendChild(itemLista);
    }
}

function sortearAmigo(){
    if(listaAmigos.length > 1){
        let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        alert(`El amigo sorteado es: ${amigoSorteado}.`)
    }else{
        alert("Ingrese dos o más nombres para sortear la lista")
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}