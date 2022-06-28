
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

// function zuFrage3() {
//     let Kopf = document.getElementById("Kopf").value;
//     let Brust = document.getElementById("Brust").value;
//     let Bauch = document.getElementById("Bauch").value;
//     let Ruecken = document.getElementById("Ruecken").value;
//     let obereExtremitaet = document.getElementById("obereExtremitaet").value;
//     schulmedizin = schulmedizin + (Kopf * 2) + (Brust * 3) + (Bauch * 2) + (Ruecken * 1) + (obereExtremitaet * 1);
//     document.getElementById("Frage2").style.display = "none";
//     document.getElementById("Frage3").style.display = "unset";
// }

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

function zuFrage5ja() {
    // if (document.querySelector("#Laehmung").checked) {

    //     schulmedizin = schulmedizin + 30;
    // }

    // if (document.querySelector("#Sprechstoerung").checked) {
    //     schulmedizin = schulmedizin + 10;
    // }
    // if (document.querySelector("#Erbrechen").checked) {
    //     schulmedizin = schulmedizin + 5;
    // }
    // if (document.querySelector("#Atemnot").checked) {
    //     schulmedizin = schulmedizin + 30;
    // }
    // if (document.querySelector("#kraempfe").checked) {
    //     schulmedizin = schulmedizin + 5;
    // }
    // if (document.querySelector("#bewusstsein").checked) {
    //     schulmedizin = schulmedizin + 10;
    // }
    // if (document.querySelector("#nichts").checked) {
    //     schulmedizin = schulmedizin + 0;
    // }
    // if (document.querySelector("#Laehmung").checked) {
    //     schulmedizin = schulmedizin + 30;
    // }

    //Möchte Naturheilkunde
    pflanzenheilkunde += 20;
    naturheilkunde += 30;
    schulmedizin -= 20;

    document.getElementById("Frage4").style.display = "none";
    document.getElementById("Frage5").style.display = "unset";
}

function zuFrage5nein() {
    //Keine Naturheilkunde
    pflanzenheilkunde -= 20;
    naturheilkunde -= 30;
    schulmedizin += 20;

    document.getElementById("Frage4").style.display = "none";
    document.getElementById("Frage5").style.display = "unset";
}

//akupunktur
function zuFrage6ja() {
    // let fieber = document.querySelector("#fieber").value;

    // if (fieber < 36.5) {
    //     schulmedizin = schulmedizin + 5;
    // } else if (36.5 < fieber && fieber < 37.5) {
    //     schulmedizin = schulmedizin;
    // } else if (37.5 < fieber && fieber < 39) {
    //     schulmedizin = schulmedizin + 5;
    // } else {
    //     schulmedizin = schulmedizin + 10;
    // }
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
    ergebnis();

    document.getElementById("Frage13").style.display = "none";
    document.getElementById("ergebnis").style.display = "unset";
}


/*
* Ergebnis
*/
function auswertungJa() {
    ajuveda += 20;
    ergebnis();

    document.getElementById("Frage13").style.display = "none";
    document.getElementById("Frage14").style.display = "none";
    document.getElementById("ergebnis").style.display = "unset";

}

function auswertungNein() {
    ergebnis();

    document.getElementById("Frage13").style.display = "none";
    document.getElementById("Frage14").style.display = "none";
    document.getElementById("ergebnis").style.display = "unset";
}

function ergebnis() {
    document.getElementById("ergebnissatz").innerHTML = "Selbstest fertig";
    
    // if (schulmedizin < 40) {
    //     document.getElementById("ergebnissatz").innerHTML = "Bitte melden Sie sich bei ihrem Hausarzt oder dem ärztlichen Notdienst";
    // }
    // else if (schulmedizin > 40 && schulmedizin < 80) {
    //     document.getElementById("ergebnissatz").innerHTML = "Sie sollten sich umgehend auf den Weg in unsere Notaufnahme machen";
    // }
    // else {
    //     document.getElementById("ergebnissatz").innerHTML = "Es besteht akute Lebensgefahr. Rufen sie umgehend die 112 an und lassen einen Krankenwagen kommen.";
    // }

    if (schulmedizin >= 20) {
        document.getElementById("ergebnissatz").innerHTML += "Wir finden in der Schulmedizin eine Behandlung für Sie";
    }

    if (manuelleTherapie >= 30) {
        document.getElementById("ergebnissatz").innerHTML += "Manuelle Therapie";
    }

    if (naturheilkunde >= 30) {
        document.getElementById("ergebnissatz").innerHTML += "Naturheilkunde";
    }

    if (pflanzenheilkunde >= 30) {
        document.getElementById("ergebnissatz").innerHTML += "Pflanzenheilkunde";
    }

    if (tcm >= 30) {
        document.getElementById("ergebnissatz").innerHTML += "TCM";
    }

    if (ajuveda >= 20) {
        document.getElementById("ergebnissatz").innerHTML += "Ajuveda";
    }
}