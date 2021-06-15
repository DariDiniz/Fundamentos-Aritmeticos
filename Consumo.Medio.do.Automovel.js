let km = parseInt(gets());
let combustivel = parseFloat(gets());

let consumo = km / combustivel;

console.log(consumo.toFixed(3) + " km/l");