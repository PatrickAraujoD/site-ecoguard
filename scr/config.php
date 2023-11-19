<?php
$dbHost = 'localhost';
$dbPort = '5432'; // Porta padrão do PostgreSQL
$dbUsername = 'postgres';
$dbPassword = '2023';
$dbName = 'ecoguard';

// Conectando ao PostgreSQL usando PDO
try {
    $conexao = new PDO("pgsql:host=$dbHost;port=$dbPort;dbname=$dbName;user=$dbUsername;password=$dbPassword");
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão efetuada";
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
    exit;
}

?>
