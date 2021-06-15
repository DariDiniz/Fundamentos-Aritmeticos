let valores = new Array();
let contador = 0;
for (let index = 0; index < 6; index++) {
    let valor = parseFloat(gets());
    var adicionar = valores.push(valor);
}

for (let index = 0; index < 6; index++) {
    
    let selecionado = valores[index];
    
    if (selecionado > 0) {
      contador = contador + 1;
    }
}
console.log(contador + " valores positivos");