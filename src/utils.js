// src/utils.js
export function isPalindrome(str) {
    const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return sanitizedStr === sanitizedStr.split("").reverse().join("");
  }
  
//Pseudo code
/* tolowercase-
split==.split method
reverse== .reverse method
join==.join method*/