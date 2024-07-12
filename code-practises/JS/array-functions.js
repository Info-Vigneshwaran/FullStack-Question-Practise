// const checkPalindrome = ((palin)=>{
//     return palin.split("").reverse("").join("") === palin
// })

// var prompt = require('prompt');

//   //
//   // Start the prompt
//   //
//   prompt.start();

//   //
//   // Get two properties from the user: username and email
//   //
//   prompt.get(['Str1', 'Str2'], function (err, result) {
//     //
//     // Log the results.
//     //
//     console.log('Command-line input received:');
//     console.log('  Str1: ' + checkPalindrome(result.Str1));
//     console.log('  Str2: ' + result.Str2);
//   });


// let arr = [1,2,3,4,5]
// // arr.length = 0
// // console.log(arr)
// console.log(typeof arr);
// console.log(typeof typeof NaN);

// let [a, ,b] = [1,2,3,4]
// console.log(`${a} ${b}`);

// const {4:x} = ['a','b','c','d','e','f']
// console.log(`${x}`);

const input = [2,7,11,4,-2]
// output = [20,15,11,18,24]

const splitedArr = input.map((value,index,array)=>{
    let xx = 0;
    return array.reduce((re_accu,re_value,re_index,re_array)=>{
        console.log('re_value===>',re_value);
        if(re_index !== index) {
            return xx += re_value
        }
        // console.log(`re_index===>${re_index}`);
        // console.log(`index===>${index}`);
        // console.log(`re_array===>${re_array}`);
    })
})

console.log(splitedArr);