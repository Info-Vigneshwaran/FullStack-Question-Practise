const str2 = "this is javascript"

const occurenceChar = str2.replaceAll(" ","").split("").reduce((acc,value,index)=>{
    acc[value] = (acc[value] || 0) + 1;
    return acc;
},{})

const inputArr= [1,1,1,2,2,3,5,5,5,6,6,4,4,4,4]
const findOccurence = inputArr.reduce((acc,value)=>{
    acc[value] = (acc[value] || 0) +1
    return acc
},{})

const inputArr2 = [
    {
        name:"Vignesh",
        id:1,
        quantity:70
    },
    {
        name:"test2",
        id:2,
        quantity:50
    },
    {
        name:"test3",
        id:3,
        quantity:120
    },
    {
        name:"test4",
        id:5,
        quantity:80
    },
    {
        name:"test6",
        id:4,
        quantity:45
    }
]

const findIndexArr = ((inputArr,id,updatedData)=>{
    return inputArr.map((value)=>value.id===id ? {...value,...updatedData} : value)
})
// console.log([...inputArr2,{...findIndexArr(inputArr2),quantity:20}])
// console.log(...new Set({...inputArr2[1],quantity:10}))
// const FoundValue = {...inputArr2}
const updatedData = {quantity:20}
// console.log(findIndexArr(inputArr2,3,updatedData))
// console.log([...inputArr2,{inputArr2[findIndexArr(inputArr2)]]:});

let str = ''
const length = 5
for (let index = 0; index < length; index++) {
    console.log('* '.repeat(index))
}