const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    const arr = expr.match(/........../g)
    const space = '**********'
    let word = arr.map((el) => {
        let m = el.replace(/00/gi,'').replace(/10/gi,'.').replace(/11/gi,'-').replace(space,' ')
        return m
    });

    let a = word.map(function(el){
        for (key in MORSE_TABLE) {
            if (el === key) {
                el = MORSE_TABLE[key]
            }
        } return el
    })
    return a.join('')
}

module.exports = {
    decode
}
