/* Question 01 : Do the below programs in anonymous function & IIFE */
/* Question 03 : Do the below programs in arrow functions */

/* a. Print odd numbers in an array */

// Anonymous Function

let inputArray = [1, 2, 3, 4, 5];

let result = [];

let oddNumbers = function () {

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] % 2 != 0) {

            result.push(inputArray[i]);

        }
    }

    console.log(result);

}

oddNumbers();

//****************************************************************

// IIFE

(function (inputArray1) {

    let result1 = [];

    for (let i = 0; i < inputArray1.length; i++) {

        if (inputArray1[i] % 2 != 0) {

            result1.push(inputArray1[i]);

        }
    }

    console.log(result1);

})([5, 6, 7, 8, 9]);

//****************************************************************

// Arrow Function

let oddNumbers1 = (inputArray2) => {

    let result2 = [];

    for (let i = 0; i < inputArray2.length; i++) {

        if (inputArray2[i] % 2 != 0) {

            result2.push(inputArray2[i]);

        }
    }

    console.log(result2);

}

oddNumbers1([11, 12, 13, 14, 15]);


//**************************************************************************************************************************

/* b. Convert all the strings to title caps in a string array */

// Anonymous Function

let inputString = "hi EveryONe, GuVI onliNe clasS";

let titleCaps = function () {

    let string = inputString.toLowerCase().split(' ');

    // console.log(string);

    for (let i = 0; i < string.length; i++) {

        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);

        // console.log(string[i]);

    }

    let result = string.join(' ');

    console.log(result);
}

titleCaps();

//****************************************************************

// IIFE

(function (inputString1) {

    let string1 = inputString1.toLowerCase().split(' ');

    // console.log(string1);

    for (let i = 0; i < string1.length; i++) {

        string1[i] = string1[i].charAt(0).toUpperCase() + string1[i].slice(1);

        // console.log(string1[i]);

    }

    let result = string1.join(' ');

    console.log(result);

})("hi EveryONe, GuVI onliNe clasS");

//****************************************************************

// Arrow Function

let titleCaps1 = (inputString3) => {

    let string2 = inputString3.toLowerCase().split(' ');

    // console.log(string2);

    for (let i = 0; i < string2.length; i++) {

        string2[i] = string2[i].charAt(0).toUpperCase() + string2[i].slice(1);

        // console.log(string2[i]);

    }

    let result1 = string2.join(' ');

    console.log(result1);

}

titleCaps1("hi EveryONe, GuVI onliNe clasS");

//**************************************************************************************************************************

/* c. Sum of all numbers in an array */

// Anonymous Function

let inputNumbers = [98, 84, 08, 42, 04];

let sumOfNumbers = 0;
let sumOfNumbers1 = 0;

let sumOfArray = function () {

    for (let i = 0; i < inputNumbers.length; i++) {                                   //for loop

        sumOfNumbers = sumOfNumbers + inputNumbers[i];
    }

    inputNumbers.forEach((i) => { sumOfNumbers1 = sumOfNumbers1 + i });               //forEach loop

    console.log(sumOfNumbers);
    // console.log(sumOfNumbers1);

}

sumOfArray();

//****************************************************************

// IIFE

(function () {

    let sumOfNumbers2 = 0;
    let sumOfNumbers3 = 0;

    for (let i = 0; i < inputNumbers.length; i++) {                                   //for loop

        sumOfNumbers2 = sumOfNumbers2 + inputNumbers[i];
    }

    inputNumbers.forEach((i) => { sumOfNumbers3 = sumOfNumbers3 + i });               //forEach loop

    console.log(sumOfNumbers2);
    // console.log(sumOfNumbers3);

})([98, 84, 08, 42, 04]);

//****************************************************************

// Arrow Function

let sumOfArray1 = (inputNumbers1) => {

    let sumOfNumbers4 = 0;
    let sumOfNumbers5 = 0;

    for (let i = 0; i < inputNumbers1.length; i++) {                                   //for loop

        sumOfNumbers4 = sumOfNumbers4 + inputNumbers1[i];

    }

    inputNumbers1.forEach((i) => { sumOfNumbers5 = sumOfNumbers5 + i });               //forEach loop

    console.log(sumOfNumbers4);
    // console.log(sumOfNumbers5);

}

sumOfArray1([98, 84, 08, 42, 04])

//**************************************************************************************************************************

