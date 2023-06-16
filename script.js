//Seleccionar Elementos HTML
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultado');

form.addEventListener('submit', sumar); // ejecutar evento

function sumar(event){
    event.preventDefault();//no ejecute por defecto lo que deberia ejecutar, (se recarga la pag por submit)
    const resultado = parseInt(input1.value) + parseInt(input2.value)
    result.innerText = "Resultado: " + resultado;
}


//Cambiar html desde js
// h1.innerText = 'Otro titulo';
// h1.getAttribute(''); //nos ayuda a leer alguno de los atributos que tenga nuestro elemento
// h1.setAttribute(''); //cambiar o agregar un atributo 
// h1.classList.add(''); //agregar Clase adicional
// h1.classList.remove(''); //eliminar clase
//h1.classList.toggle(''); //quitar o poner clases
// h1.classList.contains(''); //devuelve true o false dependiendo de la clase que elijamos

// input.value = '1234';

// const img = document.createElement('img'); //crea un html desde 0
// img.setAttribute('src', 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800');
// console.log(img);

// pid.append(img) //insertar imagen en contenedor existente