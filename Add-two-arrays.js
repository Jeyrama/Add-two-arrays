/*
Your task is to create a function called addArrays, 
which takes two arrays consisting of integers, 
and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, 
it would equal '3' + '2' + '9' converted to an integer for this challenge, 
meaning it would equal 329. 

The output should be an array of the sum in a similar fashion to the input 
(for example, if the sum is 341, you would return [3,4,1]). 
Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]

If both arrays are empty, return an empty array.
In some cases, there will be an array containing a negative number as the first index in the array. 
In this case treat the whole number as a negative number. 

See below:
  [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
*/


// Solution

function addArrays(array1, array2) {
  let nbr1 = parseInt(array1.join('')) || 0
  let nbr2 = parseInt(array2.join('')) || 0
  let sum = Math.abs(nbr1 + nbr2)
  let sign = nbr1 + nbr2 < 0 ? -1 : 1
  let res = sum.toString().split('').map(x => parseInt(x))
  
  res[0] *= sign
  
  return nbr1 === 0 && nbr2 === 0 ? [] : res
}

// or

const parseDigits = (digits) =>
  +digits.join``
  
const unparseInt = (int) =>
  String(int).split(/\B/).map(Number)
  
const addArrays = (arr1, arr2/*d2*/) =>
  unparseInt(parseDigits(arr1) + parseDigits(arr2))
    .filter((digit, index) => index || digit)