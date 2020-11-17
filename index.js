// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo

console.clear();

const biDisplayer = document.getElementById('bills-displayer');
let displayer = document.getElementById('displayer');
const clear = document.getElementById('clear');
const confirm = document.getElementById('confirm');

const nome = document.getElementById('nome');
nome.innerText = prompt('Digite seu nome: ');

document.querySelectorAll('.but').forEach (but => {
      but.addEventListener('click', () => {
      displayer.value += but.innerHTML;
    });
});

clear.addEventListener('click', () => {
    displayer.value = '';
    biDisplayer.innerText = '';
});

confirm.addEventListener('click', () => {
    biDisplayer.innerText = '';
    let valor = displayer.value;
  
    if (valor % 10 !== 0) {
      alert('valor de saque não disponível');
    } else {
      while (valor > 0) {
        if (valor >= 100) {
          valor = valor - 100;
          biDisplayer.innerText = biDisplayer.innerText + ' R$ 100';
          displayer.value = 'Retire o Dinheiro';
        } else if (valor >= 50) {
          valor = valor - 50;
          biDisplayer.innerText = biDisplayer.innerText + ' R$ 50';
          displayer.value = 'Retire o Dinheiro';
        } else if (valor >= 20) {
          valor = valor - 20;
          biDisplayer.innerText = biDisplayer.innerText + ' R$ 20';
          displayer.value = 'Retire o Dinheiro';
        } else if (valor >= 10) {
          valor = valor - 10;
          biDisplayer.innerText = biDisplayer.innerText + ' R$ 10';
          displayer.value = 'Retire o Dinheiro';
        }
      }
    }
});
