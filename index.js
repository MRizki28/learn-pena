// let evenNumbers = [];
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     evenNumbers.push(i);
//   }
// }
// console.log(evenNumbers);



// output
// [2,3,4,5,1]
// [3,4,5,1,2]
// [4,5,5,1,2]
// [5,1,5,1,2]
let array = [1,2,3,4,5];
let result = [array];

for (let i = 1; i < array.length; i++) {
    result.push(array.slice(i).concat(array.slice(0, i)));
}
console.log(result);