<?php 

$prixDeBase = 100;
echo $prixDeBase;
echo "<br>";

echo $prixDeBase + 20; // 120
echo "<br>";

echo $prixDeBase - 10;
echo "<br>";

// Pour la division et multiplication, même chose que JS: / et *

// Opérateurs de comparaison
echo $prixDeBase < 200; // Une comparaison nous donnera un booléen
// En PHP: true est affiché comme 1, et false est affiché comme une chaîne vide
echo "<br>";

echo $prixDeBase > 10000;
echo "<br>";

var_dump($prixDeBase > 10000);
echo "<br>";

?>