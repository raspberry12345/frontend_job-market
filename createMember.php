<?php
    
    
    
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            require_once ("connectDb.php");
            
            if(isset($_POST["company"])){
                
                $stmt = $pdo->prepare('INSERT INTO `employers` (`email`, `password`, `created_at`) VALUES (:email, :password, now())');
            }
            if (isset($_POST["internship"])) {
                
                $stmt = $pdo->prepare('INSERT INTO `employees` (`email`, `password`, `created_at`) VALUES (:email, :password, now())');
            }
            $stmt->bindValue(':email', $_POST['email']);
            $stmt->bindValue(':password', password_hash($_POST['password'],PASSWORD_DEFAULT));
            //passwort vergleichen mit
            //password_verify($_POST['password'],$result[0]['password'])

            $stmt->execute()  ;      
        }
    


