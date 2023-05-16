// Les tableaux: structure de données
// Les tableaux sont définis avec un index numérique implicite
var produits = [
	"jeans", // 0
	"pantalons", // 1
	"bas", // 2
	"casquette" // 3
];

console.log(produits);

// manipuler un élément -> j'utilise son index
console.log(produits[1]);
console.log(produits[3]);

// ajouter un élément APRÈS la définition initiale du tableau
// nécessaire pour TP2
produits.push("manteau");
console.log(produits);

// modifier un élément (on effectue une nouvelle assignation)
produits[2] = "bas à carreaux";
console.log(produits);

// connaître la quantité d'éléments dans un tableau
console.log(produits.length);

// savoir si une valeur fait partie du tableau
var jeansDansProduits = produits.includes("jeans");
console.log(jeansDansProduits);

// Truc pour TP2
// la valeur de l'index sera stockée dans un attribut data
// vous allez récupérer cette valeur
var indexAjouter = 2;
console.log(produits[indexAjouter]);








