//-----------------------------EVENTOS EN EL DOM 
//Target(blanco)->Trigger(desencadenante)->Event Handler (Evento que se ejecuta en un evento, maneja) <-> Event Listener()

//Se crea una constante llamada toppings, basada en todos los elementos con clase Topping
const toppings = document.getElementsByClassName('topping');

//Se crea una función que muestra los datos
//function mostrarClic(e){
  //  console.log(e.target.innerText);
//}

for (const topping of toppings){
    topping.addEventListener('click', (e) =>{
       alert(e.target.innerText);
    })
}


//albahaca.addEventListener('click', mostrarClic);



//ONCLICK EN HTML
//function mostrarClic(topping){
//    console.log(topping);
//} 


//---------------------------CAMBIOS EN EL DOM, CLASES

//Recorrer el DOM, se hace referencia a los elementos a partir de la clase Lista-toppings
//const listadeToppings = document.getElementById('lista-toppings');

//Obtener elementos hermanos en el DOM 
//console.log(listadeToppings.previousElementSibling);

//obtener el proximo
//console.log(listadeToppings.nextElementSibling);

//CUANDO SE TRABAJA CON VERSIONES QUE DICEN ELEMENT, SE OBTIENEN TEXTO EN NODOS.

//Obtener en el dom textos a partir de la clase anterior
//console.log(listadeToppings.firstChild);
//console.log(listadeToppings.lastChild);

//obtenerlos como elementos HTML
//console.log(listadeToppings.firstElementChild);
//console.log(listadeToppings.lastElementChild);





//Se define de dónde pertenece el segmento a donde se va a agregar algo
//const listadetoppings = document.getElementById('lista-toppings');

//Se define lo que se va a agregar, crear elemento lista
//const toppingNuevo = document.createElement('li'); 

//Se agregan las clases al elemento para que pueda formar parte de los demás
//toppingNuevo.classList.add('topping', 'fondo-cafe');

//Se agrega texto al elemento
//toppingNuevo.innerText = 'Queso extra';

//Se agrega
//listadetoppings.append(toppingNuevo);

//Se remueve
//toppingNuevo.remove();

//listadetoppings.remove();








//const primerTopping = document.querySelector('.topping'); 

//primerTopping.classList.remove('topping');

//console.log(primerTopping.classList.contains('texto-verde'));


//console.log(primerTopping.classList);



//const enlaces = document.getElementsByTagName('a');
//console.log(enlaces[0].setAttribute('href', 'https://www.youtube.com/'));


//const titulo = document.getElementById('titulo'); 
//titulo.innerText = 'HOLAAAAA';



//const listatoppings = document.getElementById('lista-toppings'); 
//console.log('>Normal')
//console.log(listatoppings);

//console.log('>InnerText');
//console.log(listatoppings.innerText);

//console.log('>TextContent');
//console.log(listatoppings.textContent); 

//console.log('InnerHTML');
//console.log(listatoppings.innerHTML);




//const colorazul = document.querySelector('.topping');

//colorazul.style.backgroundColor = 'blue';
//colorazul.style.color = 'blue';


//const primero = document.querySelectorAll('.topping.fondo-naranja');
//console.log(primero[0]);


//const titulo = document.getElementById('titulo');
//console.log(titulo);

//const titulo = document.getElementById('titulo');
//console.log(titulo.innerText);

//const toppings = document.getElementsByClassName('topping'); 
//console.log(toppings[2]);

//const misToppings = document.getElementsByTagName('h1'); 
//console.log(misToppings);