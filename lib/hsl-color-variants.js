export function getLightVariant(hue, saturation, lightness) {
    let newLightness = 0
    if (lightness <= 80) 
    { 
        newLightness = lightness + 20
        return `HSL(${hue}, ${saturation}%, ${newLightness}%)`

    }
    else  { 
        return (`HSL(${hue}, ${saturation}%, ${lightness}%)`)
    }
}

export function getDarkVariant(hue, saturation, lightness) {
    let newLightness = 0
    if (lightness >= 20) {
        newLightness = lightness-20
        return (`HSL(${hue}, ${saturation}%, ${newLightness}%)`)
    }
    else {
        return (`HSL(${hue}, ${saturation}%, ${lightness}%)`)
    }
}