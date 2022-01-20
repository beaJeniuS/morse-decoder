const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = expr.match(/.{1,10}/g).join(' ').split(' ');
  
  let strArr = result.map((el) => {
    if(el == '**********') {
      return ' ';
    }
    let pairs = el.match(/.{1,2}/g)
    .join(' ')
    .split(' ')
    .map(function(num) {
      switch(num){
        case '00':
          return '';
        case '10':
          return '.';
        case '11':
          return '-';  
      }
    }).join('');
    return pairs;
  });


    return strArr.map(el => {
      if(el ==' ') return ' ';
      return MORSE_TABLE[el];
    }).join('');
}

module.exports = {
    decode
}