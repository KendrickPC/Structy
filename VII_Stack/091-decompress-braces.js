/*
Write a function, decompressBraces, that takes in a compressed string as
an argument. The function should return the string decompressed.

The compression format of the input string is 'n{subString}', where the
subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer
between 1 through 9.

You may assume that the input is valid and the decompressed string will
only contain alphabetic characters.
*/

const decompressBraces = (s) => {
  const numbers = '123456789'
  
};

console.log(decompressBraces('2{fu}')); // fufu

module.exports = {
  decompressBraces
};