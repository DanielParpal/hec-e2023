// 1. Modélisation des données
var tailles = [5, 6, 7, 8, 9, 10, 11];

var botteA = {
	marque: 'UGG',
	nom: 'CLASSIC MINI PLATFORM Women TEST TEST TEST',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8, 10]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [5, 6, 8, 10, 11]
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

// 2. Génération dynamique de l'état initial

// les boutons de taille
for (var i = 0; i < tailles.length; i = i + 1) {
	console.log(tailles[i]); // 5, 6, 7, 8, 9,10
	$("#boutonsFiltreTaille").append('<button type="button" data-taille="' + tailles[i] + '" class="btn btn-outline-dark btn-selection-taille mr-2">' + tailles[i] + '</button>');
}

// les divisions avec les bottes
for (var i = 0; i < bottes.length; i = i + 1) {
	var botteHTML = '<div class="col-3 produit-botte" id="botte-' + i + '">';
	botteHTML = botteHTML + '<div class="card">';
	botteHTML = botteHTML + '<img src="' + bottes[i]['imageSrc'] + '" class="card-img-top" alt="' + bottes[i]['imageAlt'] + '" />';
	botteHTML = botteHTML + '<div class="card-body">';
	botteHTML = botteHTML + '<h5 class="card-title">' + bottes[i]['marque'] + '</h5>';
	botteHTML = botteHTML + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
	botteHTML = botteHTML + '<a href="#" class="btn btn-dark">Acheter</a>';
	botteHTML = botteHTML + '</div></div></div>';

	$("#produits").append(botteHTML);
}

// Définition de ma variable à l'extérieur du gestionnaire
// Elle sera donc disponible dans un autre gestionnaire d'événement
// Je l'initialise à -1, c'est-à-dire une valeur qu'elle ne pourra avoir suite à un click.
var tailleSelectionnee = -1;

// 3. Écriture des algorithmes dynamiques
// Mise en place d'un gestionnaire d'événements pour les boutons de taille
$(".btn-selection-taille").on('click', function() {

	// On remet l'apparence initiale des boutons 
	$(".btn-selection-taille").removeClass("btn-dark");
	$(".btn-selection-taille").addClass("btn-outline-dark");

	// On donne l'apparence sélectionnée au bouton venant d'être cliqué
	$(this).removeClass("btn-outline-dark");
	$(this).addClass("btn-dark");

	// On récupère la valeur stockée dans l'attribut data-taille
	tailleSelectionnee = $(this).data("taille"); 

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

// Autre gestionnaire d'événement
$("#btn-affichage-taille").on('click', function() {
	if (tailleSelectionnee == -1) {
		console.log("Veuillez sélectionner une taille");
	} else {
		console.log(tailleSelectionnee);	
	}
});






