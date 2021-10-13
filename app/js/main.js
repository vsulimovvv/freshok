window.addEventListener('DOMContentLoaded', e => {
  sliderSingleProduct();
});

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

const togglePopup = (popup, popupBtn) => {
  const popupParentEl = document.querySelector(popup);
  const popupBtnEl = document.querySelector(popupBtn);

  if (popupParentEl) {
    popupBtnEl.addEventListener('click', e => {
      popupParentEl.classList.toggle('active')
    })
  }
}
togglePopup('.form-search--mobile', '.user-menu__item--search');
togglePopup('.dropdown', '.dropdown__button');
// togglePopup('.sidebar', '.filter-actions__button--filter');

const modals = () => {
  function bindModal(openBtn, modal, close, overlay) {
    const openBtnEl = document.querySelector(openBtn);
    const modalEl = document.querySelector(modal);
    const closeEl = document.querySelector(close);
    const overlayEl = document.querySelector(overlay);
    const body = document.querySelector('body');


    if (modalEl) {
      openBtnEl.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault()
        }

        modalEl.classList.add('active');
        overlayEl.classList.add('active');
        body.classList.add('no-scroll');
      });

      closeEl.addEventListener('click', e => {
        modalEl.classList.remove('active');
        overlayEl.classList.remove('active');
        body.classList.remove('no-scroll');
      });

      modalEl.addEventListener('click', e => {
        if (e.target === modalEl) {
          modalEl.classList.remove('active');
          overlayEl.classList.remove('active');
          body.classList.remove('no-scroll');
        }
      })
    };
  };

  bindModal('.user-menu__item--cart', '.cart', '.cart__close', '.overlay');
  bindModal('.header__toggle', '.mobile-menu', '.mobile-menu__close', '.overlay');
  bindModal('.filter-actions__button--show-filter', '.catalog__sidebar', '.sidebar__close', '.overlay');
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

const toggleFullSidebox = () => {
  const boxesTop = document.querySelectorAll('.sidebar-box__top');

  boxesTop.forEach(top => {
    top.addEventListener('click', e => {
      console.log(top.parentNode)
      top.parentNode.classList.toggle('active');
    });
  });
};
toggleFullSidebox();

const toggleView = () => {
  const items = document.querySelectorAll('.catalog__item article');
  const list = document.querySelector('.catalog__list');
  const gridBtn = document.querySelector('.filter-actions__button--grid');
  const listBtn = document.querySelector('.filter-actions__button--list');

  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', e => {
      listBtn.classList.remove('active');
      gridBtn.classList.add('active');

      list.classList.remove('catalog__list--list');

      items.forEach(item => {
        item.className = 'product-card product-card--catalog';
      });
    });

    listBtn.addEventListener('click', e => {
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');

      list.classList.add('catalog__list--list');

      items.forEach(item => {
        item.className = 'product-card product-card--row';
      });
    });
  }
};
toggleView();

const rangeSliderForPrice = () => {
  const rangeSlider = document.querySelectorAll('.range-slider');

  rangeSlider.forEach(item => {
    if (item) {
      noUiSlider.create(item, {
        start: [100, 1000],
        connect: true,
        step: 1,
        range: {
          'min': [50],
          'max': [1200]
        }
      });

      const input0 = document.getElementById('input-0');
      const input1 = document.getElementById('input-1');

      const inputs = [input0, input1];

      item.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        item.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
        el.addEventListener('change', e => {
          setRangeSlider(index, e.currentTarget.value);
        });
        el.addEventListener('input', e => {
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    };
  });
};
rangeSliderForPrice();

// Tab
function tabsProducts(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass
) {
  const header = document.querySelectorAll(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  if (content && header && tab) {

    hideTabContent();
    showTabContent();

    function hideTabContent() {
      content.forEach((item) => {
        item.classList.remove('active');
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      content[i].classList.add('active');
      tab[i].classList.add(activeClass);
    }

    header.forEach((item) => {
      item.addEventListener('click', (e) => {
        const target = e.target;
        if (
          target.classList.contains(tabSelector.replace(/\./, '')) ||
          target.classList.parentNode.contains(tabSelector.replace(/\./, ''))
        ) {
          tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
    });
  }
};
tabsProducts(
  '.tab__list',
  '.tab__button',
  '.tab__body-list',
  'tab__button--active'
);

const sliderGroup = () => {
  const sliderRec = document.querySelector('.recommendations__slider');
  const nextBtn = document.querySelector('.arrow-next');
  const prevBtn = document.querySelector('.arrow-prev');

  if (sliderRec) {
    const swiper = new Swiper(sliderRec, {
      slidesPerView: 4,
      slidesPerGroup: 4,

      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: ".swiper-pagination",
        // clickcable: true
      },
      breakpoints: {
        320: {
          spaceBetween: 5,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        800: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 28,
        },
      },
    });
  }
};
sliderGroup();

function sliderSingleProduct() {
  const slider = document.querySelector(".carousel");
  if (slider) {
    const myCarousel = new Carousel(slider, {
      'slidesPerPage': 1,
      'center': true
    });
  }
};