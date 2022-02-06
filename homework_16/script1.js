const renderEnterPage = () => {
    const enterPage = document.createElement('h1');
    enterPage.innerText = `Добро пожаловать! :-)`;
    document.body.append(enterPage);
};

renderEnterPage();

const renderVisitPage = (updateVisits) => {
    const visitCountText = document.createElement('p');
    visitCountText.innerText = `Вы заходили раз: ${updateVisits}`;
    document.body.append(visitCountText);   
}

const updateVisitPage = () => {
    if (localStorage.getItem('visits')) {
        const visits = JSON.parse(localStorage.getItem('visits'));
        
        const updateVisits = visits + 1;
        //console.log(updateVisits);
        localStorage.setItem('visits', updateVisits);
        
      renderVisitPage(updateVisits);
      
  } else {
      localStorage.setItem('visits', 1);
    //    renderVisitPage();
  }
};

updateVisitPage();