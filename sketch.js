let perguntas = [
  {
    pergunta: "Onde geralmente encontramos mais prédios?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  },
  {
    pergunta: "Onde há mais contato com a natureza?",
    alternativas: ["Campo", "Cidade"],
    correta: 0, // Campo
  },
  {
    pergunta: "Qual lugar costuma ter mais trânsito?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  },
  {
    pergunta: "Onde as pessoas costumam ter mais contato com a vida rural?",
    alternativas: ["Campo", "Cidade"],
    correta: 0, // Campo
  },
  {
    pergunta: "Em qual lugar as pessoas geralmente têm acesso a mais opções de emprego?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  },
  {
    pergunta: "Onde é mais comum encontrar uma agricultura predominante?",
    alternativas: ["Campo", "Cidade"],
    correta: 0, // Campo
  },
  {
    pergunta: "Qual lugar é mais propenso a ter uma grande oferta de serviços e comércios?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  },
  {
    pergunta: "Onde o custo de vida tende a ser mais baixo?",
    alternativas: ["Campo", "Cidade"],
    correta: 0, // Campo
  },
  {
    pergunta: "Onde a população é geralmente mais densa?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  },
  {
    pergunta: "Em qual lugar as pessoas geralmente convivem mais com o barulho constante?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  },
  {
    pergunta: "Onde as pessoas tendem a encontrar mais áreas verdes?",
    alternativas: ["Campo", "Cidade"],
    correta: 0, // Campo
  },
  {
    pergunta: "Em qual lugar é mais comum encontrar grandes centros comerciais e shoppings?",
    alternativas: ["Campo", "Cidade"],
    correta: 1, // Cidade
  }
];

let perguntaAtual = 0;
let escolha = -1;
let acertos = 0;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  background(220);

  // Exibe a pergunta
  textSize(24);
  text(perguntas[perguntaAtual].pergunta, width / 2, 100);

  // Exibe as alternativas
  textSize(18);
  for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
    let y = 150 + i * 40;
    text(perguntas[perguntaAtual].alternativas[i], width / 2, y);
  }

  // Exibe a pontuação
  textSize(16);
  text("Acertos: " + acertos, width / 2, height - 40);
}

function mousePressed() {
  if (perguntaAtual < perguntas.length) {
    let y = 150;
    for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
      if (mouseY > y - 20 && mouseY < y + 20) {
        escolha = i;
        verificarResposta();
        break;
      }
      y += 40;
    }
  }
}

function verificarResposta() {
  if (escolha === perguntas[perguntaAtual].correta) {
    acertos++;
  }
  
  // Avança para a próxima pergunta ou termina o quiz
  perguntaAtual++;
  if (perguntaAtual === perguntas.length) {
    textSize(32);
    text("Fim do Quiz!", width / 2, height / 2);
    textSize(24);
    text("Você acertou " + acertos + " de " + perguntas.length, width / 2, height / 2 + 40);
  } else {
    redraw();
  }
}

