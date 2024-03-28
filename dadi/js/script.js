let pcNumb = Math.floor(Math.random() * 6) + 1;
console.log(pcNumb, "pc");

let userNumb = Math.floor(Math.random() * 6) + 1;
console.log(userNumb, "user");
let results
if (pcNumb > userNumb) {
    results = "hai perso";
} else if (pcNumb === userNumb) {
    results = "Pari, ritenta!"
} else  {
    results = "hai vinto!"
}

console.log(results);