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


let btnAudio = document.querySelectorAll('.btn-audio'); //кнопки воспроизведения
let audio = document.querySelectorAll('.audio');  //скрытые аудио фалы, находятся в вёрстке


for (let i = 0; i < btnAudio.length; i++) {
  btnAudio[i].onclick = function () { //клик по кнопке

    for (let k = 0; k < btnAudio.length; k++) {
      if (i == k) { //проверка на какой кнопке произошло событие(на остальных удаляет кроме той на которой произошло событие)

        if (btnAudio[i].classList.contains('btn-audio_active')) { // проверка на то если клик произошёл на уже играющем файле(ставит на паузу)

          btnAudio[k].classList.remove('btn-audio_active');
          audio[k].pause()

        }else{ //просто воспроизводит если первое условие не сработало

          btnAudio[i].classList.add('btn-audio_active');
          audio[i].play()

        }

      }else{ //останавливает

        btnAudio[k].classList.remove('btn-audio_active');
        audio[k].pause()

      }
    }

  }
}