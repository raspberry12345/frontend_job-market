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
    <link rel="stylesheet" href="styleDashboard2.css">
    <title>Dashboard</title>
</head>
<body>

    <h2><span class="material-symbols-outlined">
    mail </span>
    <span id="email"><?php echo $_SESSION['email'] ?></span></h2>

    <div id="nav">
        
        <button id="searchNavBtn">Inserat verfassen</button>
        
        <button id="showFavoriteBtn">Meine Inserate</button>
        
        <button id="showApplicationBtn">Bewerber</button>
        <button id="applicationDocuments">Einstellungen</button>
        
        
        
        <a href="logout.php" id="logout">abmelden</a>
    </div>
    <div class="main-section">
        <form id="form">
            <label for="branche">Branche</label>
            <br>
            <select name="branche" id="inputBranche" >
                        
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
            <br>
            <label for="berufsbezeichnung">Berufsbezeichnung</label>
            <br>
            <input type="text" name="berufsbezeichnung" id="berufsbezeichnung">
            <br>
            <label for="bezirk">Bezirk</label>
            <br>
            <input type="text" name="bezirk" id="bezirk">
            <br>
            <label for="anforderungen">Anforderungen</label>
            <br>
            <textarea name="anforderungen" id="anforderungen" cols="15" rows="10"></textarea>
            <br>
            <label for="aufgabenbereich">Aufgabenbereich</label>
            <br>
            <textarea name="aufgabenbereich" id="aufgabenbereich" cols="15" rows="10"></textarea>
            <br>
            <label for="benefits">Benefits</label>
            <br>
            <textarea name="benefits" id="benefits" cols="15" rows="10"></textarea>
            <br>
            <label for="bezahlung">Bezahlung</label>
            <br>
            <input type="text" name="bezahlung" id="bezahlung" placeholder="€ Brutto/Monat">
            <input type="submit" id="submitBtn" value="Abschicken">
        </form>
    </div>     
    <div class="showAllInserat dbOutput">
    <h2 class="jobTitle"></h2>
        <p><strong>Anforderungen</strong></p>
        <p class="requirements"></p>
        <p><strong>Aufgabenbereich</strong></p>
        <p class="responsibility"></p>
        <p><strong>Benefits</strong></p>
        <p class="benefits"></p>
        <p><strong>Bezahlung</strong></p>
        <p class="salary"></p>
    </div>

    <div class="applicant">
        <h1>Bewerber</h1>
    </div>

    <div class="adjustment">
        <h1>Einstellungen</h1>
    </div>
    
    <script src="handleFormData.js"></script>
    <script src="navigation.js"></script>
    
    
</body>
</html>
