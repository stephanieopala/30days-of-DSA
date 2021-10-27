/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
*/

function plusMinus(arr) {

  let n = arr.length;
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  
  if(0 < n <= 100){ //constraints
      arr.map((elem, key) => {
          if(elem > 0){
              positives++;
          } else if(elem < 0){
              negatives++;
          } else{
              zeros++
          }
          return elem;
      })
  }
  
  console.log((positives / n).toFixed(6));
  console.log((negatives / n).toFixed(6));
  console.log((zeros / n).toFixed(6));

}
plusMinus([3, 4, -1, -1, 0, 0]);