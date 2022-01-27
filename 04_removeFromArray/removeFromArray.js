const removeFromArray = function(arr,...args) {
  let a = arr;
  let b = args;
  let c = a.filter(d => !b.includes(d));
  return c
    
  };

// Do not edit below this line
module.exports = removeFromArray;
