const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getQuadrant(x, y) {
  if (x > 0 && y > 0) return 'Primeiro quadrante';
  if (x < 0 && y > 0) return 'Segundo quadrante';
  if (x < 0 && y < 0) return 'Terceiro quadrante';
  if (x > 0 && y < 0) return 'Quarto quadrante';
  if (x === 0 && y !== 0) return 'Eixo Y';
  if (x !== 0 && y === 0) return 'Eixo X';
  return 'Origem';
}

function promptInput() {
  rl.question('Digite o valor de x: ', (xInput) => {
    const x = parseFloat(xInput);
    if (isNaN(x)) {
      console.log('Por favor, insira um número válido.');
      return promptInput();
    }

    rl.question('Digite o valor de y: ', (yInput) => {
      const y = parseFloat(yInput);
      if (isNaN(y)) {
        console.log('Por favor, insira um número válido.');
        return promptInput();
      }

      if (x === 0 || y === 0) {
        console.log('Programa encerrado.');
        rl.close();
        return;
      }

      console.log(`O ponto (${x}, ${y}) está no ${getQuadrant(x, y)}`);
      promptInput();
    });
  });
}

promptInput();