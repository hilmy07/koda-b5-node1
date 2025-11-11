// konversi tanggal ex. 24-04-2015 to 24/04/2015 menggunakan moment

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const moment = require("moment");

// Contoh penggunaan
// const inputDate = '24-04-2015';
// const outputDate = convertDateFormat(inputDate);
// console.log(`Converted date: ${outputDate}`); 

function kesatu() {
    function convertDateFormat(dateString) {
        const date = moment(dateString, "DD-MM-YYYY");

        return date.format("DD/MM/YYYY");
    }

    rl.question("Masukkan tanggal (DD-MM-YYYY): ", (inputDate) => {
        const outputDate = convertDateFormat(inputDate);
        console.log(`Tanggal yang dikonversi: ${outputDate}`);
        rl.close();
    });
}

function kedua() {
    function formatDate(dateString) {
        return dateString.replace(/-/g, "/");
    }

    rl.question("Masukkan tanggal (DD-MM-YYYY): ", (inputDate) => {
        // regex validasi format
        const datePattern = /^\d{2}-\d{2}-\d{4}$/;

        if (!datePattern.test(inputDate)) {
            console.log("not valid format!");
            rl.close();
            return;
        }

        const outputDate = formatDate(inputDate);
        console.log(`Tanggal yang dikonversi: ${outputDate}`);
        rl.close();
    });
}

console.log("=== pilih konverter Date ===");
console.log("1. Menggunakan moment");
console.log("2. Tanpa menggunakan moment");

rl.question("Masukkan pilihan: ", (pilihan) => {

    if(pilihan==1) {
        kesatu();
        // rl.close();
    } 
    
    if (pilihan==2) {
        kedua();
        // rl.close();
    }
});
