const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan nama: ", (nama) => {
    if (nama === "") {
        console.log("Nama wajib diisi!");
        rl.close();
    } else {
        rl.question("Masukkan peran (Ksatria/Tabib/Penyihir): ", (peran) => {
            if (peran === "") {
                peran = "Bot"; 
            }

            if (peran === "Ksatria") {
                console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
            } else if (peran === "Tabib") {
                console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
            } else if (peran === "Penyihir") {
                console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            } else {
                console.log(`Halo ${nama}, peran yang kamu pilih tidak ada, kamu jadi bot aja cok!!!`);
            }

            rl.close();
        });
    }
});