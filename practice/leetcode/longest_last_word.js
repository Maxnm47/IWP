
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.split(" ");
    let last_word = n[n.length-1];

    if(last_word.length !== 0){
        return n[n.length-1].length
    }
    else{
        let i = 1;
        while(n[n.length-1].length ===0){
            i++;
            last_word = n[n.length-i].length;
            if(last_word > 0){
                return last_word
            }
        }
    }
};


var lengthOfLastWord = function(s) {

if(s.length === 1) return 1
  let arr = s.split(' ')
  for(let i = arr.length -1; i >= 0; i--){
  	let char = arr[i]
    if(char === '') continue
    return char.length
    
  }  
};