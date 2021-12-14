
// // const arr = ["a", "v", "a", "b", "b"];

// const arr = [
//   "apples",
//   "oranges",
//   "pears",
//   "pears",
//   "apples",
//   "oranges",
//   "oranges",
//   "pears",
// ];

// const getOccurrencesCount = (arr) => {
    
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
//     let a = arr[i];
//     if (result[a] != undefined) {
//           console.log(result[a]);
//               // console.log(arr[i]);
//             ++result[a];
  
//         } else {
//       result[a] = 1;
//       // console.log(a);
//       }
//     }
//   return result;
 
// }

// //let masive1 = getOccurrencesCount(arr);

// let masive2 = getOccurrencesCount(arr);

// // console.log(masive1);//2
// console.log(masive2);//0

const arr = ['a','v','a','b','b'];
const getOccurrencesCount = (arr) =>{
    const result = {};
       
    
    
    for (let item of arr) {
   
        if (!result[item] ) {
       
        result[item]=1;
        } else {
            result[item]+=1;
        }
 
    }
return result;

};
 const masive1 = getOccurrencesCount(arr);
 console.log(masive1);
 const masive2 = getOccurrencesCount(['apples','oranges', 'pears','pears','apples']);
 console.log(masive2);