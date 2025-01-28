// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

const agregarAmigo = () =>{

    if(inputNombre.value === ''){
        alert('Debe ingresar un nombre válido');
        return;
    }

    let nombre = inputNombre.value;
    amigos.push(nombre);
    inputNombre.value = '';
    console.log(amigos);

    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) =>{
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });

}

const sortearAmigo = () =>{
    if(amigos.length === 0){
        alert('No hay amigos para sortear, por favor añada amigos');
        return;
    }

    if(amigos.length === 1){
        alert('No se puede sortear con un solo amigo');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    resultado.innerHTML = '';
    resultado.innerHTML += `<h2>El amigo sorteado es: ${amigoSorteado}</h2>`;

}