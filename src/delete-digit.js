const { NotImplementedError } = require("../extensions/index.js");

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
  let newArr = n.toString().split("");
  let maxNumber = 0;

  newArr.map((_, i) => {
    let digitArr = newArr.slice();
    digitArr.splice(i, 1);
    let number = +digitArr.join("");

    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
}

module.exports = {
  deleteDigit,
};
