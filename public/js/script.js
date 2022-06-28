
let schulmedizin = 0;
let tcm = 0;
let pflanzenheilkunde = 0;
let naturheilkunde = 0;
let manuelleTherapie = 0;
let ajuveda = 0;

function zuFrage1() {
    document.getElementById("start").style.display = "none";
    document.getElementById("Frage1").style.display = "unset";
}

function zuFrage2ja() {
    schulmedizin += 10;
    manuelleTherapie += 20;

    document.getElementById("Frage1").style.display = "none";
    document.getElementById("Frage2").style.display = "unset";
}


function zuFrage2nein() {

    document.getElementById("Frage1").style.display = "none";
    document.getElementById("Frage2").style.display = "unset";
}

function zuFrage3ja() {
    schulmedizin += 20;
    naturheilkunde += 10;
    tcm += 10;

    document.getElementById("Frage2").style.display = "none";
    document.getElementById("Frage3").style.display = "unset";
}

function zuFrage3nein() {

    document.getElementById("Frage2").style.display = "none";
    document.getElementById("Frage3").style.display = "unset";
}

function zuFrage4ja() {
    pflanzenheilkunde += 10;
    naturheilkunde += 20;
    manuelleTherapie += 10;

    document.getElementById("Frage3").style.display = "none";
    document.getElementById("Frage4").style.display = "unset";
}

function zuFrage4nein() {

    document.getElementById("Frage3").style.display = "none";
    document.getElementById("Frage4").style.display = "unset";
}

function zuFrage5() {

    let bewertung = document.getElementById("Bewertung").value;

    //Schulmedizin
    if (bewertung == 0) {
        pflanzenheilkunde -= 20;
        naturheilkunde -= 30;
        schulmedizin += 20;
    } else if (bewertung == 1) {
        pflanzenheilkunde -= 10;
        naturheilkunde -= 20;
        schulmedizin += 10;  
    }

    //Naturheilkunde
    if (bewertung == 5) {
        pflanzenheilkunde += 10;
        naturheilkunde += 20;
        schulmedizin -= 10;
    } else if (bewertung == 6) {
        pflanzenheilkunde += 20;
        naturheilkunde += 30;
        schulmedizin -= 20;
    }

    document.getElementById("Frage4").style.display = "none";
    document.getElementById("Frage5").style.display = "unset";
}

function zuFrage5nein() {

    document.getElementById("Frage4").style.display = "none";
    document.getElementById("Frage5").style.display = "unset";
}

//akupunktur
function zuFrage6ja() {
    naturheilkunde += 10;
    pflanzenheilkunde += 10;

    document.getElementById("Frage5").style.display = "none";
    document.getElementById("Frage6").style.display = "unset";
}

function zuFrage6nein() {

    document.getElementById("Frage5").style.display = "none";
    document.getElementById("Frage6").style.display = "unset";
}

function zuFrage7ja() {
    //Akupunktur
    tcm += 30;

    document.getElementById("Frage6").style.display = "none";
    document.getElementById("Frage7").style.display = "unset";
}

function zuFrage7nein() {

    document.getElementById("Frage6").style.display = "none";
    document.getElementById("Frage7").style.display = "unset";
}

function zuFrage8ja() {
    //Qi im Körper
    tcm += 30;

    document.getElementById("Frage7").style.display = "none";
    document.getElementById("Frage8").style.display = "unset";
}

function zuFrage8nein() {

    document.getElementById("Frage7").style.display = "none";
    document.getElementById("Frage8").style.display = "unset";
}

function zuFrage9ja() {
    //wirkstoffe auf pflanzenbasis
    pflanzenheilkunde += 30;
    schulmedizin -= 10;

    document.getElementById("Frage8").style.display = "none";
    document.getElementById("Frage9").style.display = "unset";
}

function zuFrage9nein() {

    document.getElementById("Frage8").style.display = "none";
    document.getElementById("Frage9").style.display = "unset";
}

