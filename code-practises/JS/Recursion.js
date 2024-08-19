const counter = ((value)=>{
    if(value>0){
        console.log(value)
        value = value-1
        counter(value)
    }
})
// counter(5)

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
  
  let index = 0
  let index2 = 0
  const arr = []
  let hasChildren = false
  let childLength = 0
  const findItemNested = (inputArr) => {
    
    if(inputArr?.[index]) {
      hasChildren = inputArr[index]?.children?.length>0;
    }
    
    if(hasChildren){
      arr.push(inputArr[index].name)
      findItemNested(inputArr[index].children)
      index++  
      
    } else {
      if(Array.isArray(inputArr)) {
        childLength = inputArr.length
      }
      if(childLength -1 !== index2) {
        arr.push(inputArr[index2]?.name)

        ++index2
        findItemNested(inputArr[index2])
      }
      arr.push(inputArr.name)
      
    }
    
    return arr;
  };
  const res = findItemNested(data);
  console.log(res)

  // return arr.map((item)=>{
  //   const hasChildren = item?.children.length>0
  //     if(hasChildren){
  //         return findItemNested(item.children)
  //     } else if(!hasChildren) {
  //         return item.name
  //     }
  //     return item.name
  //  })