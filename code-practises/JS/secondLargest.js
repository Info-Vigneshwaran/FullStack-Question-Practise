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
    return value.map((_val,index2)=>matrix[matrix.length - index2 -1][index])
})

console.log(rotateArr)
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
const input6 = [10,9,8,7,6,-2,-1]
// const myFunction = ((arr,index)=>{
//     return arr[index]
// })
// console.log(myFunction([10,9,8,7,6],4))

// const myFunction2 = ((arr,position)=>{
//     return arr.splice(arr.length - position,
//         position);
    
// })
// console.log(myFunction2(input6,2))
// const alphaArr = ['z', 'c', 'd', 'a', 'y', 'a', 'w']
// const negativeNumbers = ((arr)=>{
//     const sum = arr.reduce((acc,val)=>acc+val,0) / arr.length
//     return sum/ arr.length;
//     // return sum / arr.length
//     // return numArr.sort()
//     // return numArr.filter((val)=>val<0).length
// })
// console.log(negativeNumbers(input6));

// const longestInput = ['I', 'need', 'candy']
// const longestStr = longestInput.reduce((acc,val) => acc.length > val.length ? acc : val)

// console.log(longestStr);

// const arrElem = ['test', 'test', 'test']
// const equalArr = arrElem.every( (val, _i, arr) => val === arr[0] )   
// console.log(equalArr);

// console.log(myFunction([1, 2, 3], [4, 5,9,3,1,23, 6]))

// function myFunction(a,b){
//     // const uniq = arrays.flat(Infinity)
//     const uniq = [...a,...b]
// return [...new Set(uniq)].sort((a ,b)=>a-b)
//     const newuniq= [...new Set(uniq)].sort((a,b)=>a-b)
//     console.log(newuniq);
//     // return arrays.flat(Infinity)
// }

const dupArr = [1,1,33,33,8,9,0,0]

// const uniqElem = ((value)=>value.filter((val,index,array)=>dupArr.indexOf(val) == array.lastIndexOf(val)))
// const dupElem = ((value)=>value.filter((val,index,array)=>dupArr.indexOf(val) !== index))
// console.log(dupElem(dupArr));
// console.log(uniqElem(dupArr));

// const maxValue = Math.max(...dupArr)
// const minValue = Math.min(...dupArr)
// console.log(minValue);

// const minValueReduce = ((arrayValue)=>arrayValue.reduce((acc,val)=>acc<val? acc : val,0))

// console.log(minValueReduce(dupArr))

// const missingElem = ((inputArr)=>{
//     let missArr = []
//     const maxValue = Math.max(...inputArr)
//     const minValue = Math.min(...inputArr)
//     for (let index = minValue; index < maxValue; index++) {
//         if(!missArr.includes(index)) {
//             missArr = [...missArr,index];
//         }
//     }
//     return missArr
// })

// console.log(missingElem(dupArr));
class findOddEven {
    constructor(value){
        this.value = value
        this.fact =1
    }
    odd(value){
        this.value = value.filter((val)=>val %2 !== 0)
        return this
    }
    even(value){
        this.value = value.filter((val)=>val %2 === 0)
        return this
    }
    factorial(value){
        for (let index = 0; index < value; index++) {
            this.fact += this.fact * index
        }
        return this
    }
    value(){
        return this.value
    }

}

const findOddEven1 = new findOddEven()
// console.log(findOddEven1
//     .even(dupArr).value
//     );

//     let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
// let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
// let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
// let arrayIntegers4 = arrayIntegers.slice(-6, -2); //returns [3, 4]
// console.log(arrayIntegers4);

//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
// console.log(impureAddNumber(6)); // returns 1
// console.log(numberArray); // returns [6]
// console.log(numberArray);
// console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
// console.log(numberArray); // returns [6]
// console.log(impureAddNumber(8));
// console.log(numberArray); 

// (()=>{
//     console.log("IIFE")
// })()

const memoizAddition = (value) => {
    let cache = {};
    return (value) => {
        return cache[value] ? cache[value] :  cache[value] = value+20
      
    };
  };
  // returned function from memoizAddition
  const addition = memoizAddition(20);
  console.log(addition(20)); //output: 40 calculated
  console.log(addition(20)); //output: 40 cached

isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

console.log(isFinite("1004")); // true

//   new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   })
//     .then(function (result) {
//       console.log(result); // 1
//       return result * 2;
//     })
//     .then(function (result) {
//       console.log(result); // 2
//       return result * 3;
//     })
//     .then(function (result) {
//       console.log(result); // 6
//       return result * 4;
//     });


const object = {
    a: "Good morning",
    b: 100,
  };
  
//   for (let value in object) {
//     console.log(`${value}: ${object[value]}`); // a: 'Good morning'
//     // b: 100
//   }

class Employee {
    constructor() {
      this.name = "John";
    }
  }
 
//   var employeeObject = new Employee();
 
//   console.log(employeeObject.name);

const randon = ~~(Math.random() * 100 +1)
const randon2 = Math.floor(Math.random() * 100 +1)
// console.log(randon)
// console.log(randon2)
// console.log("Hello ".repeat(4).trimEnd())

var newArray = new Array(5).fill("sd");
console.log(newArray); // ["0", "0", "0", "0", "0"]

const originalArray = [1, 2, 3, 4, 5];
const newArrayReduceRight = originalArray.reduceRight((accumulator, value) => {
  return [...accumulator,value];
}, []);
console.log(newArrayReduceRight)