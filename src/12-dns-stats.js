/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains;
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('.').reverse();
    while (arr[i].length > 0) {
      const data = `.${arr[i].join('.')}`;
      if (Object.keys(obj).includes(data)) {
        obj[data] += 1;
      } else {
        obj[data] = 1;
      }
      arr[i].pop();
    }
  }

  return obj;
}

module.exports = getDNSStats;
