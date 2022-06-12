var idade = 18
console.log('Sua idade é de ' + idade + ' anos')
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 67) {
    console.log('Voto Opicional')
} else {
    console.log('Voto Obrigatorio')
}