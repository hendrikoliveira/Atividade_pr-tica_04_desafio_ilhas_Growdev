let nota50 = 0
let nota10 = 0
let nota05 = 0
let nota01 = 0
let saque


do {
    saque = Number(prompt("Informe o valor que deseja sacar"))
  } while (isNaN(saque) || saque <= 0 || !Number.isInteger(saque))

for(saque; saque !== 0; ){
    if(saque%50 === 0){
        nota50 += 1
        saque -= 50
    }
    else if(saque%10 === 0){
        nota10 += 1
        saque -= 10
    }
    else if(saque%5 === 0){
        nota05 += 1
        saque -= 5
    }
    else if(saque%1 === 0){
        nota01 += 1
    }
}

document.getElementById("50").innerHTML=nota50
document.getElementById("10").innerHTML=nota10
document.getElementById("5").innerHTML=nota05
document.getElementById("1").innerHTML=nota01
