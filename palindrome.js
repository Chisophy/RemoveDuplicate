function palindrome(word) {
  
  const lowerCaseWord = word.toLowerCase();

  const len = lowerCaseWord.length;

  for (let i = 0; i < len / 2; i++) {
      
      if (lowerCaseWord[i] !== lowerCaseWord[len - 1 - i]) {
        
          return false;
      }
  }

  return true;
}

console.log(palindrome("level"));
console.log(palindrome("energy"));