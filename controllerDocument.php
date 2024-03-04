<?php
    require_once ("connectDb.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        if (isset($_FILES['cv']) && isset($_POST['email'])) {
            # code...
            var_dump($_FILES['cv']);

            //test.......................
                $file_name = $_FILES['cv']['name'];
                $tempname = $_FILES['cv']['tmp_name'];
                $folder = 'img/'.$file_name;
            //test.......................
                $localFilePath = "uploads/".$file_name;
            //verschieben vom lokalen verzeichnis nach dem ordner am server
                move_uploaded_file($tempname, $localFilePath);
            //verschieben vom lokalen verzeichnis nach dem ordner am server

            //das file vom uploads verzeichnis einer variablen zuweisen
                $content = file_get_contents($localFilePath);
            //das file vom uploads verzeichnis einer variablen zuweisen
                
            
            
            $stmt = $pdo->prepare('UPDATE `employees` SET cv=:cv WHERE email=:email');
            $stmt->bindValue(':cv', $content);
            $stmt->bindValue(':email', $_POST['email']);
            $stmt->execute();
        
        }
        if (isset($_FILES['motivation'])) {
            # code...
            $stmt = $pdo->prepare('UPDATE `employees` SET motivation=:motivation WHERE email=:email');
            $stmt->bindValue(':motivation', $_FILES['motivation']);
            $stmt->bindValue(':email', $_POST['email']);
            $stmt->execute();
        }
    }
    
    
    
    

?>