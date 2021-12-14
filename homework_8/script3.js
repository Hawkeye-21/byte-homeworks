//const arr = [0, 1, 2];

function findExcess(arr) {
    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        }
    }

    if (evenArr.length > oddArr.length) {
        return oddArr[0];
    } else {
        return evenArr[0];
    }
}

const a = findExcess([0, 1, 2]);
const a1 = findExcess([1, 2, 3]); 
const a2 = findExcess([2, 6, 8, 10, 3]); 
const a3 = findExcess([0, 0, 3, 0, 0]); 
const a4 = findExcess([1, 1, 0, 1, 1]); 

console.log(a); // -> 1
console.log(a1); // -> 2
console.log(a2);// -> 3
console.log(a3);// -> 3
console.log(a4);// -> 0
