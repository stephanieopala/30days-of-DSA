/*
Given five positive integers, find the minimum and maximum values that
can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example:
arr=[1,3,5,7,9]

minimum sum is 1+3+5+7 = 16;
maximum sum is 3+5+7+9 = 24;

The function prints 16 24

*/

function miniMaxSum(arr) {
  // Write your code here
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let total = 0;
  for(let i = 0; i < arr.length ; i++){
      total += arr[i];
  }
  
  let maxSum = total - min;
  let minSum = total - max;
  
  console.log(minSum + " " + maxSum);

}