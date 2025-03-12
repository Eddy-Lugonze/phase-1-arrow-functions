// Function expression called divide
const divide = function() {
    return 2000 / 100;
};

// Arrow function called square
const square = (num) => num * num;

// Arrow function called add
const add = (a, b) => a + b;

// Exporting functions for testing
module.exports = { divide, square, add };
