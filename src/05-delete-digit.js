/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = str.split('');
  const minN = Math.min.apply(null, arr);
  const indexMin = arr.indexOf(`${minN}`);
  arr.splice(indexMin, 1);
  const newN = Number(arr.join(''));

  return newN;
}

module.exports = deleteDigit;