/* d. Return all the prime numbers in an array */

// Anonymous Function

let arrayOfNumbers = [12, -1, 16, 19, 121, -111, 29, 62, 63, 71];
let resultForPrimeNumbers = [];

let primeNumber = function (num) {

    let count = 0;

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    if (count <= 2) {
        return true;
    } else {
        return false;
    }

}

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (primeNumber(arrayOfNumbers[i]) && arrayOfNumbers[i] >= 0) {
        resultForPrimeNumbers.push(arrayOfNumbers[i]);
    }
}

console.log(resultForPrimeNumbers);

//****************************************************************

// IIFE

(function (num1) {

    let primeNumber1 = [];

    for (let i = 0; i < num1.length; i++) {

        let count = 0;

        if (num1[i] >= 0) {

            for (let j = 1; j <= num1[i]; j++) {

                if (num1[i] % j === 0) {
                    count++;
                }

            }

            if (count <= 2) {
                primeNumber1.push(num1[i]);
            }

        }

    }

    console.log(primeNumber1)

})([2, -3, 6, 9, 12, -11, 29, 26, 53, 58]);

//****************************************************************

// Arrow Function

let primeNum = (num2) => {

    let primeNumber2 = [];

    for (let i = 0; i < num2.length; i++) {

        let count = 0;

        if (num2[i] >= 0) {

            for (let j = 1; j <= num2[i]; j++) {

                if (num2[i] % j === 0) {
                    count++;
                }

            }

            if (count <= 2) {
                primeNumber2.push(num2[i]);
            }

        }

    }

    console.log(primeNumber2)

}

primeNum([21, -13, 76, 29, 11, -11, 91, 26, 53, 89]);

//**************************************************************************************************************************

/* e. Return all the palindromes in an array */

// Anonymous Function

let arrayInput = ['123', '121', '98889', '12321', '1234521', 'malayalam', 'abcd', 'madam', 'maddam', 'check'];
let resultOfPalindrome = [];

let palindrome = function () {

    for (let i = 0; i < arrayInput.length; i++) {

        let inputString1 = arrayInput[i];
        let reveresedString = inputString1.split('').reverse().join('');

        if (inputString1 == reveresedString) {

            resultOfPalindrome.push(inputString1);
        }

    }

    console.log(resultOfPalindrome);

}

palindrome();

//****************************************************************

// IIFE

(function (arrayInput1) {

    let resultOfPalindrome1 = [];

    for (let i = 0; i < arrayInput1.length; i++) {

        let inputString2 = arrayInput1[i];
        let reveresedString1 = inputString2.split('').reverse().join('');

        if (inputString2 == reveresedString1) {

            resultOfPalindrome1.push(inputString2);

        }

    }

    console.log(resultOfPalindrome1);

})(['97879', '2112', '1234', '12321', '1234521', 'racecar', 'abcd', 'madam', 'maddam', 'check']);

//****************************************************************

// Arrow Function

let palindrome2 = (arrayInput2) => {

    let resultOfPalindrome2 = [];

    for (let i = 0; i < arrayInput2.length; i++) {

        let inputString3 = arrayInput2[i];
        let reveresedString2 = inputString3.split('').reverse().join('');

        if (inputString3 == reveresedString2) {

            resultOfPalindrome2.push(inputString3);

        }

    }

    console.log(resultOfPalindrome2);

}

palindrome2(['123', '121', '1234', '12321', '1234521', 'racecar', 'abcd', 'madam', 'maddam', 'check']);

//**************************************************************************************************************************



function pairwithgivenDiff(list, diff){
    let set = new Set()
    for(let i=0; i<list.length; i++){
        let e = list[i]
        if(set.has(diff + e)) {
            return[diff + e, e]
        }
        if(set.has(e-diff)){
            return [e-diff,e]
        }
        set.add(e)
    }
    return[]
}
console.log(pairwithgivenDiff([5,20,3,2,50,80],78))


function subArraySum(list, target){
    let sum = 0
    let map = new Map()
    for (let i =0; i < list.length; i++){
        sum += list[i]
        if (map.has(target -sum)){
            return [map.get(target -sum),i+1]
        }
        if (map.has(sum - target)){
            return [map.get( sum - target),i+1]
        }
        map.set(sum, i)
    }
    if (sum === target){
        return [0, list.length - 1]
    }
    return[]
}
console.log(subArraySum([1,2,3,7,5], 12))