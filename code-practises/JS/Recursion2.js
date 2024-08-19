
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

console.log(recursiveSearch(data));

// console.log(node);

const array = [1, 2, 3, 4]

const sumUpFn = (arr)=>arr.map((number)=>arr.filter((value)=>value!== number).reduce((acc,val)=>acc+val,0))

console.log(sumUpFn(array));

const getListSubArr = (({inputArr})=>{
    const subListArr = [] 
    for (let index = 0; index < inputArr.length; index++) {
        for (let index2 = index; index2 < inputArr.length; index2++) {
            subListArr.push(inputArr.slice(index,index2+1))
        }
    }
    return subListArr

})
console.log(getListSubArr({inputArr:array}))

