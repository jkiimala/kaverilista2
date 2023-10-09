// Luodaan tyhjä taulukko (array), johon tallennetaan käyttäjän syötteet
const kaverit = [];

// Haetaan HTML-elementit id:n perusteella
const nimiKentta = document.getElementById("kaveri-nimi");
const lisaaNappi = document.getElementById("lisaa-nappi");
const poistaNappi = document.getElementById("poista-nappi");
const jarjestaNappi = document.getElementById("jarjesta-nappi");
const kaveriLista = document.getElementById("kaverilista");

// Lisätään "click" button-elementteihin
lisaaNappi.addEventListener("click", lisaaKaveri);
poistaNappi.addEventListener("click", poistaKaveri);
jarjestaNappi.addEventListener("click", jarjestaKaverit);

// Lisää uuden kaverin taulukkoon ja päivittää listan
function lisaaKaveri() {
    const nimi = nimiKentta.value.trim();
    if (nimi !== "") {
        kaverit.push(nimi);
        paivitaKaveriLista();
        nimiKentta.value = "";
    }
}

// Poistaa kaverin
function poistaKaveri() {
    const nimi = nimiKentta.value.trim();
    const i = kaverit.indexOf(nimi);
    if (i !== -1) {
        kaverit.splice(i, 1);
        paivitaKaveriLista();
        nimiKentta.value = "";
    }
}

// Kaverit aakkosiin
function jarjestaKaverit() {
    kaverit.sort();
    paivitaKaveriLista();
}

function paivitaKaveriLista() {
    
    // Luo HTML-listan kaverien nimistä
    const kaveriHTML = kaverit.map(function (nimi) {
        return `<li> ${nimi} </li>`;
    }).join(" ");
    kaveriLista.innerHTML = kaveriHTML;
}

