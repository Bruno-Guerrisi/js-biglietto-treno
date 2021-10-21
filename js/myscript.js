







function ageFunction() {
  const age = parseInt(prompt('Quanti anni hai?')) ;

  document.getElementById('age_passenger').innerHTML = `${age}`;
}


function priceFunction() {
  const distance = parseInt(prompt('Quanti chilometri percorrerai in treno?')) ;

  document.getElementById('distance_train').innerHTML = `${distance}`;
}

function calcolateFunction() {

  let price = distance * 0.21 ;

  if( age < 18 ){

    price = ( price * 20 ) / 100;

  } else if ( (age > 18 ) && ( age < 65 ) ){

    price = distance * 0.21;

  } else if( age > 65){

    price = ( price * 40 ) / 100;

  }

  document.getElementById('price_train').innerHTML = `${price}`;
}