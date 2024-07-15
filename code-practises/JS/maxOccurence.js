const str2 = "this is javascript"

const occurenceChar = str2.replaceAll(" ","").split("").reduce((acc,value,index)=>{
    acc[value] = (acc[value] || 0) + 1;
    return acc;
},{})
console.log(occurenceChar);