function chooseKeyboard(lang){
    switch(lang){
        case "nko":
            return nkoKeyboard;
        case 'Twi':
        return twiKeyboard;
        case 'Yoruba':
        return yorubaKeyboard;
        case 'Amharic':
        return amharicKeyboard;
        case 'Arabic':
        return arabicKeyboard;
        case 'Igbo':
        return igboKeyboard;
        case 'Hausa':
        return hausaKeyboard;
        case 'Mooré':
        return mooréKeyboard;
        case 'Kassem':
        return kassemKeyboard;

        default:
            return generalKeyboard;

    }
}
        

let twiKeyboard = {
    default: [
      "ɛ ɔ",
      "{shift} {shift}",
    ],
    shift: [
      "Ɛ Ɔ",
      "{shift} {shift}",
    ],
  };
  let yorubaKeyboard = {
    default: [
        "ˊ 1 2 3 4 5 6 7 8 9 0 ɗ ƙ {bksp}",
        "{tab} q w e r t y u i o p ụ ị",
        "{lock} a s d f g h j k l ọ ẹ ǝ {enter}",
        "{shift} z y x c v b n m , . ṣ {shift}",
        ".com @ {space}",
      ],
      shift: [
        'ˆ ! " / _ ₦ % = - | ( ) Ɗ Ƙ {bksp}',
        "{tab} Q W E R T Y U I O P Ụ Ị",
        "{lock} A S D F G H J K L Ọ Ẹ Ǝ {enter}",
        "{shift} Z Ɓ C V B N M ; : Ṣ {shift}",
        ".com @ {space}",
      ],
  };
  let igboKeyboard = {
    default: [
        "ˊ 1 2 3 4 5 6 7 8 9 0 ɗ ƙ {bksp}",
        "{tab} q w e r t y u i o p ụ ị",
        "{lock} a s d f g h j k l ọ ẹ ǝ {enter}",
        "{shift} z y x c v b n m , . ṣ {shift}",
        ".com @ {space}",
      ],
      shift: [
        'ˆ ! " / _ ₦ % = - | ( ) Ɗ Ƙ {bksp}',
        "{tab} Q W E R T Y U I O P Ụ Ị",
        "{lock} A S D F G H J K L Ọ Ẹ Ǝ {enter}",
        "{shift} Z Ɓ C V B N M ; : Ṣ {shift}",
        ".com @ {space}",
      ],
  };
  let hausaKeyboard = {
    default: [
        "ˊ 1 2 3 4 5 6 7 8 9 0 ɗ ƙ {bksp}",
        "{tab} q w e r t y u i o p ụ ị",
        "{lock} a s d f g h j k l ọ ẹ ǝ {enter}",
        "{shift} z y x c v b n m , . ṣ {shift}",
        ".com @ {space}",
      ],
      shift: [
        'ˆ ! " / _ ₦ % = - | ( ) Ɗ Ƙ {bksp}',
        "{tab} Q W E R T Y U I O P Ụ Ị",
        "{lock} A S D F G H J K L Ọ Ẹ Ǝ {enter}",
        "{shift} Z Ɓ C V B N M ; : Ṣ {shift}",
        ".com @ {space}",
      ],
  };
  let amharicKeyboard = {
    default: [
        "ሀ 1 2 3 4 5 6 7 8 9 0 - {bksp}",
        "{tab} ለ ሐ ሠ ረ ቀ ሰ ሶ ነ ወ ጀ ፈ አ ደ ተ አቀ",
        "{lock} መ ሚ ሜ ሸ ተ አሀ ወጀ ፈአ ደተ አቀ ወደ",
    ],
  }
  let arabicKeyboard = {
    default: [
        "\u0630 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
        "{tab} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u062F \\",
        "{lock} \u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637 {enter}",
        "{shift} \u0626 \u0621 \u0624 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638 {shift}",
        ".com @ {space}",
      ],
      shift: [
        "\u0651 ! @ # $ % ^ & * ) ( _ + {bksp}",
        "{tab} \u064E \u064B \u064F \u064C \u0644\u0625 \u0625 \u2018 \u00F7 \u00D7 \u061B < > |",
        '{lock} \u0650 \u064D ] [ \u0644\u0623 \u0623 \u0640 \u060C / : " {enter}',
        "{shift} ~ \u0652 } { \u0644\u0622 \u0622 \u2019 , . \u061F {shift}",
        ".com @ {space}",
      ],
    }
let mooréKeyboard = {
    default: [
        "1 2 3 4 5 6 7 8 9 0 - {bksp}",
        "{tab} q w e r t y u i o p ụ ị",
        "{lock} a s d f g h j k l ọ ẹ ǝ {enter}",
        "{shift} z y x c v b n m , . ṣ {shift}",
        ".com @ {space}",
        ],
        shift: [
            "! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P Ụ Ị",
            "{lock} A S D F G H J K L Ọ Ẹ Ǝ {enter}",
            "{shift} Z Ɓ C V B N M ; : Ṣ {shift}",
            ".com @ {space}",
        ],
    }
    let kassemKeyboard = {
        default: [
            "1 2 3 4 5 6 7 8 9 0 - {bksp}",
            "{tab} q w e r t y u i o p ụ ị",
            "{lock} a s d f g h j k l ọ ẹ ǝ {enter}",
            "{shift} z y x c v b n m , . ṣ {shift}",
            ".com @ {space}",
            ],
            shift: [
                "! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P Ụ Ị",
                "{lock} A S D F G H J K L Ọ Ẹ Ǝ {enter}",
                "{shift} Z Ɓ C V B N M ; : Ṣ {shift}",
                ".com @ {space}",
            ],
        }
   
    let nkoKeyboard = {
    default: [
        "\u07F7 \u07C1 \u07C2 \u07C3 \u07C4 \u07C5 \u07C6 \u07C7 \u07C8 \u07C9 \u07C0 \u07FA = {bksp}",
        "{tab} \u07D2 \u07E5 \u07CB \u07D9 \u07D5 \u07E6 \u07CE \u07CC \u07D0 \u07D4 [ ] \\",
        "{lock} \u07CA \u07DB \u07D8 \u07DD \u07DC \u07E4 \u07D6 \u07DE \u07DF \u07F8 \u07F4 {enter}",
        "{shift} \u07E2 \u07CF \u07D7 \u07CD \u07D3 \u07E3 \u07E1 \u07F2 \u07F3 \u2E2E {shift}",
        ".com @ {space}",
    ],
    shift: [
        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
        "{tab} \u07D1 \u07E0  \u07DA  \u07E7     { } |",
        "{lock} \u07FD \u07F2 \u07F3 \u07F8 \u07F9 \u07FA \u07FE \u07FF \u07F6 \u07F9 \u07F5 {enter}",
        "{shift} \u07EB \u07EC \u07ED \u07EE \u07EF \u07F0 \u07F1 < > \u07FD {shift}",
       " .com @ {space}"
    ],
    };
    let generalKeyboard = nkoKeyboard;
    export default chooseKeyboard;