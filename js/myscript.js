







function ageFunction() {
  const age = parseInt(prompt('Quanti anni hai?')) ;

  document.getElementById('age_passenger').innerHTML = `Età passeggero: ${age}`;
}


function priceFunction() {
  const distance = parseInt(prompt('Quanti chilometri percorrerai in treno?')) ;

  document.getElementById('distance_train').innerHTML = `Distanza da percorrere: ${distance}`;
}

function calcolateFunction() {

  let price = distance * 0.21 ;

  if( age < 18 ){

    price = ( price * 20 ) / 100;

  } else if( age > 65){

    price = ( price * 40 ) / 100;

  }

  document.getElementById('price_train').innerHTML = `Prezzo biglietto: ${price}`;
}