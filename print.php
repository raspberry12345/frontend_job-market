<?php
                    for ($i=0; $i < count($result); $i++) { 
                        $index = $i +1;

                        
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
                            # code...
                            echo "<button id=$index value=$value >Merken</button>";
                            $index = "a".$index;
                            echo "<button class=$index value=$value>Bewerben</button>";
                        }
                        
                        echo "</div>";
                        
                        
                    }
                    //Ausgabe der Inserate
