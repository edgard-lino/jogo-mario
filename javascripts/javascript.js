const personagem = document.getElementById('personagem');
const cenario = document.getElementById('cenario');

const larguraCenario = cenario.offsetLeft;
const larguraPersonagem = cenario.offsetLeft;

let posicao = 0;
let direcao = 0;
let velocidade = 1;

function teclaPressionada(event) {
    if (event.key === 'ArrowRight') {
        direcao = 1;
        personagem.style.backgroundImage = 'url(/imagens/marioAndandoLadoDireito.gif)';
    } else if (event.key === 'ArrowLeft') {
        direcao = -1;
        personagem.style.backgroundImage = 'url(/imagens/marioAndandoLadoEsquerdo.gif)';
    }
}

function teclaSolta(event) {
    if (event.key === 'ArrowRight') {
        direcao = 0;
        personagem.style.backgroundImage = 'url(/imagens/marioParadoLadoDireito.png)';
    } else if (event.key === 'ArrowLeft') {
        direcao = 0;
        personagem.style.backgroundImage = 'url(/imagens/marioParadoLadoEsquerdo.png)';
    }
}

function atualizarMovimentos() {
    posicao += direcao * velocidade;
    personagem.style.left = posicao + '%';
}

document.addEventListener('keydown', teclaPressionada);
document.addEventListener('keyup', teclaSolta);
setInterval(atualizarMovimentos, 50);

// document.addEventListener('keydown', function(evento) {
//     // alert('tecla pressionada é ' + evento.key);
//     // if(evento.key === 'ArrowRight') {
//     //     direcao = 1;
//     //     posicao += direcao * velocidade;
//     //     personagem.style.left = posicao + '%' 
//     // } else if(evento.key === 'ArrowLeft') {
//     //     direcao = 1;
//     //     posicao -= direcao * velocidade;
//     //     personagem.style.left = posicao + '%';
//     // }

//     switch (evento.key) {
//         case 'ArrowRight':
//             direcao = 1;
//             posicao += direcao * velocidade;
//             personagem.style.left = posicao + '%';
//             break;
//         case  'ArrowLeft':
//             direcao = 1;
//             posicao -= direcao * velocidade;
//             personagem.style.left = posicao + '%';
//             break;
//         default:
//             break;
//     }
// })