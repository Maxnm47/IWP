/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(words) {
  if (!words[0] || words.length ==  1) return words[0] || "";
  let i = 0;

  while(words[0][i] && words.every(w => w[i] === words[0][i]))
    i++;
  
  return words[0].substr(0, i);
};

//faster:
var longestCommonPrefix = function (words) {
  const resultArr = [];
  words.sort();
  let firstWordArr = words[0].split("");
  let lastWordArr = words[words.length - 1].split("");
  //start comparing
  for (let i = 0; i < firstWordArr.length; i++) {
    if (firstWordArr[i] != lastWordArr[i]) break;
    resultArr.push(firstWordArr[i]);
  }
  return resultArr.join("");
};