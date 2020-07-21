(function() {

    var ActHora = function () {
    var fecha = new Date(),
        hora = fecha.getHours(),
        ampm,
        min = fecha.getMinutes(),
        seg = fecha.getSeconds(),
        diaSem = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

        var pDiaSem = document.getElementById('diasemana'),
            pDia    = document.getElementById('dia'),
            pMes    = document.getElementById('mes'),
            pYear   = document.getElementById('year');

        var pHoras = document.getElementById('horas'),
            pMin   = document.getElementById('minutos'),
            pAmPm  = document.getElementById('ampm'),
            pSegun = document.getElementById('segundos');

    };

    ActHora();
   



}())