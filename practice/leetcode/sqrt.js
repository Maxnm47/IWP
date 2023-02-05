/**
 * @param {number} x
 * @return {number}
*/
let INFINITY =9999999;
var mySqrt = function(x) {
  
    let i = 0, udigit, j; // Loop counters
    let divi = 0;
    let quotient_units_digit = 0;
    let quit = 0;
    let dividend = 0;
    let cur_remainder = 0;
    let a = new Array(10);
    
    while (x > 0) {
        a[i] = x % 100;
        x = Math.floor(x / 100);
        i++;
    }
    
    i--;
    
    for (j = i; j >= 0; j--) {
    
        cur_remainder = INFINITY;
        dividend = dividend * 100 + a[j];
    
        for (udigit = 0; udigit <= 9; udigit++) {

            if (cur_remainder >= dividend
                                     - ((divi * 10 + udigit)
                                        * udigit)
                && dividend
                           - ((divi * 10 + udigit) * udigit)
                       >= 0) {
    
                cur_remainder = dividend - ((divi * 10
                                                 + udigit)
                                                * udigit);
    
                quotient_units_digit = udigit;
            }
        }
    
        quit = quit * 10
                       + quotient_units_digit;
    
        divi = quit * 2;
    
        dividend = cur_remainder;
    }
    
    return quit;
}

