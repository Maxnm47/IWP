/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var li = digits[digits.length-1]
    if(li == 9){
        digits[digits.length-1] = 1;
        const arr = digits.push(0);
        return arr;
    }else{
    li + 1;
    digits[digits.length -1] = li;
    return digits;
    }
};

//faster
var plusOne = function(digits) {
    if (digits.length === 1) {
      if (digits[0] === 9) {
        return [1, 0];
      } else {
        return [digits[0] + 1]
      }
    }
    const res = [];
    let acc = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        const curr = digits[i];
        if (acc && curr === 9) {
            res.unshift(0);
            acc = 1;
        } else {
            res.unshift(acc ? curr + 1 : curr);
            acc = 0;
        }
    }
  
    if (res[0] === 0) {
      res.unshift(1);
    }
  
    return res;
  };