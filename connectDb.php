
<?php
try{

    $dbhost = "localhost";
    $dbname="internship_management";
    $dbuser = "root";
    $dbpass = "";
    $pdo = new PDO("mysql:host=$dbhost; dbname=$dbname", $dbuser, $dbpass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
            }
            catch(PDOException $e){
                echo $e->getMessage();
                die();
            }
            ?>