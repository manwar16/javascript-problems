var marks = [51, 61, 67, 82, 56, 92, 45, 35, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
       
        max = element;
    }
} 
console.log("Hieghest value is: ", max);