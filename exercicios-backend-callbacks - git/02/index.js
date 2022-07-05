const arrayNumeros = [1, 5, 2]
const tabuada = (arrayNumeros, callback) => {

    callback(arrayNumeros)
}

tabuada(arrayNumeros, (array) => {
    for (let item of array) {
        for (let i = 0; i <= 10; i++) {
            const resultado = item * i

            console.log(`${item} x ${i} = ${resultado}`)
        }
        console.log("-----------")
    }

})


