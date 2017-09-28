/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/

function getSeasonForMonth(m) {
  let season = '';
  if (
    typeof m !== 'number'
    || m < 1
    || m > 12
  ) {
    return false;
  }
  if (m < 3) {
    season = 'winter'
  } else if (m < 6) {
    season = 'spring'
  } else if (m < 6) {
    season = 'spring'
  } else if (m < 9) {
    season = 'summer'
  } else if (m < 11) {
    season = 'fall'
  } else if (m < 13) {
    season = 'winter'
  } else {
    return false;
  }
  return season;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
