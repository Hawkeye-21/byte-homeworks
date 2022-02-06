const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];
// const productsContainerEl = document.querySelector('.js-products');

const productsContainerEl = document.createElement('div');
document.body.append(productsContainerEl);

const makeProductCard = ({name, brand, properties}) => {

  const containerEl = document.createElement('div');
  containerEl.classList.add('container');
  // console.log(containerEl);

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');
  // console.log(nameEl);

  const brandEl = document.createElement('h3');
  brandEl.textContent = brand;
  brandEl.classList.add('product__brand');
  // console.log(brandEl);

  const propEl = document.createElement('ul');
  propEl.classList.add('product__prop');
  // console.log(propEl);
  
  properties.forEach((property) => {
    const propertyEl = document.createElement('li');
    propertyEl.innerText = property;
    propertyEl.classList.add('product__properties');

    propEl.append(propertyEl);
  });

  containerEl.append(nameEl, brandEl, propEl);

  return containerEl;
};

const elements = products.map(makeProductCard);
// console.log(elements);
productsContainerEl.append(...elements);
// console.log(productsContainerEl);