const removeFromArray = function(array, ...args) {
    for (const a of args){
        let index = array.indexOf(a);
        if (index > -1){
            array.splice(index, 1);
        }
        continue;
    }
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
