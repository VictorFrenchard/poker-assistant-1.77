import { codePositionX } from "./support-0.js";
import { codePositionY } from "./support-0.js";

const showcard1 = document.getElementById("ad_card_0");
const showcard2 = document.getElementById("ad_card_1");

const image_full_width = 1348;
const image_full_height = 533;

const selection_width = 75;
const selection_height = 106;

const sect_height = 126;
const sect_width = 90;

const x_align = (selection_width * 100) / ((sect_width * 100) / image_full_width);
const y_align = (selection_height * 100) / ((sect_height * 100) / image_full_height);

const space_x = (x_align - (selection_width * 14)) / 13;
const space_y = (y_align - (selection_height * 4)) / 3;


function backgroundSizePosition(xy) {
    
    var x_def = Math.ceil(x_align);
    var y_def = Math.ceil(y_align);
 
    showcard1.style.backgroundSize = `${x_def}px ${y_def}px`;
    showcard2.style.backgroundSize = `${x_def}px ${y_def}px`;
    showcard1.style.backgroundPosition = `${xy}`;
    showcard2.style.backgroundPosition = `${xy}`;

}

function toCode(x, y) {
    let testX = Math.floor((codePositionX(`${x}`, selection_width, space_x)) - (x * 0.1));
    let testY = Math.floor((codePositionY(`${y}`, selection_height, space_y)) - (y * 0.1));
    let testXY = `${testX}px ${testY}px`;

    return testXY; 
}

var posxy = toCode(12, 0);

backgroundSizePosition(posxy);

