const repeatString = function(str,num) {
    
    if(num>0){
        let word = []
        for(let i = 0; i<num ; i++) {
            word.push(str)
        }
    
        return word.join("")
    } else if (num===0){
        return ""
    } else {
        return "ERROR"
    }
   
};

// Do not edit below this line
module.exports = repeatString;
