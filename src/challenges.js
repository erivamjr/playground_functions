/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(x, y) {
  return !!(x === true && y === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringStart) {
  return stringStart.split(' ');
}

// Desafio 4
function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(number) {
  let count = 0;
  for (const value of number) {
    if (value === Math.max(...number)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
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
function fizzBuzzString(value) {
  if (value % 3 === 0 && value % 5 === 0) return ('fizzBuzz');
  if (value % 3 === 0) return ('fizz');
  if (value % 5 === 0) return ('buzz');
  return ('bug!');
}
function fizzBuzz(receiveNumber) {
  let aux = [];
  for (let value of receiveNumber) {
    aux.push(fizzBuzzString(value));
  }
  return aux;
}

// Desafio 9
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
function encode(caracter) {
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
