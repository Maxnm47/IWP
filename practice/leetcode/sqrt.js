/**
 * @param {number} x
 * @return {number}
*/
let INFINITY_ =9999999;
var mySqrt = function(x) {
  
    let i = 0, udigit, j; // Loop counters
    let cur_divisor = 0;
    let quotient_units_digit = 0;
    let cur_quotient = 0;
    let cur_dividend = 0;
    let cur_remainder = 0;
    let a = new Array(10);
    
    while (x > 0) {
        a[i] = x % 100;
        x = Math.floor(x / 100);
        i++;
    }
    
    i--;
    
    for (j = i; j >= 0; j--) {
    
        cur_remainder = INFINITY_;
        cur_dividend = cur_dividend * 100 + a[j];
    
        for (udigit = 0; udigit <= 9; udigit++) {

            if (cur_remainder >= cur_dividend
                                     - ((cur_divisor * 10 + udigit)
                                        * udigit)
                && cur_dividend
                           - ((cur_divisor * 10 + udigit) * udigit)
                       >= 0) {
    
                cur_remainder = cur_dividend - ((cur_divisor * 10
                                                 + udigit)
                                                * udigit);
    
                quotient_units_digit = udigit;
            }
        }
    
        cur_quotient = cur_quotient * 10
                       + quotient_units_digit;
    
        cur_divisor = cur_quotient * 2;
    
        cur_dividend = cur_remainder;
    }
    
    return cur_quotient;
}
 
