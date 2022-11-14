 import validator from './validator.js';

 console.log(validator);


   const validar= document.getElementById("btn")
   validar.addEventListener("click", numeroTarjeta) // se creo el evento para el boton y posteriormente se creo una funcion que se pudiera repdroducir al hacer click
   function numeroTarjeta () { //se creo la funcion en la que se llamo a los valores del input text para que se exportaran al validator y de igual manera el validator regresara la funcion prescrita con los valores dados
    let tarjeta= document.getElementById("numeros").value
    validator.isValid(tarjeta)
    validator.maskify(tarjeta) 
    const enmascarados= validator.maskify(tarjeta); // se creo una nueva variable que fuera igual a la funcion del maskify
      document.getElementById("numeros").value = enmascarados // posteriormente se ordeno especificamente que los valores del input fueran igual a la funcion del maskify
      if (validator.isValid(tarjeta) === true) {
        alert ("felicidades tu tarjeta es valida")
      }
      else {
        alert ("Tarjeta invalida")
      }
   }




