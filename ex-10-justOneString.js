/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/

function justOneString(arg1, arg2) {
  let cond1 = false, cond2 = false
  if (typeof arg1 === 'string') {
    cond1 = true
  }
  if (typeof arg2 === 'string') {
    cond2 = true
  }
  if ((cond1 || cond2) && !(cond1 && cond2)) {
    return true
  }
  return false;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
