/**
 * @param {string[]} strs
 * @returns {string}
 */


var encode = function(strs) {
  return strs.reduce((total, value) => {
      return total = total + value.length + "#" + value;
  }, "");
}


/**
 * @param {string} str
 * @returns {string[]}
 */


var decode = function(str) {
  const output = [];
  
  for (let i = 0; i < str.length; ) {
      let j = i + 1;
      while (str[j] !== "#") j++;
      let len = parseInt(str.slice(i, j));
      output.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
  }
  
  return output;
}