
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
let node = []
function recursiveSearch(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].children) {
            recursiveSearch(arr[i].children);
        }
        node.push(arr[i].name)
    }
   
}

// recursiveSearch(data)

const array = [1, 2, 3, 4]

function getSubArrays(arr) {
    const subArrays = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    return subArrays;
}
console.log(getSubArrays(array));

const sumUpFn = (arr)=>arr.map((number)=>arr.filter((value)=>value!== number).reduce((acc,val)=>acc+val,0))

console.log(sumUpFn(array));