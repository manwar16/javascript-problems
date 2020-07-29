function palindrome(string) {
    const reversed = string.split("").reverse().join("")
    return string === reversed 
    
}

console.log(palindrome("madam"))

function palindrome1(string) {
  return  string.split("").every((char, index)=> char === [string.length - 1 - index ])
}

console.log((palindrome("racecar")))