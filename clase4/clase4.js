
let numeroRandom = Math.floor(Math.random() * 100) + 1;
const myPromise = new Promise((resolve,reject) => {
    if(numeroRandom > 50){
        resolve(`El numero es mayor a 50 , el numero es : ${numeroRandom}`);
    }else {

        reject(`El numero es menor a 50 , el numero es : ${numeroRandom}`);
    }
  
});

myPromise
.then(response => console.log(response))
.catch(error => console.log(error))


const array = ["Guido", "Guille", "Ale", "Chiara", "Cami"];

array.map(nombres => console.log("Hola:",nombres))