/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/



function isVowel(character) {
  if (typeof character !== 'string') {
    return false;
  }
  character = character.toLowerCase();
  if (
    character === 'a'
    || character === 'e'
    || character === 'i'
    || character === 'o'
    || character === 'u'
    || character === 'y' // ¿¿ por que ??
  ) {
    return true;
  }
  return false;
}


 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
