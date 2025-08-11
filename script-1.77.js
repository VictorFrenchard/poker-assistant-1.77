
import { calc_preflop_pb0 } from "./probalities-1.77.js";
import { toCardCode } from "./probalities-1.77.js";
import { relativeProb } from "./probalities-1.77.js";


const applyBtn = document.querySelector("#applyBtn");
const selfcards = document.getElementById("selfcards");
const players = document.getElementById("players");

applyBtn.addEventListener("click", () => {

    const test = toCardCode('a', 'a');
    const results = calc_preflop_pb0(test.v1, test.v2, 2)
    const relative = relativeProb(results.probability_broot);
    console.log(results)
    console.log(relative)

})

