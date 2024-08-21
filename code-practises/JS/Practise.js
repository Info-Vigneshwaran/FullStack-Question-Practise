function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }
   
  const person = 'Lydia';
  const age = 21;
   
//   getPersonInfo`${person} is ${age} years old`;

const inputData = [
    {name:"name1",age:20,amount:40},
    {name:"name2",age:10,amount:80},
    {name:"name3",age:30,amount:20},
]

let inc=0
let sumAmount=0
const findSum =(({inputData})=>{
    const inputLength = inputData.length
    
    if(inc !== inputLength){
        sumAmount += inputData[inc].amount
        inc++
        findSum({inputData})
    }
    return sumAmount

})

// console.log(findSum({inputData}))

const inputArr = [1,1,33,33,8,9,0,0]
let smallInt = inputArr[0]
let maxInt = inputArr[0]
for (let index = 0; index < inputArr.length; index++) {
    if(inputArr[index+1] < smallInt){
        smallInt= inputArr[index+1]
    }
    if(inputArr[index+1] > maxInt){
        maxInt= inputArr[index+1]
    }
}
console.log(smallInt);
console.log(maxInt);