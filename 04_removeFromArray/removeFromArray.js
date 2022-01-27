const removeFromArray = function(array,...args) {
    console.log(array)
    
    console.log(args)
      let myNewArray = array.filter((item) => {
        for(const arg of args) {
          if(item !== arg) {
              if(typeof item == typeof arg) {
                return item
              }
          
          }
        }
      })
    
      return myNewArray
  
  };

// Do not edit below this line
module.exports = removeFromArray;
