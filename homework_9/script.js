const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

 

//1 вариант
// const filterData = (data, filterBy) =>
//   data.filter((item) =>
//     Object.entries(filterBy).every(([key, value]) =>
//       item[key] === value));
// // console.log(data.Object.entries(filterBy));
// let answer = filterData(data, { age: 24 });
// console.log(`answer`, answer);


//2 вариант - мой
// const filterData = data.filter(function (e) {
//   console.log(e);
//   return e.age == 24;
// });

// const filterData = data.filter(el => el.age == 24);
// const filterData = data.filter(el => el.age == 19 && el.position == "junior");
// const filterData = data.filter(el => el.age == 19 && el.isActive == false && el.position == "junior");
// console.log(filterData);

//3 вариант
// const filterData = (data, filterBy) => {
//   const filterNewMas = [];
//   for (let i = 0; i < data.length; i++) {
//     let isTrue = true;
//     for (let key in filterBy) {
//       if (data[i][key] !== filterBy[key]) {
//         isTrue = false;
//       }
//     }
//     if (isTrue) {
//       filterNewMas.push(data[i]);
//     }
//   }
//   return filterNewMas
// };
// let answer = filterData(data, { age: 24 });
// console.log(`answer`, answer);

//
//[
//     {
//         "name": "John",
//         "age": 24,
//         "position": "senior",
//         "isActive": false
//     },
//     {
//         "name": "Mary",
//         "age": 24,
//         "position": "middle",
//         "isActive": false
//     }
// ]

//4 вариант
// const filterData = (data, condObject) => {
//    let rezArr = [...data];
//    console.log(rezArr);
//         for (let curCond in condObject) {
//              console.log(`curCond`, condObject[curCond]);
//             rezArr = rezArr.filter((dataElem) => dataElem[curCond] === condObject[curCond]);
//         }
//         return rezArr;
//     }

//     filteredData = filterData(data, {age: 19, position: "junior" });
//     console.log('{age: 19, position: "junior" }')
//     console.log(`filteredData`, filteredData);





// const arr1 = [2, 4];
// const arr2 = [1, 3];
// const sum = arr1.map(function (value, index) {
//   console.log(value);
//   console.log(index);
//   return value + arr2[index];
//     }
// );

// console.log(sum);

// const arr1 = [2, 4];
// const arr2 = [1, 3];
// const arr3 = [];
// for (i = 0; i < arr1.length; i++){
//   arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);

// const sum2Arr = (arr1,arr2) => {
//             return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
//         }
//         console.log(sum2Arr([2,4], [1,3]), sum2Arr([2,4], [1,3]));
// console.log(sum2Arr([1, 7], [9, 3]), sum2Arr([1, 7], [9, 3]));
        
// let res = (arr1, arr2) => {
//     let arr = [];
//     arr.push(arr1[0] + arr2[0], arr1[1] + arr2[1]);
//     return arr;
// }
// let a = res ([1,7], [9,3]);
// console.log(  a, a );