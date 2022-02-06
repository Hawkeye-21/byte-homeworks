// import superHeroes from './superheroes.json';

let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// let requestURL = superHeroes;

let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();
//console.log(request);

request.onload = function() {
    let superHeroes = request.response;
    //console.log(request);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
  let myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  let myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  let heroes = jsonObj['members'];

  for (var i = 0; i < heroes.length; i++) {
    let myArticle = document.createElement('article');
    let myH2 = document.createElement('h2');
    let myPara1 = document.createElement('p');
    let myPara2 = document.createElement('p');
    let myPara3 = document.createElement('p');
    let myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    let superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      let listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// request.open('GET', requestURL);
// request.responseType = 'text'; // now we're getting a string!
// request.send();

// request.onload = function() {
//   let superHeroesText = request.response; // get the string from the response
//   let superHeroes = JSON.parse(superHeroesText); // convert it to an object
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// }

let myJSON = { "name": "Chris", "age": "38" };
console.log(myJSON);
let myString = JSON.stringify(myJSON);
console.log(myString);