<?php 
    session_start();
    if (empty($_SESSION['email'])) {
        # code...
        header("Location: accessDenied.html");
    }
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styleDashboard.css">
    <title>Dashboard</title>
</head>
<body>

    <h2><span class="material-symbols-outlined">
mail
</span><?php echo " ".$_SESSION['email'] ?></h2>

    <div id="nav">
        
        <button id="searchNavBtn">Suche</button>
        
        <button id="showFavoriteBtn">Merkliste</button>
        
        <button id="showApplicationBtn">Bewerbungen</button>
        
        <button id="applicationDocuments">Bewerbungs-unterlagen</button>
        
        <a href="logout.php" id="logout">abmelden</a>
    </div>     
    
    <div class="main-section" id="main-section">
            <div class="main-box">
                <h2>Starte die Praktikumssuche</h2>
                <form action="dashboardPraktikant.php" method="get">
                    <input type="hidden" name="page" value="1">
                    <select name="branche" id="menu">
                        <option value="alle">Alle</option>    
                        <option value="agrar">Agrarwirtschaft</option>
                        <option value="bau">Bau</option>
                        <option value="chemie">Chemie, Rohstoffe</option>
                        <option value="dienstleistung">Dienstleistung</option>
                        <option value="e-commerce">E-Commerce</option>
                        <option value="energie">Energie, Umwelt</option>
                        <option value="finanz">Finanzen, Versicherung</option>
                        <option value="freizeit">Freizeit</option>
                        <option value="gesellschaft">Gesellschaft</option>
                        <option value="handel">Handel</option>
                        <option value="internet">Internet</option>
                        <option value="immobilien">Immobilien</option>
                        <option value="konsum">Konsum</option>
                        <option value="leben">Leben</option>
                        <option value="medien">Medien</option>
                        <option value="metall">Metall, Elektronik</option>
                        <option value="gesundheit">Pharma, Gesundheit</option>
                        <option value="personalwesen">Personalwesen</option>
                        <option value="fitness">Sport, Fitness</option>
                        <option value="informationstechnologie">Telekommunikation, IT</option>
                        <option value="tourismus">Tourismus</option>
                        <option value="verkehr">Verkehr, Logistik</option>
                        <option value="werbung">Werbung, Marketing</option>
                        <option value="wirtschaft">Wirtschaft, Politik</option>
                    </select>
                    <input type="text" id="lname" name="district" placeholder="Bezirk">
                    <input type="submit" id="searchBtn" value="Go">
                </form>
            </div>
            <?php
                
                if(!empty($_GET['page'])){
                    require_once ("connectDb.php");
                    if (isset($_GET)) {
                        $currentPage = $_GET['page'];
                        $currentPage = $currentPage-1;
                        $offset = $currentPage*5;
                    }
                    $stmt;
                    $countTotal;
                    $perPage =5;
                    
                    if (!empty($_GET['branche']) and !empty($_GET['district'])) {

                        if (!strcmp($_GET['branche'],"alle")) {
                            
                            $stmt = $pdo->prepare('SELECT count(id) as `count` FROM `praktikum` where bezirk=:district');
                            $stmt->bindValue(':district', $_GET['district']);
                            $stmt->execute();
                            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            $countTotal = ceil($result[0]["count"]/5);
                            $stmt = $pdo->prepare('SELECT * FROM `praktikum` where bezirk = :district ORDER BY `id` DESC Limit :offset, :perPage ');
                            $stmt->bindParam(':district', $_GET['district']);
                            $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
                            $stmt->bindValue(':perPage', $perPage, PDO::PARAM_INT);
                        }else{
                            $stmt = $pdo->prepare('SELECT count(id) as `count` FROM `praktikum` where branche=:branche and bezirk=:district');
                            $stmt->bindValue(':branche', $_GET['branche']);
                            $stmt->bindValue(':district', $_GET['district']);
                            $stmt->execute();
                            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            $countTotal = ceil($result[0]["count"]/5);
                            $stmt = $pdo->prepare('SELECT * FROM `praktikum` where branche=:branche and bezirk=:district ORDER BY `id` DESC ');
                            $stmt->bindValue(':branche', $_GET['branche']);
                            $stmt->bindValue(':district', $_GET['district']);
                           
                        }
                        
                    }
                    elseif (!empty($_GET['branche']) and empty($_GET['district'])) {
                        
                        if (!strcmp($_GET['branche'],"alle")) {
                            $stmt = $pdo->prepare('SELECT count(id) as `count` FROM `praktikum`');
                        
                            $stmt->execute();
                            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            $countTotal = ceil($result[0]["count"]/5);
                            $stmt = $pdo->prepare('SELECT * FROM `praktikum` ORDER BY `id` DESC Limit :offset, :perPage');
                        
                            $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
                            $stmt->bindValue(':perPage', $perPage, PDO::PARAM_INT);
                        }else{
                            
                            $stmt = $pdo->prepare('SELECT count(id) as `count` FROM `praktikum` where branche=:branche');
                            $stmt->bindValue(':branche', $_GET['branche']);
                            $stmt->execute();
                            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            $countTotal = ceil($result[0]["count"]/5);
                            $stmt = $pdo->prepare('SELECT * FROM `praktikum` where branche=:branche ORDER BY `id` DESC Limit :offset, :perPage ');
                            $stmt->bindValue(':branche', $_GET['branche']);
                            $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
                            $stmt->bindValue(':perPage', $perPage, PDO::PARAM_INT);
                            
                        }
                        
                    }
                    $stmt->execute();
                    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    include "print.php";
                    
                    echo "<ul class='pagination'>";
                    for ($i=1; $i < $countTotal+1; $i++) { 
                        $url = "dashboardPraktikant.php?page=".$i."&branche=".$_GET['branche']."&district=".$_GET['district'];
                        echo "<li><a href='".$url."'>".$i."</a></li>";
                        
                    }
                    echo "</ul>";
                }
            ?>
    <script src="controller.js"></script>
    <script src="navigation.js"></script>
    
    
</body>
</html>
