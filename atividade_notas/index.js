let notas = [8.0, 6.5, 7.0, 9.5, 5.0];

console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

notas.push(7.5);

notas.shift();

console.log("Array resultante:", notas);

notas.forEach(nota => {
    console.log("Nota:", nota);
});

const media = notas.reduce((contador, nota) => contador + nota, 0) / notas.length;
console.log("Média das notas:", media);

const notasMaioresQue7 = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQue7);

notas.sort((a, b) => a - b);
console.log("Notas ordenadas:", notas);

const notaPresente = notas.includes(6.5);
console.log("Nota 6.5 está presente:", notaPresente);

const indiceNota8 = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNota8);

const notasQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasQuadrado);