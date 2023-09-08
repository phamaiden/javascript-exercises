const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1;
    let secPrev = 0;

    for (let i = 2; i <= count; i++){
        let sum = firstPrev + secPrev;
        secPrev = firstPrev;
        firstPrev = sum;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
