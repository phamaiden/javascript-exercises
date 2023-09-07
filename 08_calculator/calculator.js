const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function() {
  let sum = 0;
	for (let i = 0; i < arguments[0].length; i++) {
    sum += arguments[0][i];
  }
  return sum;
};

const multiply = function() {
  let product = 1;
	for (let i = 0; i < arguments[0].length; i++) {
    product *= arguments[0][i];
  }
  return product;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
	if (n === 0) return 1;
  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
