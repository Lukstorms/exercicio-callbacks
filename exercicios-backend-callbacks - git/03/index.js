const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

let index = 0
let rodada = 1000 * 10



const contador = () => {
    if (index >= jogadores.length) {
        clearInterval(id)
        console.log("A rodada terminou!")
        return
    }

    console.log(jogadores[index])
    index++
}




const id = setInterval(contador, rodada / jogadores.length)