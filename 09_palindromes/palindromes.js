const palindromes = function (str) {
  const strArray = str.replace(/[&\/\\#! ,+()$~%.'":*?<>{}]/g,'').toLowerCase()
  const strReversed = str.replace(/[&\/\\#! ,+()$~%.'":*?<>{}]/g,'').toLowerCase().split("").reverse();
  return strArray === strReversed.join("")




};

palindromes('racecar!')

// Do not edit below this line
module.exports = palindromes;
