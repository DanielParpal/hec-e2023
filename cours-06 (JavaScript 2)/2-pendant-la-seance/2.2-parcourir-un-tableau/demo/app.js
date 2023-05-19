// 1. Définir un tableau
var manteaux = [
	"Manteau en laine polaire Abisko Trail de Fjallraven - Femmes",
	"Chandail léger Synchilla Snap-T de Patagonia - Femmes",
	"Chandail à capuchon Flyweight 2.0 de The North Face - Femmes",
	"Chandail Lea de Kuhl - Femmes",
	"Chandail ABCD"
];

// 2. Accéder à un élément spécifique grâce à son index
// (syntaxe des crochets carrés)
console.log(manteaux[1]);

// 3. Déterminer la quantité d'éléments dans un tableau
console.log(manteaux.length);

// 4. Utiliser la boucle dans sa forme la plus simple
// 6. Rendre la condition de sortie dynamique
for (var i = 0; i < manteaux.length; i = i + 1) {
	// 5. Rendre l'index dynamique
	console.log(manteaux[i]);
}