$('.owl-carousel').owlCarousel({
    loop:true, //navegar de forma infinita.
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})