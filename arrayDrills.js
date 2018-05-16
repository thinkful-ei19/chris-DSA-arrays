/*
URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. 
One solution that developers can use to solve this problem is to replace any spaces with a '%20'.
 Write a method that takes in a string and replaces all its empty spaces with a '%20'. 
 Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be
*/

function urlify (string) {
    return string.split('').map((character) => {
        if (character === ' ') {
            return '%20'
        } else {
            return character
        }
    }).join('')
}

console.log(urlify('tauhida parveen'))
console.log(urlify('www.thinkful.com /tauh ida parv een'))

/*
Filtering an array
Imagine you have an array of numbers.
Write an algorithm to remove all numbers less than five from the array.
Don't use array's built-in .filter method here; write the algorithm from scratch.
*/

function filter(array) {
    newArray = []
    array.forEach((number) => {
        if (number > 5) {
            newArray.push(number)
        }
    })
    return newArray;
}

console.log(filter([1, 2, 3, 4, 5 ,6 ,7 ,8 ,9]))

/*
Max sum in the array
You are given an array containing positive and negative integers. 
Write an algorithm which will find the largest sum in a continuous sequence.
*/

function maxSum(arr) {
    let max = 0;
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > max) {
            max = sum
        }
    }
    return max
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))

/*
Merge Arrays
Imagine you have two arrays which have already been sorted. 
Write an algorithm to merge the two arrays into a single array, which should also be sorted.
*/

function merge(arr1, arr2) {
    for (let i=0; i<arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1.sort((a,b) => a - b)
}

console.log(merge([1,3,6,8,11], [2,3,5,8,9,10]))

/*
Remove Characters
Write an algorithm that deletes given characters from a string. 
For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be removed are "aeiou", 
the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
Do not use Javascript's filter, split, or join methods.
*/


//Skipping for now
function removeCharacters(string, characters) {
    //Without using filter, split or join methods... I think the next best option would be Reg Exp

    // var regex = new RegExp(characters, "g")
    // return string.replace(regex, '')

    let arr = [];
    let characterArr = [];

    for (i=0; i<characters.length; i++) {
        characterArr.push(characters[i])
    }

    for (i=0; i<string.length; i++) {
        let match = false;
        characterArr.forEach((character) => {
            if (character === string[i]) {
                match = true
            }
        })
        if (match === true) {
            arr.push('')
        } else {
            arr.push(string[i])
        }
    } 
    let newString = '';
    for (i=0; i<arr.length; i++) {
        newString = String(newString) + String(arr[i])
    }
    return newString
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

/*
Products
Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index.
 */

 function products(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let total = 1;
        //For every number, loop through the array.
        for (let j = 0; j < arr.length; j++) {
            //If the indexes are the same, don't do anything, else multiply the total with the number
            if (j !== i) {
                total = arr[j] * total
            }
        }
        newArr.push(total)
    }
    return newArr
 }

 console.log(products([1, 3, 9, 4,]))
 console.log(products([1, 3, 9, 4, 4]))

/*
2D array
Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.
*/

/* 
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
*/

function noZeros(arr) {

    let zeroIndex = [] //Keeps track of where all the 0s are in each index

    for (i=0; i<arr[0].length; i++) {
        zeroIndex.push(1)
    } // We initiate zeroIndex to be all 1s, but mutate the 1s into 0s whenever we catch a 0 at the same index inside an array

    return arr.map((arr2) => {
        //Check if the array has a zero.
        let zeroIt = false

        for (i=0;i<arr2.length;i++) {
            if (arr2[i] === 0) {
                zeroIndex[i] = 0
                zeroIt = true
            }
        }

        //if zeroIt is true// if it has a zero
        if (zeroIt === true) {
            //Make the entire array 0
            let zeroArr = []
            for(i=0;i<arr.length;i++) {
                zeroArr.push(0)
            }
            return zeroArr //Slice horizontally
        } else {
            //return the array with the zeros sliced vertically.
            return zeroIndex //Slice Vertically
            //We are assuming that there is only 2 possibilities: all 0s in an array, or an array where all 1s are in the same spot.
        }
    })
}

console.log(noZeros(
    [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]))

/*
String rotation
Given two strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
*/

function stringRotation (string, string2) {
    sortedString2 = string2.split('').sort().join('') //bac => abc
    sortedString = string.split('').sort().join('')   //cab => abc
    if (sortedString === sortedString2) {
        return true
    } else {
        return false
    }
}

console.log(stringRotation('amazon', 'azonma'))
console.log(stringRotation('amazon', 'azonmsada'))