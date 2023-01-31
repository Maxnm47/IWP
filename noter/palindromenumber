function isPalindrome(num) {
  let numString = num.toString();
  let reversedNumString = numString.split('').reverse().join('');
  return numString === reversedNumString;
}


function isPalindrome(x) {
  var numString = x.toString();
  var len = numString.length;
  for (var i = 0; i < len / 2; i++) {
    if (numString[i] !== numString[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

//faster:
var isPalindrome = function(x) {
    //guess if it's a uni digit  integer, it's automatically a palindrome
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    
    if(x.toString().split('').reverse().join('') === x.toString())
    {
        return true
    }else{
        return false
    }
    
};