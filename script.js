 const letreiro = document.getElementById("letreiro");

// Frases motivacionais
const frases = [
  " Acredite em si mesmo e tudo será possível! ",
  " Grandes coisas levam tempo. Continue firme! ",
  "Você é mais forte do que imagina! ",
  " Cada passo te aproxima do seu sonho! "
];

let indice = 0;

// Troca de frase sincronizada com a animação
letreiro.addEventListener("animationiteration", () => {
  indice = (indice + 1) % frases.length;
  letreiro.textContent = frases[indice];
});

