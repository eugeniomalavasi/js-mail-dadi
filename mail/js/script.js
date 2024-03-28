const mailList = ["Gino", "Pino", "Tino", "Lino", "Dino"]; // creazione array
let userInput = prompt("inserisci nome contatto"); // raccolta dati
console.log(userInput);

for (i = 0; i < mailList.length; i++)
if (userInput === mailList[i]) {
    alert("bella zio");
} else {
    alert("nome non presente")
}