function reversNumber(num){
    const reversed = num.toString().split("").reverse().join("")
    return parseInt(reversed)  * Math.sign(num)
}

console.log(reversNumber(-34))