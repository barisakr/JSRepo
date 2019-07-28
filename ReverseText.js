
var str = "TextForReverse"
console.log(str);
ReverseText(str);

function ReverseText(str){
    const arr = str.split('').reverse().join('');
    console.log(arr);
}