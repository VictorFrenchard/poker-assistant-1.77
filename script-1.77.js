
import { calc_preflop_pb0 } from "./probalities-1.77.js";
import { prepCheck } from "./probalities-1.77.js";
import { toCardCode } from "./probalities-1.77.js";
import { toCardSuit } from "./probalities-1.77.js";
import { relativeProb } from "./probalities-1.77.js";

const applyBtn = document.getElementById("applyBtn");
const selfcards = document.getElementById("selfcards");
const gameplayers = document.getElementById("players");
const alertMes = document.getElementById("alert-mes");
const prob1 = document.getElementById('ex_0');


applyBtn.addEventListener("click", function verifyBox() {

    let selfvalue = selfcards.value;
    let players = gameplayers.value;

    if (selfvalue == '') {
        alertMes.innerHTML = "Insira cartas e número de jogadores.";
    }
    

});

