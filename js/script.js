const burger = document.querySelector('#burger');
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const activeSPimage = document.querySelector('.sp-image-link');
const activeSPimageThmb = document.querySelector('.sp-image-link img');
const cartModal = document.querySelector('.cartModal');
const quantity = document.querySelector('.quantity');

let spActiveImg = 1;

function toggleMenu() {
  burger.classList.toggle('open')
}

function slideImage(option){
  if (option === 'next' && spActiveImg !== 4 ) {
    spActiveImg++
  } else if (option === 'next' && spActiveImg === 4 ) {
    spActiveImg = 1
  } else if (option === 'prev' && spActiveImg !== 1 ) {
    spActiveImg--
  } else if (option === 'prev' && spActiveImg === 1) {
    spActiveImg = 4
  }
  changeImage()
}

function changeImage() {
  activeSPimage.setAttribute('src', `images/image-product-${spActiveImg}.jpg`)
  activeSPimageThmb.setAttribute('src', `images/image-product-${spActiveImg}.jpg`)
}

function openCart() {
  console.log('clicked');
  cartModal.classList.toggle('open')
}

function increaseQuantity() {
  console.log('increase');
  quantityCount++
  quantity.textContent = quantityCount
}

function decreaseQuantity() {
  if (quantityCount !== 1 ){
    console.log('decrease');
    quantityCount--
    quantity.textContent = quantityCount
  }
}

const cartContent = document.querySelector('.cartContent')

let quantityCount = 1;
let cartCount = 0;

function addToCart() {
  const item = document.createElement('div')
  let totalSum = 125.00 * quantityCount;
  item.innerHTML = `
  <div class="item">
  <p class="img"><img src="/images/image-product-1.jpg" alt=""></p>
    <div class="details">
      <p class="title">Fall Limited Edition Sneakers</p>
      <p class="price">
        <span class="txt">$125.00 x ${quantityCount}</span>
        <span class="sum">$${totalSum}</span>
      </p>
    </div>
    <p class="btnDelete" onclick="deleteItem(e.target)"><img src="/images/icon-delete.svg" alt=""></p>
  </div>
  `
  cartContent.append(item)
  alert('added to cart')
  quantityCount = 1
  quantity.textContent = quantityCount
  cartCount++
}

function deleteItem(e){
  console.log(e.target);
}
