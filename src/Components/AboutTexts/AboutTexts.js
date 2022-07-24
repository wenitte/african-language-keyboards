function getAboutText(script){
    return aboutTexts[script];
}
let aboutTexts = {
    nko: "N'Ko (N'Ko: ߒߞߏ) is a script devised by Solomana Kante in 1949, as a modern writing system for the Mandé languages of West Africa. The term N'Ko, which means I say in all Mandé languages, is also used for the Mandé literary standard written in N'Ko script. The script is written in a right-to-left direction  and the letters which are connected at the base.It is obligatory to mark both tone and vowels. N'Ko tones are marked as diacritics.Kante created N'Ko to provide a better way to write Mandé languages, which had for centuries been written in predominately in Ajami script, which was not perfectly suited to the tones unique to Mandé and common to many West African languages. Kante devised N'Ko as he was in Bingerville, Côte d'Ivoire and later brought to Kante's natal region of Kankan, Guinea. N'Ko began to be used in many educational books when the script is believed to have been finalized on April 14, 1949 (now N'Ko Alphabet Day); Kante had transcribed from religious to scientific and philosophical literature, even a dictionary.These materials were given as gifts into other Mandé-speaking parts of West Africa. The script received its first specially made typewriter from Eastern Europe back when Guinea had ties with the Soviet Union in the 1950s. The introduction of the script led to a movement promoting literacy in the N'Ko script among Mandé speakers in both Anglophone and Francophone West Africa. N'Ko literacy was instrumental in shaping the Maninka cultural identity in Guinea, and it has also strengthened the Mandé identity in other parts of West Africa. N’ko script has been used to write many non Mande West African languages as well including Mooré , Twi, and Yoruba as well as Bantu languages like Swahili and Lingala."
}

function getLanguageNameFromCode (languageCode) {
    return languages[languageCode];
}
let languages = {
    nko: "N'Ko"
}
export default getAboutText;