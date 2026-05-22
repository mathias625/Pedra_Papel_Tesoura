var regras = document.getElementsByClassName("regras")[0];

function mostrarregras() {
    regras.style.display = "flex";
}

function fecharregras() {
    regras.style.display = "none";
}

var jogo = document.getElementsByClassName("jogo")[0];
var selecao = document.getElementsByClassName("gameplay")[0];
var test = document.getElementsByClassName("test")[0];
var test1 = document.getElementsByClassName("test1")[0];
var resultado = document.getElementsByClassName("result")[0];
var pontuacao = document.getElementsByClassName("pontuacao")[0];
var playAgain = document.getElementsByClassName("fim")[0];
var buttonRegras = document.getElementsByClassName("regras-button")[0];

var score = 0;

var escolhas = {
    pedra: {
        classe: "pedra",
        imagem: "images/icon-rock.svg",
        vence: ["tesoura", "lagarto"]
    },

    papel: {
        classe: "papel",
        imagem: "images/icon-paper.svg",
        vence: ["pedra", "spock"]
    },

    tesoura: {
        classe: "tesoura",
        imagem: "images/icon-scissors.svg",
        vence: ["papel", "lagarto"]
    },

    lagarto: {
        classe: "lagarto",
        imagem: "images/lagarto.png",
        vence: ["papel", "spock"]
    },

    spock: {
        classe: "spock",
        imagem: "images/spokhand.webp",
        vence: ["pedra", "tesoura"]
    }
};

function criarBotao(nome){
    return `
        <button class="${escolhas[nome].classe} opcao">
            <img src="${escolhas[nome].imagem}">
        </button>
    `;
}

function jogar(jogadaPlayer) {

    jogo.style.display = "none";
    selecao.style.display = "flex";
    buttonRegras.style.display = "none";

    test.innerHTML = criarBotao(jogadaPlayer);

    var opcoes = Object.keys(escolhas);
    var random = Math.floor(Math.random() * opcoes.length);
    var jogadaCasa = opcoes[random];

    test1.innerHTML = criarBotao(jogadaCasa);

    setTimeout(() => {
        resolver(jogadaPlayer, jogadaCasa);
    }, 500);
}

function resolver(player, casa){

    if(player === casa){
        resultado.innerHTML = "Empate";
    }

    else if(escolhas[player].vence.includes(casa)){
        resultado.innerHTML = "Você Ganhou";
        score++;
        pontuacao.innerHTML = score;
        test.style.cssText = "animation: LuzDeFundo 1.5s ease infinite;";
    }

    else{
        resultado.innerHTML = "Você Perdeu";
        test1.style.cssText = "animation: LuzDeFundo 1.5s ease infinite;";
    }

    playAgain.style.display = "flex";
}

function reset() {
    jogo.style.display = "grid";
    selecao.style.display = "none";
    resultado.innerHTML = "";
    playAgain.style.display = "none";
    test.style.cssText = "";
    test1.style.cssText = "";
    buttonRegras.style.display = "block";
}
