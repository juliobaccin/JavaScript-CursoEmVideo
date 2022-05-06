function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        img.style.position = 'relative'
        img.style.width = '305px'
        img.style.height = '360px'
        img.style.left = '19%'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        img.style.position = 'relative'
        img.style.width = '568px'
        img.style.height = '300px'
        img.style.left = '-8%'
    } else {
        img.src = 'imagens/noite.png'
        img.style.position = 'relative'
        img.style.width = '568px'
        img.style.height = '300px'
        img.style.left = '-8%'
    }
}