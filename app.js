// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creación de un array para almacenar los nombres

let amigos = [];
let amigosSorteo = [];

//Crear una función para agragar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo")
    let nombreAmigo = inputAmigo.value.trim();

    if(!nombreAmigo) {
        alert("Ingresar amigo");
        return;
    }
    //Nombre repetido
    if (amigos.includes(nombreAmigo)){
        alert("Nombre repetido, agraga otro nombre")
        return;   
    }
    //Actualizar el array, si es valido, se añade el nombre
        amigos.push(nombreAmigo);
        amigosSorteo.push(nombreAmigo);
    //Limpiar el campo de entrada, restablecer el campo de texto a 
    // entrada vacía    
        inputAmigo.value = "";
        inputAmigo.focus();
        renderizarAmigos(); 
   
}
//Crear una función que recorra el array amigos
function renderizarAmigos (){
    //Obtener el elemento lista
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiar lista para asegurar no haya duplicados al actualizar
    listaAmigos.innerHTML = "";
    //Iterar sobre el arreglo usando bucle for
    for (let i = 0; i < amigos.length; i++) {
    //Crear elementos de lista (<li>)    
        let item = document.createElement("li");
    //Agregar elementos a la lista: para cada amigo, 
    //crear un nuevo elemento de lista
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);   

    console.log(amigosSorteo);    
    }
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
//Implementar una función para sortear los amigos
function sortearAmigo() {
    //Validar que haya amigos disponibles 
    if(amigos.length === 0){
        alert("No hay amigos para sortear")
        return; 
    }
    if(amigos.length < 3){
        alert("Agrega al menos 3 amigos")
        return;
    }
    if(amigosSorteo.length === 0 ){
        alert("Ya se han sortedado todos los nombres");
    
        amigos = [... amigos];

    let limpiarLista = document.getElementById("listaAmigos");
        limpiarLista.innerHTML = "" ;
       
        }

    //Generar un índice aleatorio
    let indiceAleatorio = [Math.floor(Math.random()* amigosSorteo.length)];
    let amigoSorteado = amigosSorteo.splice(indiceAleatorio, 1)[0];
    //console.log(amigoSorteado);
    //obtener el nombre sorteado
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
   
    //let limpiarLista = document.getElementById("listaAmigos");
    //limpiarLista.innerHTML= ""
    
    }



