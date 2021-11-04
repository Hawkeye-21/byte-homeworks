// task 1

    //1 вариант

        function getSum(a, b) {
            return  a + b;        
        }

        getSum(2, 3);
        console.log(getSum(2, 3));
        
    //2 вариант

    const getSum = (a, b) => a + b;
    console.log(getSum(13, 7));

//task 2

const name = prompt('Ваше имя?');
const age = Number(prompt('Сколько вам лет?'));
    
function getGreet(name, age) { 
    if (age >= 30) {
        return  alert(`Здавствуйте,  ${name}`);
    } else {
        return alert(`Привет,  ${name}`);    
        }  
}

getGreet(name, age);

//task 3

let n = 2;
function getDegree(a, n) {
    if (n < 2) {
        return a;
    } else {
        return a ** n;
    }
}

getDegree(3, 1);
getDegree(3, 4);
getDegree(-2, 5);

console.log(getDegree(3, 1));// 3
console.log(getDegree(3, 4));// 81
console.log(getDegree(-2, 5));// -32