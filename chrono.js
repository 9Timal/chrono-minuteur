document.addEventListener('DOMContentLoaded', function() {
    const Sp = document.getElementsByTagName('span');
    const btnStart = document.getElementById('start');
    const btnStop = document.getElementById('stop');
    const btnReset = document.getElementById('reset');
    let t;
    let ms = 0;
    let s = 0;
    let mn = 0;
    let h = 0;

    function updateChrono() {
        ms += 1;
        if (ms == 10) {
            ms = 0;
            s += 1;
        }
        if (s == 60) {
            s = 0;
            mn += 1;
        }
        if (mn == 60) {
            mn = 0;
            h += 1;
        }

        // Insertion des valeurs dans les spans
        Sp[0].innerHTML = h + "h";
        Sp[1].innerHTML = mn + "min";
        Sp[2].innerHTML = s + "s";
        Sp[3].innerHTML = ms + "ms";
    }

    // Mettre en place le bouton start
    function start() {
        t = setInterval(updateChrono, 100);
    }
    btnStart.addEventListener('click', start);

    // Ajout des fonctions pour arrêter et réinitialiser
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
});