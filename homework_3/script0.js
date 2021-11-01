let userNum1 = Number(prompt("Введите первое число:"));
let userNum2 = Number(prompt("Введите второе число:"));

if (userNum1 > userNum2) {
    alert('Число ' + userNum1 + ' больше, чем число ' + userNum2);
    } else if (userNum1 === userNum2) {
        alert("Числа равны");
        } else {
            alert('Число ' + userNum2 + ' больше, чем число ' + userNum1);
            }