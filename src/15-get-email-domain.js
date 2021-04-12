/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = email;
  const arr = str.split('');
  const index = arr.lastIndexOf('@');
  arr.splice(0, index + 1);
  const str2 = arr.join('');
  return str2;
}

module.exports = getEmailDomain;
