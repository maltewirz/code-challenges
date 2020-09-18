"use strict";
exports.__esModule = true;
function fizzbuzz(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            result.push('Fizz');
        }
        else if (i % 5 === 0) {
            result.push('Buzz');
        }
        else {
            result.push(i);
        }
    }
    return result;
}
exports.fizzbuzz = fizzbuzz;


// alternative
// Return an array
// var fizzify = fizzbuzz = function(n)
// {
//   return Array.apply(null, new Array(n)).map(function(e, i){
//     return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
//   }); 
// }