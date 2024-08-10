// const checkPalindrome = ((palin)=>{
//     return palin.split("").reverse("").join("") === palin
// })

// var prompt = require('prompt');

//   //
//   // Start the prompt
//   //
//   prompt.start();

//   //
//   // Get two properties from the user: username and email
//   //
//   prompt.get(['Str1', 'Str2'], function (err, result) {
//     //
//     // Log the results.
//     //
//     console.log('Command-line input received:');
//     console.log('  Str1: ' + checkPalindrome(result.Str1));
//     console.log('  Str2: ' + result.Str2);
//   });


// let arr = [1,2,3,4,5]
// // arr.length = 0
// // console.log(arr)
// console.log(typeof arr);
// console.log(typeof typeof NaN) // string;

// let [a, ,b] = [1,2,3,4]
// console.log(`${a} ${b}`);

// const {4:x} = ['a','b','c','d','e','f']
// console.log(`${x}`);

// const input = [2,7,11,4,-2]
// // output = [20,15,11,18,24]

// const splitedArr = input.map((value,_index,array)=>{
//     return array.filter((number) => number !== value)
//     .reduce((acc,value)=>acc+value,0);
// })

// console.log(splitedArr);

const input3 = [1,3,5,6,5,2,9]
const input4 = [3,6,2,9,1,19]

const intersect = input3.filter((value)=>input4.indexOf(value) != -1 ? true : false)
console.log(intersect);