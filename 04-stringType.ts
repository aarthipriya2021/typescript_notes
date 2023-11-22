let studentName: string = "Dhoni";

var charAt = studentName.charAt(2) // Returns the character at the given index
console.log("charAt method of string - ", charAt);

var charCodeAt = studentName.charCodeAt(4)  // Returns a number that is the UTF-16 code unit value at the given index
console.log("charCodeAt method of string - ", charCodeAt);

var codePointAt = studentName.codePointAt(4)  // Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified index
console.log("codePointAt method of string - ", codePointAt);

var concat = studentName.concat("bhai") // Returns a combination of the two or more specified strings
console.log("concat method of string - ", concat);

var endsWith = studentName.endsWith("i")  //Checks whether a string ends with another string
console.log("endsWith method of string - ", endsWith);

var includes = studentName.includes('i')  // Checks whether a string includes another string
console.log("includes method of string - ", includes);

var indexOf = studentName.indexOf('o')  // Returns an index of first occurrence of the specified substring from a string (-1 if not found)
console.log("indexOf method of string - ", indexOf);

var lastIndexOf = studentName.lastIndexOf('h')  // Returns the index of last occurrence of value in the string
console.log("lastIndexOf method of string - ", lastIndexOf);

var length = studentName.length  // Returns the length of the string
console.log("length method of string - ", length);


export {}