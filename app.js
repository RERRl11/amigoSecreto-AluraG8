// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    let verificaNombre = Array.from(nombre);
    console.log(nombre);
    console.log(verificaNombre);
    if(nombre == " " || nombre == "" || verificaNombre < 2){
        alert("Por favor, inserte un nombre");
        limpiarCaja();       
    }else{
        limpiarCaja();
        listaAmigos.push(nombre);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}