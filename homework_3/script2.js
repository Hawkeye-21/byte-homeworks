let myAge = 7; // любой возраст
let userAge = Number(prompt('Укажите свой возраст: '));
let withParents = confirm('Вы с родителями?');

if (userAge >= 19 && userAge <= 59) {
        alert('Вы допущены на аттракцион :-)');
    }
        else if (myAge <= 18 && myAge >= 60 || withParents === true) {
            alert('Вход с родителями на аттракцион РАЗРЕШЕН!');
        }
            else   {
                alert('Вход без родителей на аттракцион ЗАПРЕЩЕН!!!');
                alert('А можно взять с собой старшего брата или сестру с собой?');
            }