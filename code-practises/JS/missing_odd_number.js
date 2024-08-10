const input = [5,7,9,11,17]
//output 13,15
const minValue = Math.min(...input)
const maxValue = Math.max(...input)
let odd_number
for (i = minValue;i<=maxValue; i=i+2){
    // console.log(i);
    if(!input.includes(i)){
        odd_number = i
        break;
    }
    // return input.includes(i) ? null : i
}
console.log(odd_number);