// const slides = [...document.querySelectorAll(".slide")];
// console.log(slides);

document.getElementById('next').addEventListener('click',(event) => {
    const nextBtn = document.querySelectorAll('.img-galery'); 
    console.log(nextBtn);
    for (let i = 0; i < nextBtn.length; i++) {
        if (!nextBtn[i].classList.contains('hidden')) {
            console.log(nextBtn[i]);
            nextBtn[i].classList.toggle('hidden');
            nextBtn[(i+1 < nextBtn.length ? i+1 : 0)].classList.toggle('hidden');
            break;
        }
    }
});

document.getElementById('prev').addEventListener('click',(event) => {
    const prevBtn = document.querySelectorAll('.img-galery');
    for (let i = prevBtn.length-1; i >= 0; i--) {
        if (!prevBtn[i].classList.contains('hidden')) {
            prevBtn[i].classList.toggle('hidden');
            prevBtn[(i-1 >= 0 ? i-1 : prevBtn.length-1)].classList.toggle('hidden');
            break;
        }
    }
});