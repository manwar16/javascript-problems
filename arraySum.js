
function getArraySum(numbers){
    sum = 0;
    for( var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 54, 76, 12, 89];
var result = getArraySum(numbers);
console.log("Total sum is: ", result);

var total = getArraySum([43, 33, 44, 55, 66, 77, 88]);
console.log("Sum of this array= ", total);

