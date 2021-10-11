const toggleDropdown = () => {
  const popupParent = document.querySelector('.dropdown');
  if (popupParent) {

    popupParent.addEventListener('click', function (e) {
      let target = e.target;

      if (target.closest('.dropdown__button')) {
        this.classList.toggle('active');
      }
    })
  }
};
toggleDropdown();

const toggleSearch = () => {
  const popupParent = document.querySelector('.form-search--mobile');
  const popupBtn = document.querySelector('.user-menu__item--search');
  if (popupParent) {

    popupBtn.addEventListener('click', e => {
      popupParent.classList.toggle('active')
    })
  }
};
toggleSearch();

const togglePopup = () => {
  const popupParent = document.querySelector('.header');
  const popupContent = document.querySelector('.cart');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  if (popupParent && popupContent) {
    popupParent.addEventListener('click', e => {

      let target = e.target;
      if (target.closest('.cart-btn')) {
        popupContent.classList.add('active');
        body.classList.add('no-scroll');
        overlay.classList.add('active');
      } else if (target.closest('.cart__close') || target === popupContent) {
        popupContent.classList.remove('active');
        body.classList.remove('no-scroll');
        overlay.classList.remove('active');
      }
    })
  }
};
togglePopup();

const togglePopup2 = () => {
  const openBtn = document.querySelector('.header__toggle');
  const closeBtn = document.querySelector('.mobile-menu__close');
  const menuContent = document.querySelector('.mobile-menu');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  if (openBtn && menuContent) {
    openBtn.addEventListener('click', e => {
      menuContent.classList.add('active');
      body.classList.add('no-scroll');
      overlay.classList.add('active');
      // hero.classList.add('overlay');
    });
    closeBtn.addEventListener('click', e => {
      menuContent.classList.remove('active');
      body.classList.remove('no-scroll');
      overlay.classList.remove('active');
      // hero.classList.remove('overlay');
    });
    menuContent.addEventListener('click', e => {
      console.log(e.target)
      if (e.target === menuContent) {
        menuContent.classList.remove('active');
        body.classList.remove('no-scroll');
        overlay.classList.remove('active');
      }
    });
  }
};
togglePopup2();

const sliderWithSlideOnePerView = (sliderSelector) => {
  const slider = document.querySelector(sliderSelector);

  if (slider) {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".hero__dots",
        clickable: true,
      },
    });
  }
}
sliderWithSlideOnePerView('.hero-slider');

const sliderBrands = (sliderSelector) => {
  const slider = document.querySelector(sliderSelector);

  if (slider) {
    const swiper = new Swiper(slider, {

      slidesPerView: 6,
      slidesPerGroup: 6,
      loopFillGroupWithBlank: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        420: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        576: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        768: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 90,
        },
        991: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 100,
        },
        1290: {
          spaceBetween: 140,
        }
      }
    });
  }
}
sliderBrands('.brands__slider');

const mix = (mixContainer1, mixContainer2) => {
  const containerEl1 = document.querySelector(mixContainer1);
  const containerEl2 = document.querySelector(mixContainer2);

  const config = {
    controls: {
      scope: 'local'
    }
  }

  if (containerEl1 || containerEl2) {
    const mixer1 = mixitup(containerEl1, config);
    const mixer2 = mixitup(containerEl2, config);
  }
}
mix('[data-ref="container-1"]', '[data-ref="container-2"]');

// // * Price Box (Castom Range Box)
// const customRangeBox = () => {
//   const rangeOne = document.querySelector('#range-1');
//   const rangeTwo = document.querySelector('#range-2');
//   const sliderTrack = document.querySelector('.sidebar-box__track');
//   const sliderMaxValue = document.querySelector('#range-1').max;

//   let displayValueOne = document.querySelector('#value-1');
//   let displayValueTwo = document.querySelector('#value-2');
//   let minStep = 0;

//   fillColor();

//   function slideRangeOne() {
//     if (parseInt(rangeTwo.value) - parseInt(rangeOne.value) >= minStep) {
//       rangeOne.value = parseInt(rangeTwo.value) - minStep
//     }

//     displayValueOne.textContent = rangeOne.value;
//     fillColor();
//   }

//   function slideRangeTwo() {
//     if (parseInt(rangeOne.value) - parseInt(rangeTwo.value) >= minStep) {
//       rangeTwo.value = parseInt(rangeOne.value) - minStep;
//     }

//     displayValueTwo.textContent = rangeTwo.value;
//     fillColor();
//   }

//   function fillColor() {
//     parcent1 = (rangeOne.value / sliderMaxValue) * 100;
//     parcent2 = (rangeTwo.value / sliderMaxValue) * 100;

//     sliderTrack.style.background = `linear-gradient(to right, #c4c4c4 ${parcent1}%, #63A60F ${parcent1}%, #63A60F ${parcent2}%, #c4c4c4 ${parcent2}%)`;
//   }

//   rangeOne.addEventListener('input', e => {
//     slideRangeOne();
//   });
//   rangeTwo.addEventListener('input', e => {
//     slideRangeTwo();
//   });
// }
// customRangeBox();

// * Show More




