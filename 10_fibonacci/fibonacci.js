const fibonacci = function(num) {
    let sequence = []
    
    for(let i=0;i<num;i++) {
        if(i<2) {
            sequence.push(i)
        } else if(i>1) {
            sequence[i] = sequence[i-1] + sequence[i-2]
        }
    }
    console.log(sequence)
    return sequence[num-1]
};

console.log(fibonacci(10))

// Do not edit below this line
module.exports = fibonacci;
