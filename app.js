// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;

    if(nombre.trim() === "" || nombre.trim().length <= 1){
        alert("Por favor, digite un nombre valido");
        limpiarCaja();       
    }else{
        if(listaAmigos.includes(nombre)){
            alert(`${nombre} ya ha sido ingresado. Digite otro nombre`)
            limpiarCaja();
        }else{
            listaAmigos.push(nombre);
        }
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
        itemLista.className = "item-lista";
        itemLista.innerHTML = `<span>${amigos}</span> <button class="eliminar" data-indice="${i}"><img src="assets/usuario.png" alt="Eliminar"></button>`;
        lista.appendChild(itemLista);
    }
    let botonesEliminar = document.querySelectorAll(".eliminar");
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", function() {
            let indice = parseInt(this.getAttribute("data-indice"));
            listaAmigos.splice(indice, 1);
            listadoAmigos();
        });
    });
}

function sortearAmigo(){
    if(listaAmigos.length >= 1){
        let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoSecreto = listaAmigos[indiceAleatorio];
        let sorteado = document.getElementById("resultado");
        sorteado.innerHTML = "";
        let itemSorteado = document.createElement("li");
        listaAmigos.splice(indiceAleatorio,1);
        listadoAmigos();
        itemSorteado.textContent = amigoSecreto;
        sorteado.appendChild(itemSorteado);
        if(listaAmigos.length == 0){
            alert("Todos los participantes fueron sorteados.");
        }        
    }else{
        alert("Ingrese uno o más nombres para sortear la lista")
    }
    
}

function limpiarLista(){
    listaAmigos = [];
    listadoAmigos();
    let sorteado = document.getElementById("resultado");
    sorteado.innerHTML = "";
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}