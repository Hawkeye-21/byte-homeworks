
let count = 0;
let i, j;
function isPrime(start, fin) {
    for (j = start; j < fin; j++) {
        for (i = 1; i <= j; i++) {
      //console.log(`j: ${j} , i : ${i}`);
            if (j % i == 0)
                count++
        }
        if (count == 2)
            console.log(j)
        count = 0
    }
}
isPrime(1, 10);
isPrime(20, 100);




//Вариант решения через "метку":

// let primeNumbers = (start, fin) =>  {
   
//     nextPrime:
//     for (let i = start; i < fin; i++) { // Для всех i...

//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j == 0) continue nextPrime; // не подходит, берём следующее
            
//         }
//         // alert(i); // простое число
//         console.log(i);
//     }
    
// };

// primeNumbers(2, 10);
// primeNumbers(20, 100);


//Определение простого числа
// let num = 10;

// function isPrime(num) {
//     for (let i = 2; i < num; i++){
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// isPrime(10);
// console.log(isPrime(10));
