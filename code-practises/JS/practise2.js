const data =[
    {
        "key":"sample 1",
        "data":"Data 1"
    },
    {
        "key":"sample 1",
        "data":"Data 1"
    },
    {
        "key":"sample 1",
        "data":"Data 1"
    },
    {
        "key":"sample 1",
        "data":"Data 1"
    },
    {
        "key":"sample 2",
        "data":"Data 2"
    },
    {
        "key":"sample 2",
        "data":"Data 2"
    },
    {
        "key":"sample 2",
        "data":"Data 2"
    }
    ,
    {
        "key":"sample 3",
        "data":"Data 3"
    },
    {
        "key":"sample 4",
        "data":"Data 4"
    },
    {
        "key":"sample 5",
        "data":"Data 5"
    }
]
const uniqArr = {}

// const result = Object.groupBy(data, ({ key }) => key);
// console.log(result)
const findMultiple = (({data})=>{
    data.forEach(item => {
        if(uniqArr[item.key]){
            uniqArr[item.key].push(item)
        } else {
            uniqArr[item.key] = [item]
        }
    });

})

// findMultiple({data})

let index = 0
const findMultipleRecursive = (({data})=>{
   
    if(index < data.length) {
        if(uniqArr[data[index].key]){
            uniqArr[data[index].key].push(data[index])
        } else {
            uniqArr[data[index].key] = [data[index]]
        }
        ++index
        findMultipleRecursive({data})
    }
})

findMultipleRecursive({data})
// console.log(uniqArr);

const inputStr = "PROGRAM"
let newArr =[]
const printSubStr = (({str1})=>{
    const midLength = Math.floor(str1.length /2)
    const str2 = str1.slice(midLength,str1.length)
    let newStr = '';
    [...str2].forEach(element => {
        newArr = [...newArr,newStr += element]
    });
    [...str1].slice(0,midLength).forEach(element => {
        newArr = [...newArr,newStr += element]
    });
    // for (let index = 0; index < str2.length; index++) {
    //     newArr = [...newArr,newStr += str2[index]]
    // }
    // for (let index = 0; index < midLength; index++) {
    //     newArr = [...newArr,newStr += str1[index]]
    // }

})

printSubStr({str1:inputStr});
// console.log(newArr);

const inputFlatArr = [1,2,3,[4,5],[6,7,8]]
let index2 = 0
let flatArr=[]
const findFlat = (({input})=>{
   input.forEach((element)=>{
    if(Array.isArray(element)){
        findFlat({input:element})
    } else {
        flatArr = [...flatArr,element]
    }
    
   })
})

findFlat({input:inputFlatArr})
// console.log(flatArr);

const inputNumArr = [-1,2,7,4,5,6,8]
let minValue = Math.min(...inputNumArr)
// const minValue = 0
const maxValue = Math.max(...inputNumArr)
let findMinValue 
if(minValue>=0) {
    minValue = 0
}
for (let index = minValue; index <= maxValue; index++) {
    if(!inputNumArr.includes(index)) {
        findMinValue = index+1
        break;
    } else {
        findMinValue = -1
    }
}

console.log(findMinValue);