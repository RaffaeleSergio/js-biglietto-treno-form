const trenoForm = document.getElementById("treno-form");
const nomeInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const minorenneSel = document.getElementById("eta").value = "Minorenne";
const overSel = document.getElementById("eta").value = "Over";
const maggiorenneSel = document.getElementById("eta").value = "Maggiorenne";


const prezzoStr = 0.21;
const prezzoNum = parseInt(prezzoStr);
const kmNum = parseInt(kmInput);



const nomeCard = document.querySelector(".card .card-title");
const etaCard = document.querySelector(".card .card-text");
const prezzoCard = document.getElementById("prezzo");




trenoForm.addEventListener("submit",gestisciForm);



function gestisciForm(event) {
    event.preventDefault();
   let biglietto;
if (etaInput === minorenneSel) {
    biglietto = prezzoStr * kmInput.value - ((prezzoStr * kmInput.value) * 20) / 100

} else if (etaInput === overSel) {
    biglietto = prezzoStr * kmInput.value - ((prezzoStr * kmInput.value) * 40) / 100

} else {
     biglietto = prezzoStr * kmInput.value
     console.log(biglietto);
    
}
   
    const nome = nomeInput.value;
    const eta = etaInput.value;
    const prezzo = biglietto;
    

    nomeCard.innerText = nome;
    etaCard.innerText = eta;
    prezzoCard.innerText = prezzo;

    

}