document.addEventListener('DOMContentLoaded', ()=>{

   
    let sliderPrev   = document.querySelector('.slide-control--prev'),
        sliderNext   = document.querySelector('.slide-control--next'),
        slideImages  = document.querySelectorAll('.slide__img'),
        slideContent = document.querySelectorAll('.slide__info');


    function nextSlide() {
        sliderNext.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Next clicked');
        });
    }

    nextSlide();

    function prevSlide() {
        sliderPrev.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Prev clicked');
        });
    }

    prevSlide();

});