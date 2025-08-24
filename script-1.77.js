
import { calc_preflop_pb0 } from "./probalities-1.77.js";
import { toCardCode } from "./probalities-1.77.js";
import { relativeProb } from "./probalities-1.77.js";


const applyBtn = document.getElementById("applyBtn");
const selfcards = document.getElementById("selfcards");
const players = document.getElementById("players");
const alertMes = document.getElementById("alert-mes");
const prob1 = document.getElementById('ex_0');

applyBtn.addEventListener("click", () => {
    if (selfcards.value == '') {
        alertMes.innerHTML = "Insira cartas e número de jogadores.";
    }
    if (selfcards.value == 'ah ad') {
        prob1.innerHTML = '23,54%';
    }
})

