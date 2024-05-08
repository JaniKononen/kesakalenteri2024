// Luo uusi div-elementti
let kuvaAlue = document.createElement("div");

// Elementin id
kuvaAlue.id = "kuva-alue";

// Lisää elementti HTML-sivulle
document.body.appendChild(kuvaAlue);

//määritellään kuva
let kuva = new Image();
kuva.src = "Kuvat/mysterybox.jpg"; //kuvan lähde
kuva.alt = "Laatikko"; //vaihtoehtoinen teksti

// Lisää kuvaelementti kuva-alue-diviin
kuvaAlue.appendChild(kuva);

//määritellään kalenteriluukut
let uusiKuva = document.createElement("img");
const aika = new Date();
let paiva = aika.getDate();
let kuukausi = aika.getMonth();
kuukausi++

        function kalenteriLuukku1() {
            if (paiva >= 0 && kuukausi >= 5) {
                // Poista aiempi kuva-alueen sisältö
                document.getElementById("kuva-alue").innerHTML = "";
        
                // Aseta uuden kuvan lähde
                uusiKuva.src = "Kuvat/linnanmaki.jpg"; 
        
                // Lisää kuva-alueeseen
                document.getElementById("kuva-alue").appendChild(uusiKuva);
        
                //otsikko- ja sisältötekstit
                document.getElementById("Otsikkoteksti").innerHTML = "Linnanmäki";
                document.getElementById("Sisältöteksti").innerHTML = "Linnanmäki on Suomen suosituin ja vanhin huvipuisto. Tämä 74-vuotias Alppilan ylpeys tarjoaa monipuolisen päivän koko perheelle. Yli 50 laitetta ja peliä takaavat uusia elämyksiä jokaiselle. Suositus ";
                
                
                // näyttää ajankohtaisen luukun kun painettu
                document.getElementById("btn1").style.backgroundColor = "grey";
            } else {
                window.alert("Väärä viikko Donkey!");
            }
        }
        
        function kalenteriLuukku2(){
            if(paiva >= 7 && kuukausi >= 5){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
           // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/Korkeasaari.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Korkeasaari";
            document.getElementById("Sisältöteksti").innerHTML = "Korkeasaari on pakollinen käyntikohde jokaiselle eläinten ystävälle. Eläintarhasta löytyy noin 150 eri eläinlajia kotimaan tutuista metsäneläimistä trooppisiin erikoisuuksiin.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn2").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku3(){
            if(paiva >= 3 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/Helsinki-Cup_logo.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Helsinki-Cup";
            document.getElementById("Sisältöteksti").innerHTML = "Helsinki-cup on kansainvälisestikin merkittävä juniorijalkapalloturnaus, sillä siinä pelaa yli 1800 joukkuetta jopa 20 maasta. Turnauksella on pitkät perinteet, sillä se on pelattu vuosittain jo vuodesta 1976. Helsinki-cup ei ole vain jalkapalloturnaus, vaan siihen kuuluu myös tapahtumatori, avajaiskulkue ja kisadisco.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn3").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku4(){
            if(paiva >= 10 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/luonnontieteellinen_museo.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "Pohjoisella Rautatienkadulla sijaitseva Luonnontieteellinen museo on yksi Helsingin todellisista ylpeyksistä. Nelikerroksisesta rakennuksesta löytyy upeita näytteitä ja valtavasti tietoa geologiasta, kasveista ja eläimistä.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku5(){
            if(paiva >= 17 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/skywheel.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Skywheel";
            document.getElementById("Sisältöteksti").innerHTML = "40 metriin kohoava Helsinki SkyWheel on yksi Helsingin suosituimmista käyntikohteista. Maailmanpyörän sijainti Kauppatorin vieressä mahdollistaa kauniit näkymät sekä kaupunkiin että merelle.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku6(){
            if(paiva >= 24 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/suomenlinna.jpg"; 

            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Suomenlinna";
            document.getElementById("Sisältöteksti").innerHTML = "Suomenlinna on tärkeä osa Suomen historiaa ja Unescon maailmanperintökohde. Yli 250 vuotta vanha merilinnoitus sijaitsee saarella ja sinne pääsee lautalla, vesibussilla tai vaikka omalla veneellä.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku7(){
            if(paiva >= 1 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/3.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Eppu Normaali";
            document.getElementById("Sisältöteksti").innerHTML = "Manserockin legenda Eppu Normaali valtaa Allas Sea Poolin 15.8. 48-vuotias yhtye on levyttänyt monia listahittejä ja se on yksi Suomen meneistyneimmistä.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku8(){
            if(paiva >= 8 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/tuska.jpg";
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Tuska";
            document.getElementById("Sisältöteksti").innerHTML = "Suvilahden Tuska Festival on Suomen merkittävimpiä raskaan musiikin tapahtumia. Tuskassa esiintyy joka vuosi niin kansainvälisiä suuruuksia kuin kotimaan kärkinimiä. Vuoden 2024 artistikattaukseen kuuluvat muun muassa metalcore-jättiläiset Bring Me The Horizon ja Bad Omens sekä Suomen power metal -legenda Stratovarius.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku9(){
            if(paiva >= 15 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/9.jpg";
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Tall Ship Race";
            document.getElementById("Sisältöteksti").innerHTML = "Nuorille tarkoitettu purjehduskilpailu Tall Ships Race järjestetään Itämerellä joka neljäs vuosi ja tänä vuonna Helsinki on yksi kilpailun isäntäsatamista. Purjelaivoja voi tulla ihailemaan 4.-7.7. Tall Ships Race on Euroopan suurin koko perheen ilmaistapahtuma.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku10(){
            if(paiva >= 22 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/10.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Löyly";
            document.getElementById("Sisältöteksti").innerHTML = "Hernesaaren Löyly-saunassa pääsee rentoutumaan. Löylyssä on kaksi yleistä saunaa ja yksityinen sauna. Myös meressä uiminen on mahdollista ja saunan yhteydessä toimii ravintola.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku11(){
            if(paiva >= 29 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/11.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Kaisaniemen kasvistieteellinen puutarha";
            document.getElementById("Sisältöteksti").innerHTML = "Kaisaniemen kasvitieteellinen puutarha perustettiin vuonna jo vuonna 1763. Puutarhan ulkoalueelle on maksuton sisäänpääsy ja sieltä löytyy 2800 kasvilajia. Puutarhan kasvihuoneet ovat maksullisia";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku12(){
            if(paiva >= 5 && kuukausi >= 8){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/12.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Helsinki Sightseeing-risteily";
            document.getElementById("Sisältöteksti").innerHTML = "Helsinki Sightseeing -risteily alkaa Kauppatorilta ja näyttää monet Helsingin läheisyydessä Itämerellä siljaitsevat nähtävyydet. 1,5 tunnin risteilyelämystä voi ehostaa aluksesta löytyvien kahvila-baarien antimilla.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku13(){
            if(paiva >= 12 && kuukausi >= 8){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Aseta uuden kuvan lähde
            uusiKuva.src = "Kuvat/13.jpg"; 
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Senaatintori";
            document.getElementById("Sisältöteksti").innerHTML = "Senaatintori on Helsingin symbolinen keskus. Torin reunalla komeilee Helsingin tuomiokirkko, joka on kaupungin tunnetuin turistikohde. Ympärillä ovat myös  Valtioneuvoston linna ja Helsingin yliopiston päärakennus.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "grey";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }