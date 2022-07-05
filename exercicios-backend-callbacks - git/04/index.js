const { set } = require('date-fns');
const format = require('date-fns/format')


const horarioAtual = format(new Date(), `HH:mm:ss`)
const alarme = "20:20:40";
let tempoAlarmandoEmSegundos = 10;


const despertador = (horarioAtual, alarme, tempoAlarmandoEmSegundos) => {
    const contador = () => {
        const horarioAtual = format(new Date(), `HH:mm:ss`)
        console.log(horarioAtual)
    }
    if (alarme === horarioAtual) {
        const acorda = () => {
            console.log("Beep Beep!");
            tempoAlarmandoEmSegundos -= 1;
            if (tempoAlarmandoEmSegundos <= 0) {
                clearInterval(levantaMenino);
            }
            const levantaMenino = setInterval(acorda, 1000);
            clearInterval(id)
        }
    }
    const id = setInterval(contador, 1000)





}

despertador(horarioAtual, alarme, tempoAlarmandoEmSegundos)







