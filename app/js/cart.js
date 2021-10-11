window.addEventListener('DOMContentLoaded', e => {
  init();
  updateProductsInCart(document.querySelector('.cart__list').children.length);
});

const cartBodyEl = document.querySelector('.cart');
const cartListEl = document.querySelector('.cart__list');
const productBtn = document.querySelectorAll('.product-card__cart');
const totalPriceWrapper = document.querySelector('.cart__total-price');

let quantityProduct = 0;

const actions = {
  plus: 'plus',
  minus: 'minus'
};

const cartQuantityEl = document.querySelector('.user-menu__item--cart .user-menu__amount');

function updateProductsInCart(amount) {
  cartQuantityEl.textContent = amount;
};

function generateRandomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

function generateCardProduct(img, title, price, id) {
  return `
        <li class="cart__item">
          <article class="product-card product-card--cart" data-id=${id}>
            <div class="product-card__img">
              <img
                src="${img}"
                alt="Ананас">
            </div>
            <div class="product-card__bottom">
              <h3 class="product-card__name"><a href="#">${title}</a></h3>
              <div class="product-card__prices">
                <span class="product-card__price product-card__price--new">${price} ₽</span>
              </div>
            </div>
            <div class="product-card__actions">
              <button class="product-card__action product-card__action--decrease">-</button>
              <input class="product-card__quantity" type="number" value="${1}" data-price="${price}" readonly>
              <button class="product-card__action product-card__action--increase">+</button>
              <div class="product-card__subtotal-price">${price}</div>
            </div>
            <button class="product-card__close" type="button" aria-label="Удалить товар из корзину"></button>
          </article>
        </li>
  `;
};

function init() {
  let totalCost = 0;

  [...document.querySelectorAll('.product-card--cart')].forEach(basketItem => {
    totalCost += Number(basketItem.querySelector('.product-card__quantity').value) * Number(basketItem.querySelector('.product-card__quantity').dataset.price);

    basketItem.querySelector('.product-card__subtotal-price').textContent = `${Number(basketItem.querySelector('.product-card__quantity').value) * Number(basketItem.querySelector('.product-card__quantity').dataset.price)} ₽`;
  });

  setTotalPrice(totalCost);
};

// Вспомогательная функция
function removeLastSymbol(el) {
  el.substring(0, document.querySelector('.product-card__subtotal-price').textContent.length - 1)
};

function changeBtnIcon(btn) {
  btn.closest('button').style.backgroundImage = 'url("../images/icons/check-icon.svg")';
  btn.closest('button').style.backgroundSize = 'cover';
  btn.closest('button').style.borderRadius = '50%';
  btn.setAttribute('disabled', 'disabled');
  btn.style.backgroundColor = '#E0EDCF';
  btn.style.cursor = 'not-allowed';
};

productBtn.forEach(btn => {
  btn.closest('.product-card').setAttribute('data-id', generateRandomId())
  btn.addEventListener('click', e => {
    let target = e.target;

    changeBtnIcon(target);

    let targetParent = target.closest('.product-card')
    let id = targetParent.dataset.id
    let img = targetParent.querySelector('.product-card__img img').getAttribute('src');
    let title = targetParent.querySelector('.product-card__name a').textContent;
    let price = parseInt(targetParent.querySelector('.product-card__price--new').textContent);

    document.querySelector('.cart__list').insertAdjacentHTML("afterbegin", generateCardProduct(img, title, price, id));

    updateProductsInCart(document.querySelector('.cart__list').children.length);
    init();
  })
});

const setTotalPrice = (value) => {
  totalPriceWrapper.textContent = `${value} ₽`;
  totalPriceWrapper.dataset.value = value;
};

function calculateSeparateItem(basketItem, action) {
  const input = basketItem.querySelector('.product-card__quantity');

  switch (action) {
    case actions.plus:
      input.value++;
      setTotalPrice(Number(totalPriceWrapper.dataset.value) + Number(basketItem.querySelector('.product-card__quantity').dataset.price));
      break;
    case actions.minus:
      setTotalPrice(Number(totalPriceWrapper.dataset.value) - Number(basketItem.querySelector('.product-card__quantity').dataset.price));
      input.value--;
      break;
  }

  basketItem.querySelector('.product-card__subtotal-price').textContent = `${Number(basketItem.querySelector('.product-card__quantity').value) * Number(basketItem.querySelector('.product-card__quantity').dataset.price)} ₽`;
};

cartBodyEl.addEventListener('click', e => {
  let target = e.target;

  if (target.classList.contains('product-card__action--decrease')) {
    const input = target.closest('.product-card--cart').querySelector('.product-card__quantity');

    if (Number(input.value) > 1) {
      calculateSeparateItem(
        target.closest('.product-card--cart'),
        actions.minus
      );
    }
  }

  if (target.classList.contains('product-card__action--increase')) {
    calculateSeparateItem(
      target.closest('.product-card--cart'),
      actions.plus
    );
  }

  if (e.target.classList.contains('product-card__close')) {
    target.parentNode.parentNode.remove();
  }

  if (e.target.classList.contains('cart__reset')) {
    document.querySelectorAll('.product-card--cart').forEach(product => {
      product.remove();
    });
  }

  updateProductsInCart(document.querySelector('.cart__list').children.length);
  init();
});

// ! Надо подумать
// init();