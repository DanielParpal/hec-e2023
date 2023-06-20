<?php 

// Modélisation du premier cours
// On utilise un tableau associatif
$cours_1 = [
	"titre" => "X-Fit (Klub)",
	"instructeur" => "Martha",
	"date" => "20 juin 2023"
];

// On modélise un deuxième cours
$cours_2 = [
	"titre" => "Yoga flow avec musique",
	"instructeur" => "Paul",
	"date" => "22 juin 2023"
];

// var_dump($cours_1);
// echo "<br>";

// On accède à une propriété
// echo $cours_1["titre"] . "<br>";
// echo $cours_1["instructeur"] . "<br>";

// On peut modifier une propriété
// $cours_1["date"] = "13 juin 2023";
// var_dump($cours_1);
// echo "<br>";
include 'app.html.php';

?>