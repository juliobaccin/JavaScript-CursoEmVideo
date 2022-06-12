var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Agora é de Manhã')
} else if (hora > 12 && hora < 19) {
    console.log('Agora é de Tarde')
} else {
    console.log('Agora é de Noite')
}