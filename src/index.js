// import validator from './validator.js';

// console.log(validator);2
const validar= document.getElementById("btn")
validar.addEventListener("click", numerosEnteros)
const tarjeta= document.getElementById ("numeros")
function numerosEnteros() {
    let numeroTarjeta= tarjeta.value
    console.log(numeroTarjeta,'numero de tarjeta');
    let a= numeroTarjeta.split("") //separar valores con el split
    console.log(a)
    let arrayA=[] //asignando un array vacio en el que se ingresaran los datos con valor numerico posteriormente
    let arrayB=[] 
    for (let i = 0; i<a.length; i++){ //al valor de a recorrer cada valor de string hasta que se convierta en un valor de tipo number
        let entero= parseInt (a[i])
        arrayA.push(entero) // agregar los valores convertidos a number al array vacio 
        if (i % 2 === 0) {
        let posicionPar= arrayA[i] * 2 // se realizo la multiplicacion de los numeros pares y se agregaron a la nueva variable
            console.log(posicionPar)  
       if (posicionPar >9) {
          let sumapares = posicionPar.toString().split("")
          //array de strings (numeros)
          console.log(sumapares)
          const primerNumero = parseInt(sumapares[0])
          const segundoNumero = parseInt(sumapares[1])
          let sumas= primerNumero + segundoNumero 
          console.log(sumas)
          arrayB.push(sumas)
          console.log (arrayB)
          
    //    if (resultado === 0 ) {
    //         return window.alert ("su tarjeta es valida")
        
    //       }
        }
        else {
            arrayB.push(posicionPar)
            console.log(arrayB)
        }
        }
        else { 
           let posicionNoPar= arrayA[i]
           console.log(posicionNoPar)
           arrayB.push(posicionNoPar)
           console.log(arrayB)
        }
        }
     let resultado= arrayB.reduce((acc, el) => acc + el, 0)
     console.log(resultado)
    }
    //console.log(arrayA,'este es el array A');


numerosEnteros()
