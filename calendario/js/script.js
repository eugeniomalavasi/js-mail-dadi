const laborDays = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"]
console.log(laborDays);
const holyDays = ["sabato", "domenica"]
console.log(holyDays);


for (let i = 0; i < 6; i++) {
    if (i < laborDays.length) {
        console.log(laborDays[i],"feriali");
    } else if (i > laborDays.length) {
        i = 0;
        console.log(holyDays[i], "festivi");
    }
}








