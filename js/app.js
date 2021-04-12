document.addEventListener('DOMContentLoaded', ()=>{


    // mobile nav

    let openBtn = document.querySelector('.mobile__trigger'),
        closeBtn = document.querySelector('.mobile__close'),
        navOverlay = document.querySelector('.mobile__overlay'),
        mobileMenu = document.querySelector('.menu'),
        open = 0;

        openMenu = () => {
            if(open === 0) {
                navOverlay.classList.add('active');
                mobileMenu.classList.add('active');

                open = 1;
            } 
        }

        closeMenu = () => {
            if(open === 1) {
                navOverlay.classList.remove('active');
                mobileMenu.classList.remove('active');

                open = 0;
            } 
        }

        openBtn.addEventListener('click', ()=> {

            openMenu();

        });

        closeBtn.addEventListener('click', ()=> {

            closeMenu();

        });



// Slider

   
    let sliderPrev   = document.querySelector('.slide-control--prev'),
        sliderNext   = document.querySelector('.slide-control--next'),
        slideImages  = document.querySelectorAll('.slide__img'),
        slideContent = document.querySelectorAll('.slide__info'),
        current = 0;

    reset = () => {
        for(let i = 0; i < slideImages.length; i++) {
            slideImages[i].classList.remove('active');
            
        }
        for(let e = 0; e < slideContent.length; e++) {
            slideContent[e].classList.remove('active');
        }
    }

    startSlide = () => {
        reset();
        slideImages[0].classList.add('active');
        slideContent[0].classList.add('active');
    }

    prevSlide = () => {
        reset();
        slideImages[current - 1].classList.add('active');
        slideContent[current - 1].classList.add('active');
        current -- ;
    }

    nextSlide = () => {
        reset();
        slideImages[current + 1].classList.add('active');
        slideContent[current + 1].classList.add('active');
        current++;
        
    }

    sliderPrev.addEventListener('click', (e) => {
        e.preventDefault();
        if(current === 0 ) {
            current = slideImages.length;  
        }
        prevSlide();
    });
    
    sliderNext.addEventListener('click', (e) => {
        e.preventDefault();
        if(current === slideImages.length - 1 ) {
            current = -1
        }  
        nextSlide();
    });
    
    
    startSlide();

});