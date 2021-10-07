const toggleDropdown = () => {
  const popupParent = document.querySelector('.dropdown');

  popupParent.addEventListener('click', function (e) {
    let target = e.target;

    if (target.closest('.dropdown__button')) {
      this.classList.toggle('active');
    }
  })
};
toggleDropdown();

const togglePopup = () => {
  const popupParent = document.querySelector('.header');
  const popupContent = document.querySelector('.cart');

  popupParent.addEventListener('click', e => {
    let target = e.target;

    if (target.closest('.cart-btn')) {
      popupContent.classList.add('active')
    } else if (target.closest('.cart__close') || target === popupContent) {
      popupContent.classList.remove('active')
    }
  })
};
togglePopup();

const sliderWithSlideOnePerView = (sliderSelector) => {
  const slider = document.querySelector(sliderSelector);

  if (slider) {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
sliderWithSlideOnePerView('.hero-slider');

const sliderBrands = (sliderSelector) => {
  const slider = document.querySelector(sliderSelector);

  if (slider) {
    const swiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 140,
      loopFillGroupWithBlank: true,
    });
  }
}
sliderBrands('.brands__slider');

const mix = () => {
  const containerEl1 = document.querySelector('[data-ref="container-1"]');
  const containerEl2 = document.querySelector('[data-ref="container-2"]');

  const config = {
    controls: {
      scope: 'local'
    }
  }

  const mixer1 = mixitup(containerEl1, config);
  const mixer2 = mixitup(containerEl2, config);
}
mix();


// const togglePopup = (popupBtnEl, popupParentEl, popupContentEl, popupCloseBtn, activeClass) => {
//   const popupBtn = document.querySelector(popupBtnEl);
//   const popupParent = document.querySelector(popupParentEl);
//   const popupContent = document.querySelector(popupContentEl);
//   const popupCloseBtn = document.querySelector(popupCloseBtn);

//   popupParent.addEventListener('click', e => {
//     let target = e.target;

//     if (target.matches('.cart-btn')) {
//       popupContent.classList.add(activeClass)
//     }
//   })
// };

// togglePopup('.cart-btn', '.header', '.cart', '.cart__close', 'active');


// window.addEventListener('onload', () => {
//   slideRangeOne();
//   slideRangeTwo();
// })

// const sliderHero = document.querySelector('.hero-slider');
// if (sliderHero) {
//   const swiper = new Swiper(sliderHero, {
//     slidesPerView: 1,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }

// * Filters


// // * Потом сделаю универсальную
// const togglePopup = () => {
//   const popupParent = document.querySelector('.header');
//   const popupContent = document.querySelector('.cart');

//   popupParent.addEventListener('click', e => {
//     let target = e.target;

//     if (target.closest('.cart-btn')) {
//       popupContent.classList.add('active')
//     } else if (target.closest('.cart__close') || target === popupContent) {
//       popupContent.classList.remove('active')
//     }
//   })
// };
// togglePopup();




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

// * Набросок
// const cart = () => {
//   const increaseBtn = document.querySelector('#increase');
//   const decreaseBtn = document.querySelector('#decrease');
//   const quantityEl = document.querySelector('.product-cart__quantity');

//   const itemPrice = document.querySelector('#item-one-price');
//   const itemAllPrice = document.querySelectorAll('#item-all-price');
//   const priceEl = document.querySelectorAll('.price');
//   const totalPriceEl = document.querySelector('.cart__total-price');

//   let value = Number(quantityEl.textContent);

//   let valueItem = Number(itemPrice.textContent);

//   let price = value * valueItem;

//   // let allPrice =

//   decreaseBtn.addEventListener('click', e => {
//     value--;
//     price -= valueItem;
//     quantityEl.textContent = value;
//     itemAllPrice.textContent = price

//     if (value <= 1) {
//       value = 1;
//       price = valueItem;
//     }
//   });

//   increaseBtn.addEventListener('click', e => {
//     value++;
//     price += valueItem;
//     quantityEl.textContent = value;
//     itemAllPrice.textContent = price;
//   });

