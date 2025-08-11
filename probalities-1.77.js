

export function toCardCode(value0, value1) {
    const cardValues = {
    '2': 2, '3': 3, '4': 4, '5': 5,
    '6': 6, '7': 7, '8': 8, '9': 9,
    '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };

    const v1 = cardValues[value0.toUpperCase()];
    const v2 = cardValues[value1.toUpperCase()];

    return {
        v1, v2
    }

}


export function calc_preflop_pb0(card0, card1, players) {
    const totalCombin = 1225;
    let total_cases = 0;
    let type = "";

    if (card0 == card1) {
        type = "pair";
        const pair_best = 14 - card0;
        const pair_difr = pair_best * 6;
        const pair_same = 1;
        total_cases = pair_difr + pair_same
    }
    else {
        type = "highcard";

        const better = Math.max(card0, card1);
        const worse = Math.min(card0, card1);

        const upper = 14 - worse;
        const upper_combin = upper * 3 * 3;

        const difr_pairs = 13 * 6;
        const card_pairs = 6;

        total_cases = upper_combin + difr_pairs - card_pairs;
    }

    const probBruta = total_cases / totalCombin;
    const probComplementar = 1 - Math.pow(1 - probBruta, players);
    const porcentagem = (probComplementar * 100).toFixed(2);

    return {
        type,
        total_cases,
        probability_broot: porcentagem,
        probability: `${porcentagem}%`
    };

}

export function relativeProb(prob) {
    const relative_prob = (prob * 2);
    const result = `${relative_prob}%`;
    return result
    
}