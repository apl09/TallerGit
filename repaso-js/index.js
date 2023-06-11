//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':
const ordenador = {    
    marca: 'Asus',
    tipo: 'portatil',
    perifericos: {
        touchpad: true

    },
    almacenamiento: {
        discos: ['SSD']            
        
    },
    procesador: {
        velocidad: "2.5 GHz"
    }
    
}


if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 2
  if (ordenador.marca === "Asus") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 4
  if (ordenador.perifericos.touchpad === true) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 5
  if (ordenador.almacenamiento.discos[0] === "SSD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 6
  if (ordenador.procesador.velocidad === "2.5 GHz") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


//Imprimir los números del 21 al 34 en la consola.

const imprimirNumeros = () => {
    for(let i = 21; i<35; i++){
        console.log(i)
    }
}
imprimirNumeros()



//Sumar los números del 1 al 10 y mostrar el resultado en la consola.
let sum = 0
const sumarNumeros =()=> {
    for(let i = 1; i< 11; i++){
        sum += i
        
    }

}

sumarNumeros()



//Dado un array de números, imprimir en la consola la suma de todos los números.
const array = [1,2,3,6,5,4,3,2];
let mas = 0
const sumar =() =>{
    for (const iterator of array) {
       mas += iterator
    }

}
sumar()

console.log(mas)




//Dado un número, encontrar su factorial.

const factor = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }




//Dado un array de números, imprimir en la consola solo los números impares.
const array2= [1,5,3,6,4,3,9,8]
const impares = () => {
    for(let impar of array2){
        if(impar%2 !== 0){
            console.log(impar)
        }
    }
}




//Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const nombreEdad = (array)=>{
    for(valores of array){
        if(valores > 18){
            console.log( valores.nombre)
        }
    }

}
    



//Dado un número, imprimir en la consola si es primo o no.

const numArray = [2, 45, 45345, 564566, 4564567, 4564568, 4564569,456457710]

numArray = numArray.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);






//Utiliza la siguiente array para resolver los próximos ejercicios:
let animales = [
    {
      nombre: "León",
      especie: "Felino",
      edad: 6,
    },
    {
      nombre: "Cebra",
      especie: "Herbívoro",
      edad: 4,
    },
    {
      nombre: "Tigre",
      especie: "Felino",
      edad: 3,
    },
    {
      nombre: "Elefante",
      especie: "Herbívoro",
      edad: 8,
    },
    {
      nombre: "Jirafa",
      especie: "Herbívoro",
      edad: 5,
    },
    {
      nombre: "Oso",
      especie: "Omnívoro",
      edad: 2,
    },
    {
      nombre: "Pingüino",
      especie: "Ave",
      edad: 1,
    },
  ];
  

//Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.
let felinos =[]
const felinosCuatro =()=> {
    for(animal of animales){
        if(animal.edad > 4 && animal.especie ==='Felino'){
            felinos.push(animal)
        }
    }
}
console.log(felinos)


//Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.
let hervivoros = []
const hervivorosPar =()=> {
    for(animal of animales){
        if(animal.edad %2==0  && animal.especie ==='Herbivoro'){
          hervivoros.push(animal)  
        }
    }
}

console.log(hervivoros)

//Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.
let aves = []
const omnAveTres =()=> {
    for(animal of animales){
        if(animal.edad < 3(animal.especie ==="Omnívoro" || animal.especie ==="Ave" ))
        aves.push(animal)
    }
}
console.log(aves)




//Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.
let hache = []
const H =()=> {
    for(animal of animales){
        if(animal.nombre.match('H')){
        hache.push(animal)
        }
    }
}
console.log(hache)


//Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino 
//o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.
let cuatroLetras = []
const felinoHervivoro =()=> {
    for(animal of animales){
        if((animal.especie=== 'felino'||animal.length=== 'herbivoro')&& animal.nombre.length> 4 ){
        cuatroLetras.push(animal)
        }
    }
}
console.log(cuatroLetras)


//Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos 
//y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para 
//recorrer el array original.
//salida
//eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
//eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]

let uniqueChars = eliminarDuplicados.filter((element, index) => {
  return eliminarDuplicados.indexOf(element) === index;
});

console.log(uniqueChars);






//Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
//sumarElementos([1, 2, 3, 4, 5]); // Devuelve 15
//sumarElementos([-5, 10, -15, 20]); // Devuelve 10

let sumarArray = sumarElementos.reduce((a,b)=> a +b, 0 )
console.log(sumarArray)





//Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres
// y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo
// for...of para recorrer el array y contar los caracteres.
//contarCaracteres(["Hola", "Mundo"]); // Devuelve 9
const contarCaracteres =["JavaScript", "es", "genial"]; 

let Caracteres = contarCaracteres.reduce((a,b)=>a + b.length, 0)
  










//  Crea una función llamada numeroMasGrande(array) que reciba como parámetro
 //un array de números y devuelva el número más grande de ese array. 
// Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.
//numeroMasGrande([1, 2, 3, 4, 5]); // Devuelve 5
//numeroMasGrande([10, -5, 20, -15]); // Devuelve 20

let Maximo = Math.max(...numeroMasGrande)








//Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y
// devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y 
// condicionales para encontrar la cadena más larga.
//cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
//cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"
let masLarga = cadenaMaslarga.reduce((a,b) => a.length > b.length? a:b)








