const {mySum,kurang,kali,bagi} = require('./calculate')
const readline = require('readline').

createInterface({
    input:process.stdin,
    output: process.stdout

})

let num1 =null
let num2 = null



readline.question('Angka pertama? ', input1 => {
    num1 = parseInt(input1)

    readline.question('Angka kedua? ', input2 => {
        num2 = parseInt(input2)

        readline.question('Pilih + , - , * , / ? ', input3 =>
        {
            if (input3 == '+') {
                console.log(mySum(num1,num2))
            }else if(input3 == '-'){
                console.log(kurang(num1,num2))
            }else if(input3 == '*'){
                console.log(kali(num1,num2))
            }else if(input3 == '/'){
                console.log(bagi(num1,num2))
            }else{
                console.log('perintah salah')
            }
            readline.close()
        })
    })
})

