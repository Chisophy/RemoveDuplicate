function limitByLength(str) {
  
  if (str.length > 100) {
      
      return str.substring(0, 100) + "...";
  } else {
      
      return str;
  }
}

const longString = "ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.";
const shortString = "This is a short string.";

console.log(limitByLength(longString));
console.log(limitByLength(shortString));