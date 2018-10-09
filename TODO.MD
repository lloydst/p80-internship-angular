<h1>Done</h1>
 every thing else?
<h1>Todo</h1>
 - Styling of support(jira) component, and traffic component
 - touch up meeting component (year has been removed)
 - check up on admin scss
 - change animation on financial component
 - touch up the loading component (index.html file in src)



 1.
Alle content moet in elk channel kunnen
Eigenlijk moet de channel lijst gewoon slides bevatten (zoals je nu ziet bij loop)                                          done (need styling updates)

Die slides hebben dan:
-	OF component kiezen uit lijst dus niet zelf url invoeren                                                                done
-	OF url die je kan invoeren                                                                                              done
-	Test knop erachter                                                                                                      done
-	Invoer display tijd in seconden of afhankelijk van component                                                            done
-	Radiobutton                                                                                                             done
o	Altijd tonen                                                                                                            done
o	Alleen tonen tussen [16:30]  - [17:30]                                                                                  done
op [ ]ma, [ ]di, [ ]wo, [ ]do, [x]vr , [ ]za, [ ]zo                                                                         done
-	Vinkje om aan/uit te zetten                                                                                             done? (allways komt erg dichtbij)

De slides moet je op volgorde kunnen zetten, niet met volgnummer in database maar door je JSON volgorde aan te passen.      done
2.
Noem alles iets logischer en minder technisch: slides                                                                       done

3.
Loop functie kan dan straks misschien wel weg, maar maak eerst die andere goed                                              -one

4.
Voor agenda:
-	zorg dat je agenda van vergaderzaal toont                                                                               ----
-	inlog moet op server niet in browser                                                                                    ----
-	als er content in staat kijken we nog even naar layout                                                                  ----

5.
Bij message, image kunnen aanklikken i.p.v. url overtypen                                                                   done

6.
Over de basis slider/loop.
-	Als er een slide mist of loop is afgelopen geen admin tonen en ook geen error                                           --ne
-	De slides moeten steeds in zelfde window/tab starten bij starten van de applicatie, als ik het ding 3 uur laat draaien
 mag er nog steeds maar 1 tabje geopend zijn en niet 1 tabje per 10 minuten bij komen                                       done (except for when not logged in for the meeting component that one does open in a new window (everytime not logged in))
-	Test wat er gebeurt op de client/browser als je:
o	Server down is                                                                                                          pwa (api calls get cached)
o	Dingen aanpast in content als het ding draait                                                                           when the loop restarts the new content is shown
o	Kanaal opheft dat nu draait                                                                                             hij lijkt dan op een andere over te gaan
o	Etc
Misschien hoef je niet alle scenario’s op te lossen, maar het moet er altijd netjes uitzien zelfs al misgaat. Dit beschrijven en ook opnemen in je verslag.

Kan jij:
-	Maandag van al deze dingen en planning maken
-	Bedenken waarvoor je nog vragen/hulp nodig hebt
-	En dan datum/tijd voor 2e demo prikken
