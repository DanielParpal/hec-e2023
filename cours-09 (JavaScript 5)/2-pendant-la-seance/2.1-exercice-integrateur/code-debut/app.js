// 1. Modélisation des données
var tailles = [5, 6, 7, 8, 9, 10];

var botteA = {
	marque: 'UGG',
	nom: 'CLASSIC MINI PLATFORM Women',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [5, 6, 8, 10]
};

var botteC = {
	marque: 'UGG',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10]
};

var botteD = {
	marque: 'UGG',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var bottes = [
botteA, botteB, botteC, botteD,
];

// Votre code viendra ci-dessous

// Mise en place d'un gestionnaire d'événements pour les boutons de taille
$(".btn-selection-taille").on('click', function() {

	// On remet l'apparence initiale des boutons 
	$(".btn-selection-taille").removeClass("btn-dark");
	$(".btn-selection-taille").addClass("btn-outline-dark");

	// On donne l'apparence sélectionnée au bouton venant d'être cliqué
	$(this).removeClass("btn-outline-dark");
	$(this).addClass("btn-dark");

	// On récupère la valeur stockée dans l'attribut data-taille
	var tailleSelectionnee = $(this).data("taille"); 

	// Masquer toutes les bottes
	$(".produit-botte").hide();
	
	// On filtre les bottes, en testant si la taille est disponible
	for (var i = 0; i < bottes.length; i = i + 1) {

		if (bottes[i]['taillesDispo'].includes(tailleSelectionnee)) {
			// On affiche la botte courante
			$("#botte-" + i).show(); // on compose le sélecteur jQuery dynamiquement
		}
	}
});




