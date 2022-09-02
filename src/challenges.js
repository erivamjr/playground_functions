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
  let result = [];
  for (let value of receiveNumber) {
    result.push(fizzBuzzString(value));
  }
  return result;
}

// Desafio 9
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
function encode(caracter) {
  let result = '';
  for (let value of caracter) {
    switch (value) {
      case 'a':
        result += '1';
        break;
      case 'e':
        result += '2';
        break;
      case 'i':
        result += '3';
        break;
      case 'o':
        result += '4';
        break;
      case 'u':
        result += '5';
        break;
      default:
        result += value;
    }
    return result;
  }

  function decode(caracterDecode) {
    let result = '';
    for (let value of caracter) {
      switch (value) {
        case '1':
          result += 'a';
          break;
        case '2':
          result += 'e';
          break;
        case '3':
          result += 'i';
          break;
        case '4':
          result += 'o';
          break;
        case '5':
          result += 'u';
          break;
        default:
          result += value;
      }
      return result;
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