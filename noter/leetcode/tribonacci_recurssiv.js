
var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
  
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }

var result = tribonacci(25)

console.log(result);


/**
 * @param {number} n
 * @return {number}
 */

//faster version
const cache = [ 0, 1, 1 ];
var tribonacci = function(n) {
    if (cache[n] === undefined) {
        cache[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    }

    return cache[n];
};