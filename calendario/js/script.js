const laborDays = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"]
console.log(laborDays);
// const holyDays = ["sabato", "domenica"]
// console.log(holyDays);


for (let i = 0; i < 7; i++) {
    if (i < 5) {
        console.log(laborDays[i],"feriali");
    } else if (i < laborDays.length && i >= 5) {
        console.log(laborDays[i], "festivi");
    }
}








