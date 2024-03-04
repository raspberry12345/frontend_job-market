<?php
    session_start();
    require_once ("connectDb.php");
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        if (!empty($_POST['email']) && !empty($_POST['password'])) {
            $access = false;
            $stmt = $pdo->prepare('SELECT * FROM `employers` where email=:email');
            $stmt->bindValue(':email', $_POST['email']);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            if (!empty($result[0]['password'])) {
                # code...
                
                $password = $result[0]['password'];
                if (password_verify($_POST['password'], $password)) {
                    //echo "<h1 style='text-align:center'>Login Erfolgreich</h1>";
                    $access = true;
                    $_SESSION['email'] = $_POST['email'];
                    header("Refresh:1; url=dashboardArbeitgeber.php");
                    
                }
            }
            
            
            $stmt = $pdo->prepare('SELECT * FROM `employees` where email=:email');
            $stmt->bindValue(':email', $_POST['email']);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (!empty($result[0]['password'])) {
                if (password_verify($_POST['password'], $result[0]['password'])) {
                    //echo "<h1 style='text-align:center'>Login Erfolgreich</h1>";
                    $access = true;
                    $_SESSION['email'] = $_POST['email'];
                    header("Refresh:1; url=dashboardPraktikant.php");
                }
            }
            
            if (!$access) {
                # code...
                echo "<h1 style='text-align:center'>Zugriff Verweigert</h1>";
                header("Refresh:1; url=index.php");
            }
            


        }
    }
