// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("EXERCISE 1 \n")
let numberArray = [1, 3, 5];
let reverse = numberArray.reverse();
console.log("reverting the array element: ", reverse)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("EXERCISE 2 \n")
console.log("largest number in an array: ", Math.max(...numberArray))


/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("EXERCISE 3 \n")
console.log("largest number in an array: ", Math.min(...numberArray))

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("EXERCISE 4 \n")
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let evenArray = newArray.filter(number => {
    return number % 2 === 0;
});
console.log(evenArray);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("EXERCISE 5 \n")
let oddArray = [];
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 !== 0) {
        oddArray.push(newArray[i]);
    }
}
console.log("odd number: ", oddArray)

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log("EXERCISE 6 \n")
let text = "Hello World"
let noVowels = text.replace(/[aeiou]/gi, '');
console.log(noVowels)

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.

*/

console.log("EXERCISE 7 \n")
let numArray = [3, 4, 2, 1, 5];
numArray.forEach((num, index) => {
    numArray[index] = num + 1;
});
console.log(numArray)


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("EXERCISE 8 \n")
let stringArray = ["strive", "is", "great"];
for (let i = 0; i < stringArray.length; i++) {
    let stringLengthTemp = stringArray[i].length;
    stringArray[i] = stringLengthTemp;

}
console.log(stringArray)
