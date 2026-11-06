## 1-Afficher
document.getElementById("out1").textContent = "Bonjour la classe";

Va afficher le texte -> Bonjour la classe

## 2 — Calculer
let a = 4;
let b = 3;
let total = a + b;
document.getElementById("out2").textContent = total;

Va afficher -> 7

## 3 — Compter
let fruits = ["pomme", "poire", "kiwi"];
document.getElementById("out3").textContent = fruits.length;

Va afficher -> 3

## 4 — Condition
let note = 5;
let texte;
if (note >= 4) {
  texte = "suffisant";
} else {
  texte = "insuffisant";
}
document.getElementById("out4").textContent = texte;

Va afficher -> suffisant

## 5 — Boucle simple
let message = "";
for (let i = 1; i <= 3; i = i + 1) {
  message = message + i + " ";
}
document.getElementById("out5").textContent = message;

Va afficher -> 1 2 3  (ne pas oublier l'espace.)

## 6 — Clic
let n = 0;
document.getElementById("b6").addEventListener("click", function () {
  n = n + 1;
  document.getElementById("out6").textContent = n;
});
Cliquez plusieurs fois sur Lancer. Que fait le nombre ?

A chaque clic va incrémenter n de 1 