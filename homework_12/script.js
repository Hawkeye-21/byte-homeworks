const createTooltip = (element, text) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');

  tooltip.innerHTML = text;

  document.body.append(tooltip);
console.log(tooltip);
//вычисляем координаты
  
  const coordsTooltip = element.getBoundingClientRect();
  console.log(coordsTooltip);

  const tooltipTop = coordsTooltip.top - 10 - tooltip.clientHeight;
  console.log(tooltipTop);
  console.log(tooltip.clientHeight);

  const tooltipLeft = coordsTooltip.left + coordsTooltip.width / 2 - tooltip.clientWidth / 2;
   console.log(tooltipLeft);


  tooltip.style.left = `${tooltipLeft}px`;
  tooltip.style.top = `${tooltipTop}px`;

}

const button = document.getElementById('example');

createTooltip(button, 'example text bla bla bla');