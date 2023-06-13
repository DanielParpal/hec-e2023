<?php 

// Définition d'une variable prix, qui contient un tableau de prix
$prix = [
	99, 59, 104.98, 62.98
];
var_dump($prix);
echo "<br>";

$produits = [
	"t-shirt", // 0
	"jeans", // 1
	"chapeau" // 2
];
var_dump($produits);
echo "<br>";

// On peut accéder à un élément grâce à son index
echo $produits[2];
echo "<br>";

$produits[2] = "casquette";
var_dump($produits);
echo "<br>";

// Ajout d'un élément (équivalent conceptuel du .push() en JS)
$produits[] = "manteau";
var_dump($produits);
echo "<br>";

// Pour connaître la quantité d'éléments (équivalent du .length)
echo count($produits);
echo "<br>";




?>