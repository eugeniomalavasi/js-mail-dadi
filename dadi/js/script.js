const btn = document.querySelector("body button");
btn.addEventListener("click", function () {
// CREAZIONE NUMERI CASUALI
let pcNumb = Math.floor(Math.random() * 6) + 1;
console.log(pcNumb, "pc");
let userNumb = Math.floor(Math.random() * 6) + 1;
console.log(userNumb, "user");
let results

// LOGICA
if (pcNumb > userNumb) {
    results = "hai perso";
} else if (pcNumb === userNumb) {
    results = "Pari, ritenta!"
} else  {
    results = "hai vinto!"
}
console.log(results);
    // OUTPUT
    document.getElementById("user_number").innerHTML = `Il tuo numero è: ${userNumb}`;
    document.getElementById("pc_number").innerHTML = `Il numero del pc è: ${pcNumb}`;
    document.getElementById("who_won").innerHTML = results;
})