//   itemAllPrice.forEach(item => {
//     // totalPriceEl.textContent += Number(item)
//     // totalPriceEl.textContent = item;

//   })

// }
// cart();

// const mixerStock = mixitup('#top-stock');

// * Show More

// const showHiddenEl = (showBtnEl, contentEl, activeClass) => {
//   const showBtn = document.querySelector(showBtnEl);
//   const content = document.querySelector(contentEl);

//   showBtn.addEventListener('click', e => {
//     content.classList.toggle(activeClass);
//   });
// };

// showHiddenEl('.dropdown__button', '.dropdown__menu', 'active');
// showHiddenEl('.dropdown__button', '.dropdown__menu', 'active');




// ! Product slideer
// const sliderHero = document.querySelector('.hero-slider');
// if (sliderHero) {
//   const swiper = new Swiper(sliderHero, {
//     slidesPerView: 1,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }

// var swiper = new Swiper(".product-section__preview", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// ! Tab
// function tabsProducts(
//   headerSelector,
//   tabSelector,
//   contentSelector,
//   activeClass
// ) {
//   const header = document.querySelectorAll(headerSelector);
//   const tab = document.querySelectorAll(tabSelector);
//   const content = document.querySelectorAll(contentSelector);

//   hideTabContent();
//   showTabContent();

//   function hideTabContent() {
//     content.forEach((item) => {
//       item.classList.remove('active');
//     });
//     tab.forEach((item) => {
//       item.classList.remove(activeClass);
//     });
//   }

//   function showTabContent(i = 0) {
//     content[i].classList.add('active');
//     tab[i].classList.add(activeClass);
//   }

//   header.forEach((item) => {
//     item.addEventListener('click', (e) => {
//       const target = e.target;
//       if (
//         target.classList.contains(tabSelector.replace(/\./, '')) ||
//         target.classList.parentNode.contains(tabSelector.replace(/\./, ''))
//       ) {
//         tab.forEach((item, i) => {
//           if (target == item || target.parentNode == item) {
//             hideTabContent();
//             showTabContent(i);
//           }
//         });
//       }
//     });
//   });
// }
// tabsProducts(
//   '.tab__list',
//   '.tab__button',
//   '.tab__body-list',
//   'tab__button--active'
// );
// window.addEventListener('DOMContentloaded', () => {
//   tabsProducts(
//     '.tab__list',
//     '.tab__button',
//     '.tab__body-list',
//     'tab__button--active'
//   );
// });

// ! Sldier
// const sliderRec = document.querySelector('.recommendations__slider');
// if (sliderRec) {
//   const swiper = new Swiper(sliderRec, {
//     slidesPerView: 1,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }

// const sliderRec = document.querySelector('.recommendations__slider');
// const nextBtn = document.querySelector('.arrow-next');
// const prevBtn = document.querySelector('.arrow-prev');

// if (sliderRec) {
//   const swiper = new Swiper(sliderRec, {
//     slidesPerView: 4,
//     slidesPerGroup: 4,
//     loop: true,
//     spaceBetween: 30,
//     loopFillGroupWithBlank: true,
//     navigation: {
//       nextEl: nextBtn,
//       prevEl: prevBtn,
//     },
//   });
// }

// const x = document.getElementsByClassName('slider');
// console.log('x:', x);

// for (let i = 0; i < x.length; i++) {
//   const el = x[i];

//   const swiper = el.getElementsByClassName('recommendations__slider')[0];
//   const nx = el.getElementsByClassName('swiper-next')[0];
//   const pr = el.getElementsByClassName('swiper-prev')[0];

//   new Swiper(swiper, {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     spaceBetween: 30,
//     navigation: {
//       nextEl: nx,
//       prevEl: pr,
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       420: {
//         slidesPerView: 1,
//       },
//       576: {
//         slidesPerView: 2,
//       },
//       900: {
//         slidesPerView: 3,
//       },
//       1024: {
//         slidesPerView: 4,
//       },
//     },
//   });
// }