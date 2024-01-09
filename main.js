const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive'); 
}

function openProductDetailAside() {
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push ({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'TV',
  price: 200,
  image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Camera',
  price: 300,
  image: 'https://images.pexels.com/photos/884193/pexels-photo-884193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Picture',
  price: 40,
  image: 'https://images.pexels.com/photos/19598119/pexels-photo-19598119/free-photo-of-arte-mano-pintura-sujetando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Pan',
  price: 80,
  image: 'https://images.pexels.com/photos/18725258/pexels-photo-18725258/free-photo-of-apilar-desayuno-de-madera-tortitas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Ball',
  price: 50,
  image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'T-shirt',
  price: 30,
  image: 'https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Glasses',
  price: 30,
  image: 'https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Shoes',
  price: 100,
  image: 'https://images.pexels.com/photos/19615611/pexels-photo-19615611/free-photo-of-moda-calle-zapatos-pavimento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push ({
  name: 'Cap',
  price: 20,
  image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);