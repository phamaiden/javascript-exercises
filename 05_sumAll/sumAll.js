const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < b){
        for (let i = a; i <= b; i++){
            sum += i;
        }
    }
    if (a > b){
        for (let i = a; i >= b; i--){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
