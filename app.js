// //////  1  ///////

// function findAverage(arr) {
//     const orta = arr.reduce((orifmetic, num) => orifmetic + num, 0);
//     return orta / arr.length;
// }
// const numbers = ([1, 3, 5, 7]);
// const average = findAverage(numbers);
// console.log(average); 


// //////  2  ///////


// function cutVowel(str) {
//     const vowels = 'aeiouAEIOU';
//     let result = '';
//     for ( let unli of str) {
//         if (vowels.includes(unli)) {
//             result += unli; 
//         }
//     }
//     return result; 
// }
// console.log(cutVowel("maktabga bor"));



// ///////////////  4  ////////////////


// function findFirstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1] + 1) {
//             return arr[i]; 
//         }
//     }
//     return null; 
// }
// let number = [1, 2, 3, 4, 6, 7, 8];
// let result = findFirstNonConsecutive(number);
// console.log(result); 


// //////  6  ////////


// const arr = [55, 23, 989, 10, 7009];

// let minValue = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minValue) {
//         minValue = arr[i];
//     }
// }
// console.log(minValue); 



// //////  9  //////


// function isTriangle(a, b, c) {
//     return (a + b > c) && (a + c > b) && (b + c > a);
// }
// let a = 3;
// let b = 3;
// let c = 3;
// if (isTriangle(a, b, c)) {
//     console.log("yasash mumkun");
// } else {
//     console.log("mumkun emas");
// }



// /////////   3  ////////////



// function replaceCharacters(inputString) {
//     const charCount = {};
//     for (const char of inputString) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return [...inputString].map(char => charCount[char] > 1 ? ')' : '(').join('');
// }
// const input = "hello world";
// const output = replaceCharacters(input);
// console.log(output);
