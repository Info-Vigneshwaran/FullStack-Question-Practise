const inputArr = [-1,0,1,7,6,9]
const minValue = Math.min(...inputArr)
const maxValue = Math.max(...inputArr)
let missingArr = [];
let missingValue;
for (let index = 0; index < maxValue; index++) {
    
    if(!inputArr.includes(index)){
        missingValue = index
        break
    }
}
// console.log(missingValue);

// const numArr = [1,4,5,6,3,24,5,3,2,4]
// console.log(numArr.slice(-5,-3))

const input = [2,7,11,4,-2]

const sumExcept = input.map((value,index,array)=>array.filter
((number)=>number !== value).reduce((acc,value)=>acc+value,0))
console.log(sumExcept);