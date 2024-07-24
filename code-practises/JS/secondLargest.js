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
console.log(findOddEven1
    .even(dupArr).value
    );
