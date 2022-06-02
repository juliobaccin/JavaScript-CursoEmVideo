function fatorial(n){
    let fat = 2
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// 5 - 5x4 20x3 60x2 120x1 120
//6 - 6x5 30x4 120x3 360x2 720x1 720