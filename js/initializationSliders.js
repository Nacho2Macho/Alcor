if (document.querySelector(".main")) {
    new Swiper(".main__swiper", {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        simulateTouch: false,
        slidesPerGroup: 1,
        spaceBetween: 30,
        speed: 800,
        pagination: {
            el: '.main__swiper-pagination',
            type: 'bullets',
            clickable: true,
            direction: 'vertical',
        },
        // loop: true,
        // parallax: true,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        // breakpoints: {
        //     992: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        //     500: {
        //         slidesPerView: 2,
        //     },
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 10,
        //     },
        // },
    });
}