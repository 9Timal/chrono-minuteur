document.addEventListener('DOMContentLoaded', function() {
    const Sp = document.getElementsByTagName('span');
    const btnStart = document.getElementById('start');
    const btnStop = document.getElementById('stop');
    const btnReset = document.getElementById('reset');
    const Minuteur = document.querySelector('.tim');
    let t;
    let ms = 0;
    let s = 0;
    let mn = 0;
    let h = 0;

    function updateChrono() {
        ms -= 1;
        if (ms < 0) {
            ms = 9;
            s -= 1;
        }
        if (s < 0) {
            s = 59;
            mn -= 1;
        }
        if (mn < 0) {
            mn = 59;
            h -= 1;
        }

        // Insertion des valeurs dans les spans
        Sp[0].innerHTML = h + "h";
        Sp[1].innerHTML = mn + "min";
        Sp[2].innerHTML = s + "s";
        Sp[3].innerHTML = ms + "ms";
    }

    function start() {
        t = setInterval(updateChrono, 100);
    }
    btnStart.addEventListener('click', start);

    function stop() {
        clearInterval(t);
    }
    btnStop.addEventListener('click', stop);

    function reset() {
        clearInterval(t);
        ms = 0;
        s = 0;
        mn = 0;
        h = 0;
        Sp[0].innerHTML = "0h";
        Sp[1].innerHTML = "0min";
        Sp[2].innerHTML = "0s";
        Sp[3].innerHTML = "0ms";
    }
    btnReset.addEventListener('click', reset);

    function updateMinuteur() {
        h = parseInt(prompt("Entrez les heures :", h)) || 0;
        mn = parseInt(prompt("Entrez les minutes :", mn)) || 0;
        s = parseInt(prompt("Entrez les secondes :", s)) || 0;
        ms = parseInt(prompt("Entrez les millisecondes :", ms)) || 0;

        // Insertion des valeurs dans les spans
        Sp[0].innerHTML = h + "h";
        Sp[1].innerHTML = mn + "min";
        Sp[2].innerHTML = s + "s";
        Sp[3].innerHTML = ms + "ms";
    }

    Minuteur.addEventListener('click', updateMinuteur);
});
