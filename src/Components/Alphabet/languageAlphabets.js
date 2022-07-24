export function chooseAlphabet (languageCode){
    return alphabets[languageCode];
}
let alphabets = {};
let nko = {
    name: "N'ko",
    id: "nko",
    alphabet: ["a", "b"]
}

alphabets.nko = nko;
