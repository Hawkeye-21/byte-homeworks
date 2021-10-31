

let num1 = Number(prompt('Введите первое число: '));
let num2 = Number(prompt('Введите второе число: '));
let expression = prompt('Выберите оператор ( + - / * )');

switch (expression) {
  case "+":
    alert(num1 + num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  case "*":
    alert(num1 * num2);
        break;
    case "/":
    alert(num1 / num2);

  default:
    alert("Не знаю такого!!!!");
}