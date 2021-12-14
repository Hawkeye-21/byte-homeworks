
const registration = () => {
  
  let userName;
  let userSurname;
  let userPassword;

  const validUserPаssword = (userPassword) => {
     if (userPassword.toLowerCase()  !== userPassword &&
        userPassword.toUpperCase() !== userPassword &&
        userPassword.length >= 6) {
          return true;
      } else {
        alert("Некорректно введен пароль.Примеры корректных паролей: AbCxx12, 1234xY, abcdeF.");
         }
   }

  do {
    
    userName = prompt("Регистрация имени:");
      console.log(userName);
    if (!userName) {
           
      alert("Введите Имя");
      continue;
    }

    userSurname = prompt("Регистрация Фамилии:");
    if (!userSurname) {
      alert("Введите Фамилию");
      continue;
    }

    // userPassword = prompt("Регистрация Пароля:");
    // if (!userPassword) {
    //   alert("Введите пароль");
    //   continue;
    // }
    userPassword = prompt("Регистрация Пароля:");
    continue;
    
  } while (!userName || !userSurname || !validUserPаssword(userPassword));
  
  userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
  //console.log(userName);
  userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
  //console.log(userSurname);
  alert(`Вы успешно зарегистрирывались ${userName} ${userSurname} !!`)

};

registration();