var nomeHeroi;
var xpHero;

while (true) {
    nomeHeroi = prompt("Digite o nome do herói:");
    xpHero = parseInt(prompt("Digite a quantidade de experiência do herói:"));

    if (!isNaN(xpHero)) {
        break;
    } else {
        alert("Por favor, insira um número válido para a experiência do herói.");
    }
}

var nivel;

if (xpHero < 1000) {
    nivel = "Ferro";
} else if (xpHero <= 2000) {
    nivel = "Bronze";
} else if (xpHero <= 5000) {
    nivel = "Prata";
} else if (xpHero <= 7000) {
    nivel = "Ouro";
} else if (xpHero <= 8000) {
    nivel = "Platina";
} else if (xpHero <= 9000) {
    nivel = "Ascendente";
} else if (xpHero <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
