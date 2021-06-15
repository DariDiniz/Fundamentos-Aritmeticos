let valor = parseInt(gets());
console.log(valor);
let notas = [100, 50, 20, 10, 5, 2, 1];
let quantidade = new Array();

notas.forEach(function(nota){
    let resultado = Math.floor(valor / nota);
    quantidade.push(resultado);
    valor = valor % nota;
  })

for (let index = 0; index < 7; index++) {
    console.log(quantidade[index] + " nota(s) de R$ " + notas[index] + ",00")
}
