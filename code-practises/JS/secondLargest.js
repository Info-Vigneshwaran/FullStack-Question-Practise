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

// let matrix = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
// ];
// const rotateArr = matrix.map((value,index)=>{
//     return value.map((_val,index2)=>matrix[matrix.length - 1 -index2][index])
// })

// const amsNum = 15;
// const amsNumber = amsNum.toString().split("").reduce((acc,val)=>{
//     return acc += Math.pow(val, 3)
// },0)

// console.log(amsNumber===amsNum);

// const vowels = ['a','e','i','o','u']
// const inputStr = "aagggsdfkjkwewqeqwoioiosiocsocdoio";

// const vowelsArr = inputStr.split("").reduce((acc,val)=>{
//     if(vowels.includes(val) ) { acc[val] = (acc[val] || 0) + 1}
//     return acc
// },{})
// console.log(vowelsArr);

// const curryFn = (a) => (b) => (c) => {return a+b+c}
// const param1 = curryFn(2)
// const param2 = param1(2)(5)
// console.log(param2);
const input6 = [10,9,8,7,6]
const myFunction = ((arr,index)=>{
    return arr[index]
})
console.log(myFunction([10,9,8,7,6],5))

const myFunction2 = ((arr,position)=>{
    return arr.splice(arr.length - position,
        position);
    
})
console.log(myFunction2(input6,2))