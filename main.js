
let juanHeight = 1.95; // mts
let juanWeight = 95; // kg

let pedroHeight = 1.75; // mts
let pedroWeight = 85; // kg


let IMCjuan = juanWeight / (juanHeight * juanHeight);
let IMCpedro = pedroWeight / (pedroHeight * pedroHeight);

// Calcular si IMC juan es mayor que el de pedro
// y guardarlo como booleano en una variable
let IMCjuanHi = IMCjuan > IMCpedro;
// Print en consola de si el IMC de Juan es mayor que
// el de pedro
// HINT: console.log(1,2)
console.log('¿El imc de juan es mayor al de pedro?: ', IMCjuanHi)

//Seguimiento[lectura1, lectura2, lectura3]