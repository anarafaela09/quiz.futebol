const perguntas = [
    {
        pergunta: "Qual foi o primeiro clube brasileiro a conquistar a Copa Libertadores?",
        alternativas: [
            "Santos",
            "São Paulo",
            "Palmeiras",
            "Flamengo"
        ],
        correta: "Santos"
    },

    {
        pergunta: "Na final da Libertadores de 2019, quem marcou o gol da virada do Flamengo contra o River Plate?",
        alternativas: [
            "Bruno Henrique",
            "Gabigol",
            "Arrascaeta",
            "Éverton Ribeiro"
        ],
        correta: "Gabigol"
    },

    {
        pergunta: "Qual clube ficou conhecido como 'Rei de Copas' por suas conquistas da Copa do Brasil?",
        alternativas: [
            "Grêmio",
            "Corinthians",
            "Cruzeiro",
            "Flamengo"
        ],
        correta: "Cruzeiro"
    },

    {
        pergunta: "Quem marcou o gol do título do Palmeiras na final da Libertadores de 2020?",
        alternativas: [
            "Rony",
            "Raphael Veiga",
            "Luiz Adriano",
            "Breno Lopes"
        ],
        correta: "Breno Lopes"
    },

    {
        pergunta: "Qual foi o adversário do Fluminense na final da Libertadores de 2023?",
        alternativas: [
            "Boca Juniors",
            "River Plate",
            "Flamengo",
            "Atlético-MG"
        ],
        correta: "Boca Juniors"
    },

    {
        pergunta: "Qual jogador brasileiro ficou conhecido pelo apelido de 'Fenômeno'?",
        alternativas: [
            "Ronaldinho Gaúcho",
            "Romário",
            "Ronaldo Nazário",
            "Kaká"
        ],
        correta: "Ronaldo Nazário"
    },

    {
        pergunta: "Qual clube revelou Neymar para o futebol profissional?",
        alternativas: [
            "Barcelona",
            "Santos",
            "Palmeiras",
            "São Paulo"
        ],
        correta: "Santos"
    },

    {
        pergunta: "Em qual estádio aconteceu a final da Copa do Mundo de 2014?",
        alternativas: [
            "Maracanã",
            "Mineirão",
            "Arena Corinthians",
            "Mané Garrincha"
        ],
        correta: "Maracanã"
    },

    {
        pergunta: "Qual clube venceu o Campeonato Brasileiro de 2024?",
        alternativas: [
            "Palmeiras",
            "Flamengo",
            "Botafogo",
            "Fortaleza"
        ],
        correta: "Botafogo"
    },

    {
        pergunta: "Qual jogador ficou conhecido como 'Maestro' e foi ídolo do São Paulo e da Seleção Brasileira?",
        alternativas: [
            "Rivaldo",
            "Kaká",
            "Zico",
            "Raí"
        ],
        correta: "Raí"
    },

    {
        pergunta: "Na Copa do Brasil de 2023, qual clube conquistou seu primeiro título da competição?",
        alternativas: [
            "Flamengo",
            "São Paulo",
            "Grêmio",
            "Corinthians"
        ],
        correta: "São Paulo"
    },

    {
        pergunta: "Qual clube brasileiro venceu o Liverpool na final do Mundial de Clubes de 1981?",
        alternativas: [
            "Flamengo",
            "Santos",
            "Internacional",
            "São Paulo"
        ],
        correta: "Flamengo"
    },

    {
        pergunta: "Qual foi o placar da final da Copa América de 2019 entre Brasil e Peru?",
        alternativas: [
            "2 a 0",
            "3 a 1",
            "1 a 0",
            "4 a 2"
        ],
        correta: "3 a 1"
    },

    {
        pergunta: "Qual jogador é conhecido como o maior artilheiro da história do Campeonato Brasileiro?",
        alternativas: [
            "Romário",
            "Fred",
            "Roberto Dinamite",
            "Zico"
        ],
        correta: "Roberto Dinamite"
    },

    {
        pergunta: "Qual clube conquistou a Libertadores de 2024, vencendo o Atlético-MG na final?",
        alternativas: [
            "Palmeiras",
            "Botafogo",
            "Flamengo",
            "Fluminense"
        ],
        correta: "Botafogo"
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