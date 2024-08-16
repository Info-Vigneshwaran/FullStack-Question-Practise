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

const input = [-2,-1,7,8,6,9]

const sumExcept = input.map((value,index,array)=>array.filter
((number)=>number !== value).reduce((acc,value)=>acc+value,0))
// console.log(sumExcept);

var findDisappearedNumbers = function(nums) {
    const result = [];
    const n = nums.length;
    // Iterate through the array and mark the indices 
    // that correspond to values as negative
    for (let i = 0; i < n; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0) {
            nums[idx] = -nums[idx];
        }
    }
    // Iterate through the modified array and find the indices
   // that are still positive
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};
console.log(findDisappearedNumbers(input));