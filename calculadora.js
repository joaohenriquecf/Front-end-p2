
let x = 10
let y = 5
const soma = x + y
const sub = x - y
const mult = x * y
const div = x / y
let operador = '/'


console.log('O resultado da soma é: ' + soma)
console.log('O resultado da subtraçao é: ' + sub)
console.log('O resultado da divisao é: ' + mult)
console.log('O resultado da divisao é: ' + div)

if (y == 0) {
    console.log('Erro!!!')
} else { 
    switch(operador){
        case '+':
            result = x + y
            break
        case "-":
            result = x - y
            break
        case "*":
            result = x * y
            break
        case "/":
            result = x / y
        default:
            result = 'operador invalido'
    }
}