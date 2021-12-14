const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
  let userPassword;
  let userLogin;
  let i = 3;// колличество попыток

  do {
    userLogin = prompt("Логин:");
    if (!userLogin) {
      alert("Введите логин");
      continue;
    }

    userPassword = prompt("Пароль:");
    if (!userPassword) {
      alert("Введите пароль");
      continue;
    }

    if (userPassword !== PASSWORD || userLogin !== LOGIN) {
      
      i--;
      alert(`Данные неверны! У вас осталась ${i} попытки(a)!!!`);
      
      continue

        } else {
          alert("Welcome!!!");
            }
    break;

  } while (i !== 0);
  
};

authorize();