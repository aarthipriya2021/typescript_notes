// pending add comments to each method

var fruits: string[] = ['Banana', 'Apple', 'Orange','Mango']
var numbers: number[] = [1, 2, 3, 4]

var push = fruits.push('Sweet lime')  //  Adds new elements to the array and returns the new array length
console.log("push method of array - ", fruits);

var pop = fruits.pop() // Removes the last element of the array and return that element
console.log("pop method of array - ", fruits);

var concatItems = ["Kiwi, Grapes, Pomengranate"]
var concat = fruits.concat(concatItems)    // Joins two arrays and returns the combined result
console.log("concat method of array - ", concat);

var copyWithin = numbers.copyWithin(2, 0, 2)  // Copies a sequence of elements within the array
console.log('copyWithin method of array -', numbers);

// var fill = numbers.fill(6)     // Fills the array with a static value from the provided start index to the end index
// console.log('fill method of array -', numbers);

var sort = fruits.sort()  //  returns the array elements in sorting orders.
console.log('sort method of array -', sort);

var numbersIndex: number[] = [2, 4, 6, 8] 
var indexOf = numbersIndex.indexOf(4)  //  Returns the index of the first match of a value in the array (-1 if not found)
console.log('indexOf method of array -', indexOf);

var shift = fruits.shift()   //  Removes and returns the first element of the array
console.log('shift method of array -', fruits);

var unshift = fruits.unshift('blueberry', 'guava')   //  Adds one or more elements to the beginning of the array
console.log('unshift method of array -', fruits);

var numberSplice: number[] = [3, 6, 9, 2]
var spliceAdd = numberSplice.splice(4, 0, 10)  //  Adds or removes elements from the array
console.log('splice method(element adds in array ) of array -', numberSplice);

var spliceReplace = numberSplice.splice(2, 1, 5)
console.log('splice method of array(element replace in array ) -', numberSplice);

var spliceRemove = numberSplice.splice(2, 3)
console.log('splice method of array(element removes in array ) -', numberSplice);

var numberSlice: number[] = [10, 20, 30, 40]
var stringSlice = ["orange", "mango", "banana", "sugar", "tea"]
// var slice = numberSlice.slice(1,3)
console.log('slice(number) method of array -', numberSlice.slice(1,3)); // Extracts a section of the array and returns the new array
console.log('slice(string) method of array -', stringSlice.slice(1,3));  //  Extracts a section of the array and returns the new array


