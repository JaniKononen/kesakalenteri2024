// Luo uusi div-elementti
let kuvaAlue = document.createElement("div");

// Elementin id
kuvaAlue.id = "kuva-alue";

// Lisää elementti HTML-sivulle
document.body.appendChild(kuvaAlue);

//määritellään kuva
let kuva = new Image();
kuva.src = "Kuvat/linnanmaki.jpg"; //kuvan lähde
kuva.alt = "Linnanmäki"; //vaihtoehtoinen teksti

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

                uusiKuva.src = "Kuvat/nakit&muusi.jpg"; // Aseta uuden kuvan lähde
        
                // Lisää kuva-alueeseen
                document.getElementById("kuva-alue").appendChild(uusiKuva);
        
                //otsikko- ja sisältötekstit
                document.getElementById("Otsikkoteksti").innerHTML = "Nakit ja muusi";
                document.getElementById("Sisältöteksti").innerHTML = "Tuomas Jaakkola Lauantai-aamuna klo 1 matkalla kotia.";
                
                // näyttää ajankohtaisen luukun kun painettu
                document.getElementById("btn1").style.backgroundColor = "green";
            } else {
                window.alert("Ei toimi!");
            }
        }
        
        function kalenteriLuukku2(){
            if(paiva >= 27 && kuukausi >= 5){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku3(){
            if(paiva >= 3 && kuukausi >= 6){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku4(){
            if(paiva >= 10 && kuukausi >= 6){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku5(){
            if(paiva >= 17 && kuukausi >= 6){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku6(){
            if(paiva >= 24 && kuukausi >= 6){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku7(){
            if(paiva >= 1 && kuukausi >= 7){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku8(){
            if(paiva >= 8 && kuukausi >= 7){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku9(){
            if(paiva >= 15 && kuukausi >= 7){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku10(){
            if(paiva >= 22 && kuukausi >= 7){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku11(){
            if(paiva >= 29 && kuukausi >= 7){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku12(){
            if(paiva >= 5 && kuukausi >= 8){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }
        function kalenteriLuukku13(){
            if(paiva >= 12 && kuukausi >= 8){
            document.getElementById("teksti").innerHTML = "Hyvä";
            }else{
            window.alert("Ei toimi!")
            }
        }