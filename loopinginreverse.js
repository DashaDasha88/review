// let arr = [1, 2, 3, 4, 5];

// for (let i = arr.length - 1; i >=0; i--) {
//   console.log(arr[i]);
// } 

function reverseArr(input) {

  let result = [];

  for(let i = input.length-1; i >= 0; i--) {
      result.push(input[i]);
  }
  return result;
}

console.log(reverseArr([1, 2, 3, 4, 5]));

