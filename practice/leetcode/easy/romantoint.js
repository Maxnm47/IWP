/**
 * @param {string} s
 * @return {number}
 */


function converter(s){
    switch(s){
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
    }
}

var romanToInt = function(s) {
    let sum = 0;
    let item = 0;
     for(let i = 0; i < s.length; i++){
         item = converter(s[i]);
         if (i < s.length - 1 && item < converter(s[i + 1])) {
            sum -= item;
         } else {
            sum += item;
         }
     }
     return sum;
};





