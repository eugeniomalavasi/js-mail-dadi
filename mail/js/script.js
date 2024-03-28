const mailList = ["gino@gmail.com", "pino@gmail.com", "tino@gmail.com", "lino@gmail.com", "dino.@gmail.com"]; // creazione array

const sendBtn = document.getElementById("sendbtn");
sendBtn.addEventListener("click", function () {
    const userInput = document.getElementById("user_email"); // raccolta dati
    let userValue = userInput.value;
    console.log(userValue);

    let answer;
    for (let i = 0; i < mailList.length; i++)
        if (userValue === mailList[i]) {
            answer = "utente registrato";
            document.getElementById("answer_out").innerHTML = answer;      
            console.log(answer);
        } else {
            answer = "utente non registrato";
            document.getElementById("answer_out").innerHTML = answer;
        }
})

// for (let i = 0; i < mailList.length; i++)
// if (userInput === mailList[i]) {
//     alert("utente registrato");
// } else {
//     alert("utente non registrato")
// }

