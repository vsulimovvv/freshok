const sliderHero = document.querySelector('.hero-slider');
if (sliderHero) {
  const swiper = new Swiper(sliderHero, {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// * Filters
const mixerContent = document.querySelector('#top-catalog');
if (mixerContent) {
  const mixerTop = mixitup('#top-catalog');
}

// * Потом сделаю универсальную
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

// const togglePopup = (popupBtnEl, popupParentEl, popupContentEl, popupCloseBtn, activeClass) => {
//   const popupBtn = document.querySelector(popupBtnEl);
//   const popupParent = document.querySelector(popupParentEl);
//   const popupContent = document.querySelector(popupContentEl);
//   const popupCloseBtn = document.querySelector(popupCloseBtn);

//   popupParent.addEventListener('click', e => {
//     let target = e.target;

//     if(target.matches('.cart-btn')){
//       popupContent.classList.add(activeClass)
//     }
//   })
// };

// togglePopup('.cart-btn', '.header', '.cart', '.cart__close', 'active');