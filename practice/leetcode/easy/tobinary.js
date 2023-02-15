
var addBinary = function(a, b) {
   let i = a.length - 1, j = b.length - 1, carry = 0;
   let result = '';

   while (i >= 0 || j >= 0) {
       let sum = carry;
       if (i >= 0) {
           sum += a[i] - '0';
           i--;
       }
       if (j >= 0) {
           sum += b[j] - '0';
           j--;
       }
       result = (sum % 2) + result;
       carry = Math.floor(sum / 2);
   }

   if (carry) {
       result = carry + result;
   }

   return result;
};


var addBinary = function(a, b) {
    return BigInt(BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};