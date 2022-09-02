/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  return !!(x === true && y === true);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringStart) {
  // seu código aqui
  return stringStart.split(' ');
}

// Desafio 4
function concatName(phrase) {
  // seu código aqui
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(number) {
  // seu código aqui
  let count = 0;
  let highest = number[0];
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > highest) {
      highest = number[i];
    }
  }
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return ('cat1');
  } if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');

  // (7,3,2)
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(receiveNumber) {
  // seu código aqui
  let wordArray = [];
  for (let i = 0; i < receiveNumber.length; i += 1) {
    if (receiveNumber[i] % 3 === 0 && receiveNumber[i] % 5 === 0) {
      wordArray.push('fizzBuzz');
    } else if ((receiveNumber[i]) % 5 === 0) {
      wordArray.push('buzz');
    } else if (receiveNumber[i] % 3 === 0) {
      wordArray.push('fizz');
    } else if (receiveNumber[i] % 3 !== 0 || receiveNumber[i] % 5 !== 0) {
      wordArray.push('bug!');
    }
  }
  return wordArray;
}

// Desafio 9
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
function encode(caracter) {
  // seu código aqui
  let aux = '';
  for (let i = 0; i < caracter.length; i += 1) {
    switch (caracter[i]) {
      case 'a':
        aux += '1';
        break;
      case 'e':
        aux += '2';
        break;
      case 'i':
        aux += '3';
        break;
      case 'o':
        aux += '4';
        break;
      case 'u':
        aux += '5';
        break;
      default:
        aux += caracter[i];
    }
  } return (aux);
}
function decode(caracterDecode) {
  // seu código aqui
  let aux = '';
  for (let i = 0; i < caracterDecode.length; i += 1) {
    switch (caracterDecode[i]) {
      case '1':
        aux += 'a';
        break;
      case '2':
        aux += 'e';
        break;
      case '3':
        aux += 'i';
        break;
      case '4':
        aux += 'o';
        break;
      case '5':
        aux += 'u';
        break;
      default:
        aux += caracterDecode[i];
    }
  } return (aux);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
