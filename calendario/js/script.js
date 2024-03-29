const laborDays = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"]
console.log(laborDays);
// const holyDays = ["sabato", "domenica"]
// console.log(holyDays);


for (let i = 0; i < 31; i++) {
    if (i < laborDays.length) {
        console.log(i, laborDays[i],"feriali");
    } else if (i >= (laborDays.length)) {
        i = ;
        console.log(i, laborDays[i], "festivi");
    }  
}








