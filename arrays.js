// We create our array
const anArray = [1, "", 3, "", 5];

//Replace the 2nd element with 2
anArray[1] = 2;

//Replace the 4th element with 4
anArray[3] = 4;

//log it to make sure our changes happened
console.log(anArray);



// Create a new array
const numbers = [2,3,4]

//log the current length of the array
console.log(numbers.length)

// push the number 5 to the end of the array and log the array and its length
numbers.push(5)
console.log("--we pushed 5-- ")
console.log(numbers)
console.log(numbers.length)



// unshift the number 1 to the beginning of the array, then log the array and its length
numbers.unshift(1)
console.log("---We Just Unshifted 1---")
console.log(numbers)
console.log(numbers.length)