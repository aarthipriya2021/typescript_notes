// pending add comments to each method
var fruits = ['Banana', 'Apple', 'Orange', 'Mango'];
var numbers = [1, 2, 3, 4];
var push = fruits.push('Sweet lime');
console.log("push method of array - ", fruits);
var pop = fruits.pop();
console.log("pop method of array - ", fruits);
var concatItems = ["Kiwi, Grapes, Pomengranate"];
var concat = fruits.concat(concatItems);
console.log("concat method of array - ", concat);
var copyWithin = numbers.copyWithin(2, 0, 2);
console.log('copyWithin method of array -', numbers);
// var fill = numbers.fill(6)
// console.log('fill method of array -', numbers);
var sort = fruits.sort();
console.log('sort method of array -', sort);
var numbersIndex = [2, 4, 6, 8];
var indexOf = numbersIndex.indexOf(4);
console.log('indexOf method of array -', indexOf);
var shift = fruits.shift();
console.log('shift method of array -', fruits);
var unshift = fruits.unshift('blueberry', 'guava');
console.log('unshift method of array -', fruits);
var numberSplice = [3, 6, 9, 2];
var spliceAdd = numberSplice.splice(4, 0, 10);
console.log('splice method of array -', numberSplice);
var spliceReplace = numberSplice.splice(2, 1, 5);
console.log('splice method of array -', numberSplice);
var spliceRemove = numberSplice.splice(2, 3);
console.log('splice method of array -', numberSplice);
var numberSlice = [10, 20, 30, 40];
var stringSlice = ["orange", "mango", "banana", "sugar", "tea"];
// var slice = numberSlice.slice(1,3)
console.log('slice(number) method of array -', numberSlice.slice(1, 3));
console.log('slice(string) method of array -', stringSlice.slice(1, 3));
