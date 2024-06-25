var tempoTotal = 365 * 24 * 60 * 60;

function formatarTempo(segundos) {
  var dias = Math.floor(segundos / (24 * 60 * 60));
  segundos -= dias * 24 * 60 * 60;
  var horas = Math.floor(segundos / (60 * 60));
  segundos -= horas * 60 * 60;
  var minutos = Math.floor(segundos / 60);
  segundos -= minutos * 60;

  return dias + "d " + ("0" + horas).slice(-2) + "h " + ("0" + minutos).slice(-2) + "m " + ("0" + segundos).slice(-2) + "s";
}

function atualizarTimer() {
    const tempo = document.querySelector('.header__timer--tempo--tag')
    if (tempoTotal <= 0) {
        tempo.innerHTML = "Tempo esgotado!";
        clearInterval(intervalo);
    } else {
        tempo.innerHTML = formatarTempo(tempoTotal);
        tempoTotal--;
    }
}

var intervalo = setInterval(atualizarTimer, 1000);

atualizarTimer();