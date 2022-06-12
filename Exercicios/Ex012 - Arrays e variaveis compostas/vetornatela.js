let valores = [4, 5, 6, 7, 8]
valores.sort()


for (let pos = 1; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


for (let pos in valores) {
    console.log(`À posição ${pos} tem o valor ${valores[pos]}`)
}