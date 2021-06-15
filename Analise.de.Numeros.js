let valores = new Array();
let contador_pares = 0;
let contandor_impares = 0;
let contador_positivos = 0;
let contador_negativos = 0;
for (let index = 0; index < 5; index++) {
    let valor = parseInt(gets());
    var adicionar = valores.push(valor);
}

for (let index = 0; index < 5; index++) {
    
    let selecionado = valores[index];
    
    if ((selecionado % 2) == 0) {
      contador_pares +=1;
    } else {
        contandor_impares ++;
    }
    if (selecionado > 0) {
        contador_positivos ++;
      }
    if (selecionado < 0) {
        contador_negativos ++;
    }
}
console.log(contador_pares + " valor(es) par(es)");
console.log(contandor_impares + " valor(es) impar(es)");
console.log(contador_positivos + " valor(es) positivo(s)");
console.log(contador_negativos + " valor(es) negativo(s)");
