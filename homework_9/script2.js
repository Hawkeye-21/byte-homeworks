//ownForEach

const ownForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

//ownMap

const ownMap = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    // Вызов переданного колбека на каждом элементе коллекции
    const newItem = callback(item);
    // Возврат из колбека добавляется в результирующий массив
    result.push(newItem);
  }

  return result;
};

// const ownMap = (arr, callback) => {
//     let resArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const operationResult = callback(arr[i], i, arr);
    
//         resArr.push(operationResult);
//     }
//     return resArr;
// };

//ownFilter

const ownFilter = (arr, callback) => {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        const operationResult = callback(arr[i], i, arr);
        
        if (operationResult) {
            resArr.push(arr[i]);
        }
        
    }
    return resArr;
};

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
    
};

console.log(ownForEach([1, 2, 3], logger));
console.log(ownMap([1, 2, 3], increment)); // [2, 3, 4]
console.log(ownFilter([-2, 4, -1], isNegative)); // [-2, -1]