
export function codePositionX(pos, width, spaceX) {
    let positionX = 0 - (pos * (width + spaceX));
    return positionX;
}

export function codePositionY(pos, height, spaceY) {
    let positionY = 0 - (pos * (height + spaceY));
    return positionY;
}




