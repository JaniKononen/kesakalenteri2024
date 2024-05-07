// Luo uusi div-elementti
let kuvaAlue = document.createElement("div");

// Elementin id
kuvaAlue.id = "kuva-alue";

// Lisää elementti HTML-sivulle
document.body.appendChild(kuvaAlue);

//määritellään kuva
let kuva = new Image();
kuva.src = "Kuvat/karuselli.png"; //kuvan lähde
kuva.alt = "karuselli"; //vaihtoehtoinen teksti

// Lisää kuvaelementti kuva-alue-diviin
kuvaAlue.appendChild(kuva);

//määritellään sisältöteksti
let sisältöteksti = "";

        let uusiKuva = document.createElement("img");
        const aika = new Date();
        let paiva = aika.getDate();
        let kuukausi = aika.getMonth();
        kuukausi++
        function kalenteriLuukku1() {
            if (paiva >= 0 && kuukausi >= 5) {
                // Poista aiempi kuva-alueen sisältö
                document.getElementById("kuva-alue").innerHTML = "";
        
                // Luo uusi kuvaelementti

                uusiKuva.src = "Kuvat/linnanmaki.jpg"; // Aseta uuden kuvan lähde
        
                // Lisää kuva-alueeseen
                document.getElementById("kuva-alue").appendChild(uusiKuva);
        
                //otsikko- ja sisältötekstit
                document.getElementById("Otsikkoteksti").innerHTML = "Linnanmäki";
                document.getElementById("Sisältöteksti").innerHTML = "Linnanmäki on Suomen suosituin ja vanhin huvipuisto. Tämä 74-vuotias Alppilan ylpeys tarjoaa monipuolisen päivän koko perheelle. Yli 50 laitetta ja peliä takaavat uusia elämyksiä jokaiselle. Suositus ";
                
                
                // näyttää ajankohtaisen luukun kun painettu
                document.getElementById("btn1").style.backgroundColor = "green";
            } else {
                window.alert("Väärä viikko Donkey!");
            }
        }
        
        function kalenteriLuukku2(){
            if(paiva >= 7 && kuukausi >= 5){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = "Kuvat/korkeasaari.jpg"; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Korkeasaari";
            document.getElementById("Sisältöteksti").innerHTML = "Korkeasaari on pakollinen käyntikohde jokaiselle eläinten ystävälle. Eläintarhasta löytyy noin 150 eri eläinlajia kotimaan tutuista metsäneläimistä trooppisiin erikoisuuksiin.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn2").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku3(){
            if(paiva >= 3 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = "Kuvat/Helsinki-Cup_logo.jpg.jpg"; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "Helsinki-Cup";
            document.getElementById("Sisältöteksti").innerHTML = "Helsinki-cup on kansainvälisestikin merkittävä juniorijalkapalloturnaus, sillä siinä pelaa yli 1800 joukkuetta jopa 20 maasta. Turnauksella on pitkät perinteet, sillä se on pelattu vuosittain jo vuodesta 1976. Helsinki-cup ei ole vain jalkapalloturnaus, vaan siihen kuuluu myös tapahtumatori, avajaiskulkue ja kisadisco.";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn3").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku4(){
            if(paiva >= 10 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku5(){
            if(paiva >= 17 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku6(){
            if(paiva >= 24 && kuukausi >= 6){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku7(){
            if(paiva >= 1 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku8(){
            if(paiva >= 8 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku9(){
            if(paiva >= 15 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku10(){
            if(paiva >= 22 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku11(){
            if(paiva >= 29 && kuukausi >= 7){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku12(){
            if(paiva >= 5 && kuukausi >= 8){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }
        function kalenteriLuukku13(){
            if(paiva >= 12 && kuukausi >= 8){
            // Poista aiempi kuva-alueen sisältö
            document.getElementById("kuva-alue").innerHTML = "";
        
            // Luo uusi kuvaelementti

            uusiKuva.src = ""; // Aseta uuden kuvan lähde
    
            // Lisää kuva-alueeseen
            document.getElementById("kuva-alue").appendChild(uusiKuva);
    
            //otsikko- ja sisältötekstit
            document.getElementById("Otsikkoteksti").innerHTML = "";
            document.getElementById("Sisältöteksti").innerHTML = "";
            
            // näyttää ajankohtaisen luukun kun painettu
            document.getElementById("btn1").style.backgroundColor = "green";
            }else{
            window.alert("Väärä viikko Donkey!")
            }
        }