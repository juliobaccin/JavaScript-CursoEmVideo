var hora = 20
console.log('Agora são extamente ' + hora + ' horas')
if (hora < 12) {
    console.log('Agora é Dia')
} else if (hora > 12 && hora < 19) {
    console.log('Agora é de Tarde')
} else {
    console.log('Agora é de Noite')
}