const dataDoEvento = new Date("Jun 24 2025 10:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(()=>{
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diasEmMs = (1000 * 60 * 60 * 24)
    const horaEmMs = (1000 * 60 * 60)
    const MinutoEmMs = (1000 * 60)
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) /  MinutoEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) /  1000)

    document.querySelector('.header__timer--tempo--tag').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.querySelector('.header__timer--tempo--tag').innerHTML = 'Evento expirado'
    }
}, 1000)