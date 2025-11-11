// konversi tanggal ex. 24-04-2015 to 24/04/2015 menggunakan moment

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const moment = require("moment");

function convertDateFormat(dateString) {
    const date = moment(dateString, "DD-MM-YYYY");

    return date.format("DD/MM/YYYY");
}

// Contoh penggunaan
// const inputDate = '24-04-2015';
// const outputDate = convertDateFormat(inputDate);
// console.log(`Converted date: ${outputDate}`); 

rl.question("Masukkan tanggal (DD-MM-YYYY): ", (inputDate) => {
    const outputDate = convertDateFormat(inputDate);
    console.log(`Tanggal yang dikonversi: ${outputDate}`);
    rl.close();
});