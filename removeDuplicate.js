function removeDuplicate(arr) {

  if (arr.length === 0) {
      return [];
  }

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    
      if (arr[i] !== arr[i - 1]) {
          result.push(arr[i]);
      }
  }
  return result;
}

const inputArray = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const outputArray = removeDuplicate(inputArray);
console.log(outputArray);