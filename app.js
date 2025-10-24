// console.log("Hello World");


function sum (a,b) {
    return a + b;
}

console.log(sum(7,3));


// Ejercicio one euro
// One euro is:

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    // Primero, convierte de Dólares a Euros (1 EUR = 1.07 USD) => 1 USD = 1/1.07
    let valueInEuro = valueInDollar / 1.07;
    // Luego, convierte de Euros a Yenes (1 EUR = 156.5 JPY).
    let valueInYen = valueInEuro * 156.5;
    // Devuelve el monto convertido a Yenes.
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Primero, convierte de Yenes a Euros (1 EUR = 156.5 JPY).
    let valueInEuro = valueInYen / 156.5;
    // Luego, convierte de Euros a Libras Esterlinas (1 EUR = 0.87 GBP).
    let valueInPound = valueInEuro * 0.87;
    // Devuelve el monto convertido a Libras Esterlinas.
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};



// // From euro to Dollar

// function fromEuroToDollar (euro) {
//     let dollar = euro * oneEuroIs.USD;
//     return dollar;
// }

// console.log(fromEuroToDollar(10));

// // From Dollar to Yen

// // 1 euro = 1.07 USD => 1 USD = 1/ 1.07

// function fromDollarToYen(dollar) {
//     let euro = dollar / oneEuroIs.USD;
//     let yen = euro * oneEuroIs.JPY;
//     return yen;
// }

// console.log(fromDollarToYen(1));

// // From Dollar to Yen


// function fromYenToPound (yen) {
//     let euro = yen / oneEuroIs.JPY;
//     let pound = euro * oneEuroIs.GBP;
//     return pound;
// }

// console.log(fromYenToPound(1000));