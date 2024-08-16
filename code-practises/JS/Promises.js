const checkPromise = new Promise((resolve,reject)=>{
    
    resolve("trueee")
    reject("true")
})

// checkPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
const inputStr = "sdfhsdigfj jgsdfjhg jhsdfjh "
const outputStr = inputStr.split(" ").join("").split("").reduce((acc,value)=>{
         acc[value] = (acc[value]||0) +1
        return acc
     },{})


// console.log(outputStr);

let matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

const rotated =matrix.map((value,index)=>{return value.map((value2,index2)=>{
    return matrix[matrix.length - index2 -1][index]
})})

// console.log(rotated);

const arr = ['a','b','c']
console.log(arr.splice(1,2,'x','y'))