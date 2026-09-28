const perguntas = [
    {
        pergunta: "Quem foi o campeão do Brasileirão de 2023?",
        alternativas: ["Flamengo", "Palmeiras", "Grêmio", "Botafogo"],
        correta: "Palmeiras"
    },
    {
        pergunta: "Quem foi o artilheiro do Brasileirão de 2023?",
        alternativas: ["Hulk", "Gabigol", "Paulinho", "Tiquinho Soares"],
        correta: "Paulinho"
    },
    {
        pergunta: "Qual time foi campeão do Brasileirão de 2024?",
        alternativas: ["Botafogo", "Palmeiras", "Flamengo", "Fortaleza"],
        correta: "Botafogo"
    },
    {
        pergunta: "Qual foi a posição do Flamengo no Brasileirão de 2024?",
        alternativas: ["1º lugar", "2º lugar", "3º lugar", "4º lugar"],
        correta: "3º lugar"
    },
    {
        pergunta: "Quem foi o vice-campeão brasileiro de 2023?",
        alternativas: ["Flamengo", "Grêmio", "Botafogo", "Atlético-MG"],
        correta: "Grêmio"
    },
    {
        pergunta: "Quantos pontos o Palmeiras fez no Brasileirão de 2023?",
        alternativas: ["68", "70", "72", "74"],
        correta: "70"
    },
    {
        pergunta: "Quantos pontos o Botafogo conquistou no Brasileirão de 2024?",
        alternativas: ["73", "76", "79", "82"],
        correta: "79"
    },
    {
        pergunta: "Em qual posição o Botafogo terminou o Brasileirão de 2023?",
        alternativas: ["3º lugar", "4º lugar", "5º lugar", "6º lugar"],
        correta: "5º lugar"
    },
    {
        pergunta: "Qual clube foi rebaixado no Brasileirão de 2023?",
        alternativas: ["Santos", "Flamengo", "Palmeiras", "São Paulo"],
        correta: "Santos"
    },
    {
        pergunta: "Quem foi o vice-campeão do Brasileirão de 2024?",
        alternativas: ["Flamengo", "Palmeiras", "Fortaleza", "Internacional"],
        correta: "Palmeiras"
    },
    {
        pergunta: "Quantos pontos o Grêmio fez no Brasileirão de 2023?",
        alternativas: ["65", "68", "70", "72"],
        correta: "68"
    },
    {
        pergunta: "Qual clube terminou com a mesma pontuação do Botafogo em 2024?",
        alternativas: ["Palmeiras", "Flamengo", "Nenhum", "Fortaleza"],
        correta: "Nenhum"
    },
    {
        pergunta: "Quantos pontos o Bragantino conquistou em 2023?",
        alternativas: ["59", "62", "65", "68"],
        correta: "62"
    },
    {
        pergunta: "Em qual posição o Fortaleza terminou o Brasileirão de 2024?",
        alternativas: ["3º lugar", "4º lugar", "5º lugar", "6º lugar"],
        correta: "4º lugar"
    },
    {
        pergunta: "Quem foi o campeão brasileiro de 2025?",
        alternativas: ["Palmeiras", "Flamengo", "Botafogo", "Cruzeiro"],
        correta: "Flamengo"
    }
];

let indiceAtual = 0;
let pontos = 0;

function iniciarQuiz() {
    indiceAtual = 0;
    pontos = 0;

    document.getElementById("inicio").classList.remove("ativa");
    document.getElementById("quiz").classList.add("ativa");

    mostrarPergunta();
}

function mostrarPergunta() {
    const perguntaAtual = perguntas[indiceAtual];

    document.getElementById("pergunta").textContent =
        perguntaAtual.pergunta;

    const alternativas = document.getElementById("alternativas");

    alternativas.innerHTML = "";

    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").style.display = "none";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.onclick = function () {
            verificarResposta(alternativa, botao);
        };

        alternativas.appendChild(botao);
    });
}

function verificarResposta(resposta, botaoClicado) {
    const correta = perguntas[indiceAtual].correta;

    const botoes = document.querySelectorAll(".alternativas button");

    botoes.forEach(botao => {
        botao.disabled = true;

        if (botao.textContent === correta) {
            botao.classList.add("correta");
        }
    });

    if (resposta === correta) {
        pontos++;

        document.getElementById("feedback").textContent =
            "⚽ GOLAÇO! RESPOSTA CORRETA!";

        document.getElementById("feedback").style.color = "#63ff8a";

    } else {
        botaoClicado.classList.add("errada");

        document.getElementById("feedback").textContent =
            "❌ RESPOSTA ERRADA! A correta era: " + correta;

        document.getElementById("feedback").style.color = "#ff5555";
    }

    document.getElementById("proxima").style.display = "inline-flex";
}

function proximaPergunta() {
    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("quiz").classList.remove("ativa");
    document.getElementById("resultado").classList.add("ativa");

    document.getElementById("pontuacao").textContent =
        pontos + " / " + perguntas.length;

    let mensagem = "";

    if (pontos === perguntas.length) {
        mensagem = "🏆 LENDA DO FUTEBOL! Você acertou tudo!";
    } else if (pontos >= 10) {
        mensagem = "⚽ CRAQUE! Você conhece muito de futebol!";
    } else if (pontos >= 5) {
        mensagem = "👏 BOM JOGO! Você está no caminho!";
    } else {
        mensagem = "💪 NÃO DESISTA! Treine e volte mais forte!";
    }

    document.getElementById("mensagem").textContent = mensagem;
}

function reiniciarQuiz() {
    document.getElementById("resultado").classList.remove("ativa");
    document.getElementById("inicio").classList.add("ativa");

    indiceAtual = 0;
    pontos = 0;
}