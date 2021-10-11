const hoverMenuDropdown = () => {
  // const parentEl = document.querySelector('.dropdown');
  const lineEl = document.querySelector('.dropdown__divider');
  const itemEl = document.querySelectorAll('.dropdown__item');

  lineEl.style.height = `${itemEl[0].offsetHeight}px`;
  itemEl.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {

      let target = e.currentTarget;
      lineEl.classList.add('active');
      lineEl.style.height = `${target.offsetHeight}px`;
      lineEl.style.top = `${target.offsetTop}px`;
    });
  });
  itemEl.forEach((el) => {
    el.addEventListener('mouseleave', (e) => {
      lineEl.classList.remove('active');
      lineEl.style.height = `${itemEl[0].offsetHeight}px`;
      lineEl.style.top = `0px`;
    });
  });
}
hoverMenuDropdown();

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

const modals = () => {
  function bindModal(openBtn, modal, close, overlay) {
    const openBtnEl = document.querySelector(openBtn);
    const modalEl = document.querySelector(modal);
    const closeEl = document.querySelector(close);
    const overlayEl = document.querySelector(overlay);

    openBtnEl.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault()
      }

      modalEl.classList.add('active');
      overlayEl.classList.add('active');
    });

    closeEl.addEventListener('click', e => {
      modalEl.classList.remove('active');
      overlayEl.classList.remove('active');
    });

    modalEl.addEventListener('click', e => {
      if (e.target === modalEl) {
        modalEl.classList.remove('active');
        overlayEl.classList.remove('active');
      }
    })
  }

  bindModal('.user-menu__item--cart', '.cart', '.cart__close', '.overlay');
  bindModal('.header__toggle', '.mobile-menu', '.mobile-menu__close', '.overlay');
};
modals();

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

function mix(mixContainer1, mixContainer2) {
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

// * Price Box (Castom Range Box)
const customRangeBox = () => {
  const rangeOne = document.querySelector('#range-1');
  const rangeTwo = document.querySelector('#range-2');
  const sliderTrack = document.querySelector('.sidebar-box__track');
  const sliderMaxValue = document.querySelector('#range-1').max;

  let displayValueOne = document.querySelector('#value-1');
  let displayValueTwo = document.querySelector('#value-2');
  let minStep = 0;

  fillColor();

  function slideRangeOne() {
    if (parseInt(rangeTwo.value) - parseInt(rangeOne.value) >= minStep) {
      rangeOne.value = parseInt(rangeTwo.value) - minStep
    }

    displayValueOne.textContent = rangeOne.value;
    fillColor();
  }

  function slideRangeTwo() {
    if (parseInt(rangeOne.value) - parseInt(rangeTwo.value) >= minStep) {
      rangeTwo.value = parseInt(rangeOne.value) - minStep;
    }

    displayValueTwo.textContent = rangeTwo.value;
    fillColor();
  }

  function fillColor() {
    parcent1 = (rangeOne.value / sliderMaxValue) * 100;
    parcent2 = (rangeTwo.value / sliderMaxValue) * 100;

    sliderTrack.style.background = `linear-gradient(to right, #c4c4c4 ${parcent1}%, #63A60F ${parcent1}%, #63A60F ${parcent2}%, #c4c4c4 ${parcent2}%)`;
  }

  rangeOne.addEventListener('input', e => {
    slideRangeOne();
  });
  rangeTwo.addEventListener('input', e => {
    slideRangeTwo();
  });
}
customRangeBox();

// * Show More

const dropSidebox = () => {
  const boxesTop = document.querySelectorAll('.sidebar-box__top');

  boxesTop.forEach(top => {
    top.addEventListener('click', e => {
      console.log(top.parentNode)
      top.parentNode.classList.toggle('active');
    });
  });
};

dropSidebox();

const showFilters = () => {
  const btn = document.querySelector('.filter-actions__button--filter');
  const sidebar = document.querySelector('.sidebar');

  btn.addEventListener('click', e => {
    sidebar.classList.add('active')
  });
};
showFilters();
const toggleView = () => {
  const items = document.querySelectorAll('.catalog__item');
  const list = document.querySelector('.catalog__list');
  const gridBtn = document.querySelector('.filter-actions__button--grid');
  const listBtn = document.querySelector('.filter-actions__button--list');

  gridBtn.addEventListener('click', e => {
    listBtn.classList.remove('active');
    gridBtn.classList.add('active');

    list.classList.remove('catalog__list--list');

    items.forEach(item => {
      item.classList.remove('product-card--stock');
    });
  });
  
  listBtn.addEventListener('click', e => {
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');

    list.classList.add('catalog__list--list');

    items.forEach(item => {
      item.classList.add('product-card--stock');
    });
  });
};
toggleView();