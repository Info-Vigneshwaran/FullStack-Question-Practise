// event loop example
// output 2,c,d,e,6,5,3
// console.log("2")
// setTimeout(()=>{console.log("3")},1000)
// const exArr = ["c","d","e"]
// exArr.forEach(element => {
//     console.log(element)
// });
// setTimeout(()=>{console.log("5")},0)
// console.log("6")

// function closure_check() {
//     setTimeout(()=>{
//         console.log(i)
//     },0)
//     let i=20
// }
// closure_check()

// var first = [1, 2, 3];
// var second = [2, 3, 4, 5];

// var common = first.filter((x) => (second.includes(x) ? true : false));
// console.log('The common elements are: ' + common);

// var a = [{ name: 'tc_001' }, { name: 'tc_002' }, { name: 'tc_003' }];
// a = a.filter(function (e) {
//   return e.name !== 'tc_001';
// });

// a = [...a, { name: 'tc_004' }];
// console.log(a);


// 3. flattenarray concept input = [1,2,3,[4,5],[6,7,8]] // output [1,2,3,4,5,6,7,8] 

// var x=20

// function foo(){
//     console.log(x)
//     var x =10;
// }

// foo()


// console.log(5 == '5')
// console.log(typeof NaN)
// let x = "12";
// console.log(typeof x)
// let y = +"12.88";

// console.log(`${typeof y} ${y}`)

// console.log(5 + + '3')

// console.log(`NaN check ${NaN === NaN}`)

// console.log(1<2<3)
// console.log(3>2>1)

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
