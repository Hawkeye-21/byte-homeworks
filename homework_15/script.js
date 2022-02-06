//Task 1

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  data: [{ is_active : isActive }], 
  meta: {
    paging: { total: myTotal }
  }, } = response;


//console.log(response);

console.log(isActive);
console.log(myTotal);
console.log(response.meta.paging.total);
console.log(response.data[1].is_active);

//TAsk 2

const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const { name, surname, ...parameters } = user;
console.log(`name`, name);
console.log(`surname`, surname);
console.log(`parameters`, parameters);

//Task 3

const max = (a, b) => {
  return a > b ? a : b;
};

const myMaxNumber = (...numbers) => {
  let max = 0;
  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
   
  });

  return max;
  
};

console.log(myMaxNumber(17, 89, 0, 25));

//Task 4

// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };

const createMessage = ({
    author = "Guest",
    text,
    reciever,
    time = new Date()
  }) => {
  return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

//const message = createMessage("Peter", "Hello", "Sam", new Date());

// после выполнения этого задания, функция должна коректно работать с таким аргументом
const message = createMessage({
  reciever: "John",
  text: "Hi!",
});

console.log(message);

//Task 5

// 1

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
// для строки str результат должен быть следующий:
// [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]

let result = str.match(/\w\d+\w/gi); 
console.log(result);

// 2

// "ex.ua, google.com, yandex.ru, site.com.ua, my-page.com";

let regExDomain = /^([\w.-]+)(\.)([a-z]){2,}$/i;
console.log(regExDomain.test('ex.ua'));
console.log(regExDomain.test('google.com'));
console.log(regExDomain.test('yandex.ru'));
console.log(regExDomain.test('site.com.uam'));
console.log(regExDomain.test('my-page.com'));

// 3
let stroka1 = '123456789101112';
let stroka2 = '12345';
let regExDom = /^(\d){12,}$/;
let res1 = regExDom.test(stroka1);
alert(res1);
//console.log(regExDom.test(stroka2));
let res2 = regExDom.test(stroka2);
alert(res2);
