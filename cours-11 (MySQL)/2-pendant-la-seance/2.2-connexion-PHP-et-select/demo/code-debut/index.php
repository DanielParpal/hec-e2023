<?php

// Connexion au serveur MySQL à partir de PHP
// Ceci doit toujours être la première étape
include "db/connexion-MySQL.php";

// Sélection des données
include "db/select-publications.php";

// Affichage données (écrire du HTML)
include 'views/app.html.php';


?>