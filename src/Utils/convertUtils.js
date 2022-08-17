export function chooseCorrespondence(a, b){
    if(a=="latin"){
        if(b=="Nko"){
            return latinNkoCorrespondence;
        }
        if(b=="Adlam"){
            return latinAdlamCorrespondence;
        }

    }

}
export function choosePreProcessing(a, b, textToConvert){
    console.log(a, b, textToConvert);
    if(a=="latin"){
        if(b=="Nko"){
            return LatinToNkoPreProcessing(textToConvert);
        }
        if(b=="Adlam"){
            return LatinToAdlamPreProcessing(textToConvert);
        }
        if(b=="Gʋlse"){
            return LatinToGʋlsePreProcessing(textToConvert);
        }

    }

}
export function LatinToNkoPreProcessing(latinString){
    //Replace all 'ck' with 'k'
    latinString = latinString.replace(/ck/g, "k");
    //If the string starts with c replace it with k
    if(latinString.startsWith("c")){
        latinString = latinString.replace(/c/g, "k");
    }
    //If the string contains a c that is not the first letter, replace it with s
    latinString = latinString.replace(/c(?![a-zA-Z])/g, "s");
    //Replace all 'x' with 'ks'
    latinString = latinString.replace(/x/g, "ks");
    return latinString;
    
}
export function LatinToAdlamPreProcessing(latinString){
    //Replace all 'ck' with 'k'
    latinString = latinString.replace(/ck/g, "k");
    //If the string starts with c replace it with k
    if(latinString.startsWith("c")){
        latinString = latinString.replace(/c/g, "k");
    }
    //If the string contains a c that is not the first letter, replace it with s
    latinString = latinString.replace(/c(?![a-zA-Z])/g, "s");
    //Replace all 'x' with 'ks'
    latinString = latinString.replace(/x/g, "ks");
    return latinString;
    
}
export function LatinToGʋlsePreProcessing(latinString){
    //Replace all 'ck' with 'k'
    latinString = latinString.replace(/ck/g, "k");
    //If the string starts with c replace it with k
    if(latinString.startsWith("c")){
        latinString = latinString.replace(/c/g, "k");
    }
    //If the string contains a c that is not the first letter, replace it with s
    latinString = latinString.replace(/c(?![a-zA-Z])/g, "s");
    //Replace all 'x' with 'ks'
    latinString = latinString.replace(/x/g, "ks");
    return latinString;
}

export let latinAdlamCorrespondence = {
    "a": "𞤢",
    "b": "𞤦",
    "c": "𞤷",
    "d": "𞤣",
    "e": "𞤫",
    "f": "𞤬",
    "g": "𞤺",
    "h": "𞤸",
    "i": "𞤭",
    "j": "𞤶",
    "k": "𞤳",
    "l": "𞤤",
    "m": "𞤥",
    "n": "𞤲",
    "o": "𞤮",
    "p": "𞤨",
    "q": "",
    "r": "𞤪",
    "s": "𞤧",
    "t": "",
    "u": "𞤵",
    "v": "𞤾",
    "w": "𞤱",
    "x": "",
    "y": "𞤴",
    "z": "",
    "ɓ":"𞤩",
    "d":"𞤯",
    "ƴ":"𞤰",
    "ɠ ":"𞤹",
    "ñ": "𞤻",
    "t":"𞤼",
    "ŋ":"𞤽",
    "A":"𞤀",
    "B":"𞤄",
    "C":"𞤕",
    "D":"𞤁",
    "E":"𞤉",
    "F":"𞤊",
    "G":"𞤘",
    "H": "𞤖",
    "I": "𞤋",
    "J": "𞤔",
    "K": "𞤑",
    "L": "𞤂",
    "M": "𞤃",
    "N": "𞤐",
    "O": "𞤌",
    "P": "𞤆",
    "Q": "𞤗",
    "R": "𞤈",
    "S": "𞤅",
    "T": "𞤚",
    "U": "𞤓",
    "V": "𞤜",
    "W": "𞤏",
    "X": "𞤝",
    "Y": "𞤒",
    "Z": "𞤟",
    "0": "𞥐",
    "1": "𞥑",
    "2": "𞥒",
    "3": "𞥓",
    "4": "𞥔",
    "5": "𞥕",
    "6": "𞥖",
    "7": "𞥗",
    "8": "𞥘",
    "9": "𞥙",


}
export let latinNkoCorrespondence = {
    "a": "ߊ",
    "b": "ߓ",
    "c": "ߗ",
    "d": "ߘ",
    "e": "ߍ",
    "f": "ߝ",
    "g": "ߜ",
    "h": "ߤ",
    "i": "ߌ",
    "j": "ߖ",
    "k": "ߞ",
    "l": "ߟ",
    "m": "ߡ",
    "n": "ߒ",
    "o": "ọ",
    "p": "ߔ",
    "q": "𞤹",
    "r": "ߙ",
    "s": "ߛ",
    "t": "ߕ",
    "u": "ߎ",
    "v": "ߥ",
    "w": "ߥ",
    "x": "ߞߛ",
    "y": "ߌ",
    "z": "ߛ",
    "gb": "ߜ",
    "rr": "ߚ",
    "!": "߹",
    "?": "¿",
    ",": "߸",
    ".": "߷",
}
