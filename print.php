<?php
                    for ($i=0; $i < count($result); $i++) { 
                        $index = $i +1;
                        $checkFavorite =false;
                        $checkApplication = false;
                        
                        $value = $result[$i]['id'];
                        echo "<div class='dbOutput'>";
                        echo "<h2>".$result[$i]['job_title']."</h2>";
                        echo "<p style='color:darkblue;'><strong>Anforderungen:</strong></p>";
                        echo "<p>".$result[$i]['requirements']."</p>";
                        echo "<br>";
                        echo "<p style='color:darkblue;'><strong>Aufgabenbereich:</strong></p>";
                        echo "<p>".$result[$i]['responsibility']."</p>";
                        echo "<br>";
                        echo "<p style='color:darkblue;'><strong>Benefits:</strong></p>";
                        echo "<p>".$result[$i]['benefits']."</p>";
                        echo "<br>";
                        echo "<p style='color:darkblue;'><strong>Bezahlung:</strong></p>";
                        echo "<p>".$result[$i]['salary']."€ Brutto/Monat</p>";
                        if (!empty($_SESSION['email'])) {
                           
                           if(count($favorites)!= 0){
                                for ($s=0; $s <count($favorites) ; $s++) { 
                                    if ($favorites[$s]['internship_id'] == $value) {
                                        echo "<button id=$index value=$value >Gemerkt</button>";
                                        $checkFavorite = true;
                                    }
                                }
                            }
                            
                            if (!$checkFavorite) {
                                echo "<button id=$index value=$value >Merken</button>";
                            }

                            if(count($application)!= 0){
                                for ($a=0; $a <count($application) ; $a++) { 
                                    if ($application[$a]['internship_id'] == $value) {
                                        $index = "a".$index;
                                        echo "<button class=$index value=$value>Beworben</button>";
                                        $checkApplication = true;
                                    }
                                }
                            }
                            
                            if (!$checkApplication) {
                                $index = "a".$index;
                                echo "<button class=$index value=$value>Bewerben</button>";
                            }
                            
                            
                            
                        }
                        
                        echo "</div>";
                        
                        
                    }
                    //Ausgabe der Inserate
