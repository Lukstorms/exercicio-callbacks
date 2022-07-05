const tabuada = (valor, callback) => {

    callback(valor)
}

tabuada(5, (valor) => {


    for (let i = 0; i <= 10; i++) {
        const resultado = valor * i

        console.log(`${valor} x ${i} = ${resultado}`)
    }

})