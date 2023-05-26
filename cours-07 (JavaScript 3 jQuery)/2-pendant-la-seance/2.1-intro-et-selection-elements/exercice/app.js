// 4. Sélectionnez, grâce à jQuery, toutes les cellules du corps de la table (td) et modifiez leur contenu html grâce à la méthode .html(). Vous pouvez mettre le contenu de votre choix.
$('td').html('15');

// 5. Sélectionnez, grâce à jQuery, tous les éléments ayant un attribut "class" de "temperature-negative" et modifiez leur contenu html grâce à la méthode .html()
// Ci-dessous: indice pour TP2, écriture d'un sélecteur avec portion dynamique et concaténation
var maSelection = 'negative';
$('.temperature-' + maSelection).html('11');

// 6. Sélectionnez, grâce à jQuery, l'élément ayant un attribut "id" de "journee-demain" et modifiez son contenu html grâce à la méthode .html()
$('#journee-demain').html('25');