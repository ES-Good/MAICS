var cases = new Swiper(".cases", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".cases-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cases-next",
      prevEl: ".cases-prev",
    },
    breakpoints:{
        1600:{
            slidesPerView: 2,
            spaceBetween: 200
        }
    }
  });

  var reviews = new Swiper(".reviews", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews-next",
      prevEl: ".reviews-prev",
    }
  });