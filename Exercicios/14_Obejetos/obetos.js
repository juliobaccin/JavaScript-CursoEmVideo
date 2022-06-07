let amigo = {
    nome: 'julio',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
        if(amigo.peso > 85.4){
            console.log('Seu amigo Engordou!')
        }else{
            console.log('Seu amigo Emagreceu!')
        }
    }
}
amigo.engordar(-10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

