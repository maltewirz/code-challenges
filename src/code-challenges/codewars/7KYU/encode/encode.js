"use strict";
exports.__esModule = true;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
function encode(str, n) {
    var map = {};
    var result = [];
    alphabet.split('').forEach(function (char, index) {
        map[char] = index + 1;
    });
    str.split('').forEach(function (char) {
        result.push(map[char]);
    });
    result.forEach(function (num, index) {
        var nArr = String(n).split('');
        var searchIndex = index;
        while (searchIndex > nArr.length - 1) {
            searchIndex -= nArr.length;
        }
        result[index] += Number(nArr[searchIndex]);
    });
    return result;
}
exports.encode = encode;
//alternative
// export function encode ( str:String, n:number):number[] {
//     let digits = n.toString().split('').map( ch => Number(ch) );
//     return str.split('').map((ch,index) => ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + digits[index % digits.length]);
//    }
