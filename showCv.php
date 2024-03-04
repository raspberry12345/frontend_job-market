<?php 
    require_once ("connectDb.php");
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        # code...
        $stmt = $pdo->prepare('SELECT * FROM `employees` where email=:email');
            $stmt->bindValue(':email', $_GET['email']);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $dummy = $result[0]['cv'];
            $fileSize = strlen($dummy);

            
            var_dump($fileSize);
            header("Content-Type: application/pdf");
            header("Content-Length: $fileSize");
            echo $result[0]['cv'];
    }

?>