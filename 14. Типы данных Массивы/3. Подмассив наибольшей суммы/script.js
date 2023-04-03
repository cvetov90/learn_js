"use strict";

let arr = [1, -2, 3, 4, -9, 6, 10, 11, 12];
getMaxSubSum(arr)

//main function
function getMaxSubSum(arr) {
  if (!checkPositivElement(arr)) {
    return 0;
  }
  
  let sumArray = []
  if(findContinuousSubArray(arr).length == 0) {
    return findMaxElement(arr)
  } else {
    for(let element of findContinuousSubArray(arr)) {
      sumArray.push(sumArrayElement(element))
    }
    let maxSum = Math.max.apply(null, sumArray)
    return maxSum > findMaxElement(arr) ? maxSum : findMaxElement(arr)
  }
}

function checkPositivElement(arr) {
  let positivFlag = false;
  for (let element of arr) {
    if (element > 0) {
      positivFlag = true;
    }
  }
  return positivFlag;
}
// Дописать, теряется первый вложенный массив
function findContinuousSubArray(arr) {
  let continuousSubArray = [];
  let continuousCurrent = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1] - 1 || arr[i] == arr[i - 1] + 1) {
      continuousCurrent.push(arr[i]);
      if(arr[i] != arr[i+1] - 1) {
        continuousSubArray.push([...continuousCurrent]);
        continuousCurrent.length = 0;
      }
    } 
  }

  return continuousSubArray
}

function findMaxElement(arr) {
  let maxElement = arr[0];
  for (let element of arr) {
    if (element > maxElement) {
      maxElement = element;
    }
  }
  return maxElement;
}

function sumArrayElement(arr) {
  let sum = 0;
  for (let element of arr) {
      sum += +element;
    }
  return sum;
}
