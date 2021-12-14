
 const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};
  

function sumSalaries(salaries) {
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key] * 100;
  }
  return sum / 100;
};


console.log(sumSalaries(salaries));