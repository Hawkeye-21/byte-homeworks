
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

alert( getRandomArbitrary(12, 50) );
alert(getRandomArbitrary(1, 5));

const randomNum = getRandomArbitrary(12, 50);
console.log(randomNum);