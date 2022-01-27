const reverseString = function(str) {
    let reversedArr  = []

    for(let i=str.length;i>=0;i--){
        reversedArr.push(str[i])
    }

    return reversedArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
