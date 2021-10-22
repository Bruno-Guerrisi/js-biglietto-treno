let age;
let distance;
let price;

let price_train_final;

function ageFunction() {
  age = parseInt(prompt('Quanti anni hai?')) ;

  /* if( isNaN(age) ){
    document.getElementById('age_passenger').innerHTML = `Valore errato, reinserire`;
  } */

  document.getElementById('age_passenger').innerHTML = `Età passeggero: ${age}`;
}


function distanceFunction() {
  distance = parseFloat(prompt('Quanti chilometri percorrerai in treno?')) ;

  /* if( isNaN(distance) ){
    document.getElementById('distance_train').innerHTML = `Valore errato, reinserire`;
  } */

  document.getElementById('distance_train').innerHTML = `Distanza da percorrere: ${distance}`;
}

function priceFunction() {

  price = distance * 0.21 ;

  if( age < 18 ){

    price = price - ( ( price * 20 ) / 100 );

  } else if( age > 65){

    price = price - ( ( price * 40 ) / 100 );

  }

  price_train_final = price.toFixed(2);

  document.getElementById('price_train').innerHTML = `Prezzo biglietto: ${price_train_final}`;
}