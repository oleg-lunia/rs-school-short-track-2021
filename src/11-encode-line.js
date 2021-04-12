/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let n = 1;
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      n++;
    } else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
      stack.push(`${n}${arr[i]}`);
      n = 1;
    } else if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      stack.push(arr[i]);
    }
  }

  const newStr = stack.join('');

  return newStr;
}

module.exports = encodeLine;
