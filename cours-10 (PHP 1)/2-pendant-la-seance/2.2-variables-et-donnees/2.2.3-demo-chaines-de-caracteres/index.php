<?php 

$prenom = "Daniel";
echo $prenom;
echo "<br>";

$nom_de_famille = 'Parpal';
echo $nom_de_famille;
echo '<br>';

// Concaténation (se fait avec un point au lieu d'un signe +)
echo $prenom . ' ' . $nom_de_famille;
echo '<br>';

// Interpolation
echo 'Mon prénom est: $prenom'; // la variable sera traitée de manière litérale avec les guillements simples
echo '<br>';
echo "Mon prénom est $prenom"; // la variable sera interpolée en utilisant les guillements doubles
echo '<br>';

// Concaténation versus interpolation
echo 'Bonjour, je suis ' . $prenom . ' ' . $nom_de_famille . '.<br>';
echo "Bonjour, je suis $prenom $nom_de_famille.<br>"

?>