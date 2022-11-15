//const tarjeta = document.getElementById("numeros")
const validator = {
    isValid: function (tarjeta) {
       //let numeroTarjeta = tarjeta.value
     //  console.log(numeroTarjeta)
        let a = tarjeta.split("") //separar valores con el split
        let arrayA = [] //asignando un array vacio en el que se ingresaran los datos con valor numerico posteriormente
        let arrayB = []
        for (let i = 0; i < a.length; i++) { //al valor de a recorrer cada valor de string hasta que se convierta en un valor de tipo number
            let entero = parseInt(a[i])
            arrayA.push(entero) // agregar los valores convertidos a number al array vacio 
            if (i % 2 === 0) {
                let posicionPar = arrayA[i] * 2 // se realizo la multiplicacion de los numeros pares y se agregaron a la nueva variable
                console.log(posicionPar)
               // console.log(typeof arrayA)
                if (posicionPar > 9) {
                    let sumapares = posicionPar.toString().split("") //se insertan los valores mayores a 9 en la nueva variable y se convierten y separan en string
                    //array de strings (numeros)
                   console.log(sumapares)
                    const primerNumero = parseInt(sumapares[0]) 
                    const segundoNumero = parseInt(sumapares[1])
                    let sumas = primerNumero + segundoNumero // suma de los numeros mayores a 9 seleccionados segun su posicion en el array
                    arrayB.push(sumas) // se agrega el valor sumado a un nuevo array
                }
                else {
                    arrayB.push(posicionPar) // se agregan al arrayb las posiciones pares restantes que fueron menores a 9
                 
                }
            }
            else {
                let posicionNoPar = arrayA[i] // se declara otra variable con los valores no pares que fueron recorridos convertidos a numeros pero no se multiplicaron
    
                arrayB.push(posicionNoPar) // se agregan todos los valores al array B
                
            }
        }
        let resultado = arrayB.reduce((acc, el) => acc + el, 0) // se utiliza la funcion de reduce para realizar la suma de todos los valores que se encuentran
        // en el arrayB por medio de un acumulador dandole la indicacion que tiene que comenzar desde la posicion 0 del array
       
        if (resultado % 10 === 0) { // se crea una condicion if para determinar si la tarjeta es valida o no 
            return true
        }
        else {
            return false
        }
        
    },
    maskify (mascara) {
        let arraymasc= mascara.split("")
        for (let i = 0; i < arraymasc.length -4; i++) {
            arraymasc[i]="#"
        
        }
        return arraymasc.join("")
        
    }
   
    //   // ... 

};
//console.log(validator.maskify())


export default validator;

