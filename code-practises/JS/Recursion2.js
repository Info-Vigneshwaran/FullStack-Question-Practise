
const data = [
    {
      name: 'Item 1',
      children: [
        {
          name: 'Subitem 1.1',
          children: [
            { name: 'Subsubitem 1.1.1', children: [] },
            { name: 'Subsubitem 1.1.2', children: [] },
          ],
        },
        { name: 'Subitem 1.2', children: [] },
      ],
    },
    {
      name: 'Item 2',
      children: [
        { name: 'Subitem 2.1', children: [] },
        { name: 'Subitem 2.2', children: [] },
      ],
    },
  ];
  
  const node=[]
function recursiveSearch(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].children) {
            recursiveSearch(arr[i].children);
        }
        node.push(arr[i].name)
    }
   
   return node
}

// console.log(recursiveSearch(data));

const array = [5,6,7,2]

// const sumUpFn = (arr)=>arr.map((number)=>arr.filter((value)=>value!== number).reduce((acc,val)=>acc+val,0))
// console.log(sumUpFn(array));
const sumUpFnCore =(({inputArr})=>{
    const length= inputArr.length
    let arr = []
    for (let index = 0; index < length; index++) {
        let sumVal = 0
        for (let index2= index; index2 < length; index2++) {
            let sumVal2 = 0
            if(index !== index2 || index2 === length){
                // console.log("index2===>",index2);
                
                for (let index3 = index2; index3 > 0; index3--) {
                    // console.log("index3===>",index3)
                    // console.log("index3===>",index3)
                    // console.log("index3",inputArr[index3-1]);
                    sumVal2 +=inputArr[index3-1] 
                    
                }
                
                console.log("sumVal2",sumVal2);
                console.log("sumVal",sumVal);
                
                sumVal += inputArr[index2] 

            }
            
            // console.log("index",index);
            
        }
        // console.log(arr);
        
    }
})

sumUpFnCore({inputArr:array})

const getListSubArr = (({inputArr})=>{
    const subListArr = [] 
    for (let index = 0; index < inputArr.length; index++) {
        for (let index2 = index; index2 < inputArr.length; index2++) {
            subListArr.push(inputArr.slice(index,index2+1))
        }
    }
    return subListArr

})
// console.log(getListSubArr({inputArr:array}))