function zuFrage10ja() {
    //Gleichgewicht im Körper
    pflanzenheilkunde -= 30;
    schulmedizin += 10;

    document.getElementById("Frage9").style.display = "none";
    document.getElementById("Frage10").style.display = "unset";
}

function zuFrage10nein() {

    document.getElementById("Frage9").style.display = "none";
    document.getElementById("Frage10").style.display = "unset";
}

function zuFrage11ja() {
    pflanzenheilkunde += 10;

    document.getElementById("Frage10").style.display = "none";
    document.getElementById("Frage11").style.display = "unset";
}

function zuFrage11nein() {

    document.getElementById("Frage10").style.display = "none";
    document.getElementById("Frage11").style.display = "unset";
}

function zuFrage12ja() {

    document.getElementById("Frage11").style.display = "none";
    document.getElementById("Frage12").style.display = "unset";
}

function zuFrage12nein() {

    document.getElementById("Frage11").style.display = "none";
    document.getElementById("Frage13").style.display = "unset";
}

function zuFrage13ja() {
    //medikamenten zufrieden?

    document.getElementById("Frage12").style.display = "none";
    document.getElementById("Frage13").style.display = "unset";
}

function zuFrage13nein() {
    schulmedizin -= 40;
    tcm += 20;
    naturheilkunde += 20;
    ajuveda += 10;

    document.getElementById("Frage12").style.display = "none";
    document.getElementById("Frage13").style.display = "unset";
}

function zuFrage14ja() {
    ajuveda += 10;
    tcm += 10;

    document.getElementById("Frage13").style.display = "none";
    document.getElementById("Frage14").style.display = "unset";
}

function zuFrage14nein() {

    document.getElementById("Frage13").style.display = "none";
    document.getElementById("Frage14").style.display = "unset";
}

function zuFrage15ja() {
    ajuveda += 20;

    document.getElementById("Frage14").style.display = "none";
    document.getElementById("Frage15").style.display = "unset";
}

function zuFrage15nein() {


    document.getElementById("Frage14").style.display = "none";
    document.getElementById("Frage15").style.display = "unset";
}



/*
* Ergebnis
*/
function auswertung() {
    
    tcm +=  document.getElementById("tcm").value * 10;
    naturheilkunde += document.getElementById("naturheilkunde").value * 10;
    pflanzenheilkunde += document.getElementById("pflanzenheilkunde").value * 10;
    ajuveda += document.getElementById("ajuveda").value * 10;
    manuelleTherapie += document.getElementById("manuelleTherapie").value * 10;
    
    console.log(document.getElementById("tcm").value*10);
    console.log(document.getElementById("naturheilkunde").value*10);
    console.log(document.getElementById("pflanzenheilkunde").value*10);
    console.log(document.getElementById("ajuveda").value*10);
    console.log(document.getElementById("manuelleTherapie").value*10);

    ergebnis();

    document.getElementById("Frage15").style.display = "none";
    document.getElementById("ergebnis").style.display = "unset";

}

function ergebnis() {
    document.getElementById("ergebnissatz").innerHTML = "Selbstest beendet";

    if (schulmedizin >= 40) {
        document.getElementById("ergebnissatz").innerHTML += "Wir finden in der Schulmedizin eine Behandlung für Sie";
    }

    if (manuelleTherapie >= 40) {
        document.getElementById("ergebnissatz").innerHTML += "Manuelle Therapie";
    }

    if (naturheilkunde >= 40) {
        document.getElementById("ergebnissatz").innerHTML += "Naturheilkunde";
    }

    if (pflanzenheilkunde >= 40) {
        document.getElementById("ergebnissatz").innerHTML += "Pflanzenheilkunde";
    }

    if (tcm >= 40) {
        document.getElementById("ergebnissatz").innerHTML += "TCM";
    }

    if (ajuveda >= 30) {
        document.getElementById("ergebnissatz").innerHTML += "Ajuveda";
    }
}