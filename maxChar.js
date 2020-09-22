function createCharMap(string) {
    const charMap ={};
    for(let character of string){
        if(charMap[character]){
            charMap[character]++;
        }
        else{
            charMap[character]=1;
        }
        
    }
    return charMap;
}
function maxChar(string) 
{
    const charMap = createCharMap(string);
    let max = 0;
    let character ;
    for(let char in charMap){
        if(charMap[char] > max)
        {
            max = charMap[char];
            character = char;
        }
    }
    return character;
    
}

console.log(maxChar('monowar'))