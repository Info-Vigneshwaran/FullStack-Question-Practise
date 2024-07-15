// const input3 = [1,2,-2,11,7,1]
// const secondLargest = [...new Set(input3)].sort((a,b)=>a-b)
// // console.log(secondLargest[secondLargest.length-2]);

// // Rotate the array by 2 place from left
// const input4 = [1,2,-2,11,7,1]
// const rotateArr = [input4,...input4.splice(0,2)].flat(Infinity)
// console.log(rotateArr);

// let str = "abbbcabcdefef"
// const unArr = [...new Set(str)].join("").length
// console.log(unArr);

// let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
// const numArr = arr.filter((val)=> typeof val === "number")
// const alphaArr = arr.filter((val)=> typeof val === "string")
// console.log([...numArr,...alphaArr]);


let matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];
const rotateArr = matrix.map((value,index)=>{
    return value.map((val,index2)=>matrix[matrix.length - 1 -index2][index])
})

const amsNum = 15;
const amsNumber = amsNum.toString().split("").reduce((acc,val)=>{
    return acc += Math.pow(val, 3)
},0)

console.log(amsNumber===amsNum);