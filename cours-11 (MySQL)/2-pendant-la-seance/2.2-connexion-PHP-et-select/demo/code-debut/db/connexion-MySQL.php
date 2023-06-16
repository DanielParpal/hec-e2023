<?php 

/**
 * Initialisation de la connexion à la base de données
 */
// Pour ceux et celles sur Mac (MAMP): vous devez conserver 'root'/'root'
// Pour ceux et celles sur PC (XAMPP): vous devez utiliser 'root'/''
try {
    $db = new PDO('mysql:host=localhost;dbname=hec', 'root', 'root');
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
$db->exec("set names utf8");

?>