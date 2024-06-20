function linearSearch(arr, target) {
 
  for (let i = 0; i < arr.length; i++) {
       
      if (arr[i] === target) {
          
          return "Yes, the string exists in the array";
      }
  }
  return "No, the string does not exist in the array";
}