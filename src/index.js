// import validator from './validator.js';

// console.log(validator);2
const validar= document.getElementById("btn")
validar.addEventListener("click", numerosEnteros)
function numerosEnteros() {
    const tarjeta= document.getElementById ("numeros")
    let numeroTarjeta= tarjeta.value
    // const numeroTarjeta = "123456"
    console.log(numeroTarjeta,'numero de tarjeta');
    let a= numeroTarjeta.split("") //separar valores con el split
    console.log(a)
    let arrayA=[] //asignando un array vacio en el que se ingresaran los datos con valor numerico posteriormente
    for (let i = 0; i<a.length; i++){ //al valor de a recorrer cada valor de string hasta que se convierta en un valor de tipo number
        let entero= parseInt (a[i])
        arrayA.push(entero) // agregar los valores convertidos a number al array vacio
        if (i % 2 === 0) {
            let posicionPar= arrayA[i] * 2
            console.log(posicionPar)
        if (posicionPar >9) {
            let sumapares = posicionPar.toString().split("")
            console.log(sumapares)
        }
       
        }
    
    }
    console.log(arrayA,'este es el array A');
    
}
numerosEnteros()




