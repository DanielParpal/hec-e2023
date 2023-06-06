// Créer (définir) un objet 
var botte = {
	titre: "Bottes de randonnée Pyrenees de Keen - Hommes",
	prix: 229.95,
	img: "/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.jpg",
	evaluation: 4.1,
	taillesDispo: ['S', 'M', 'XL']
};

// Accéder aux propriétés d'un objet
console.log(botte['titre']);
console.log(botte['evaluation']);

// Modifier la valeur d'une des propriétés
botte["evaluation"] = 4.2;
console.log(botte["evaluation"]);

// Lire ou modifier une valeur du tableau taillesDispo
console.log(botte['taillesDispo'][1]);
botte['taillesDispo'][2] = 'XXL';
console.log(botte);

