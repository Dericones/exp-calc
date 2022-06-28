alert('Vamos calcular!')

let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
const par = ((sum % 2 ) == 1 )
const equals = numberOne == numberTwo


alert ('A soma dos dois números é ' + sum )
alert ('A subtração dos dois números é ' + sub )
alert ('A multiplicação dos dois números é ' + multi )
alert ('A divisão dos dois números é ' + div )
alert ('O resto da divisão dos dois números é ' + restDiv )




if (par) {
  alert ('A soma dos dois números é impar: ' + sum)
} else {
  alert ('A soma dos dois números é par: ' + sum)
}

if (equals) {
  alert ('Os números inseridos são iguais!')
} else {
  alert ('Os números inseridos são diferentes!')
}
