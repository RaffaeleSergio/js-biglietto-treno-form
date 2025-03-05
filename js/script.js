const trenoForm = document.getElementById("treno-form");
const nomeInput = document.getElementById("name");
const kmInput = document.getElementById("km");

const minorenneSel = "Minorenne";
const overSel = "Over";
const maggiorenneSel = "Maggiorenne";


const prezzoStr = 0.21;
const prezzoNum = parseInt(prezzoStr);
const kmNum = parseInt(kmInput);



const nomeCard = document.querySelector(".card .card-title");
const etaCard = document.querySelector(".card .card-text");
const prezzoCard = document.getElementById("prezzo");
const cardElem = document.querySelector(".card");




trenoForm.addEventListener("submit", gestisciForm);
let etaInput = document.getElementById("eta").value;


function gestisciForm(event) {
    event.preventDefault();
    etaInput = document.getElementById("eta").value;
    let biglietto;


    if (etaInput === minorenneSel) {
        biglietto = prezzoStr * kmInput.value - ((prezzoStr * kmInput.value) * 20) / 100


    } else if (etaInput === overSel) {
        biglietto = prezzoStr * kmInput.value - ((prezzoStr * kmInput.value) * 40) / 100

    } else {
        biglietto = prezzoStr * kmInput.value


    }

    const nome = nomeInput.value;
    const eta = etaInput;
    const prezzo = biglietto.toFixed(2);


    nomeCard.innerText = nome;
    etaCard.innerText = eta;
    prezzoCard.innerText = prezzo + " €";
    cardElem.classList.remove("d-none")




}