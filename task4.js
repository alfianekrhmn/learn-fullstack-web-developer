const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Who are you? ", function(name){
    console.log(`halo, ${name}! selamat belajar javascript`)
    r1.close()
})