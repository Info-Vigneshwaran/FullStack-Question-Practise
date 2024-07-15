const input3 = [1,2,-2,11,7,1]
const secondLargest = [...new Set(input3)].sort((a,b)=>a-b)
// console.log(secondLargest[secondLargest.length-2]);

// Rotate the array by 2 place from left
const input4 = [1,2,-2,11,7,1]
const rotateArr = [input4,...input4.splice(0,2)].flat(Infinity)
console.log(rotateArr);