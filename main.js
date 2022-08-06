const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
shoppingCar.addEventListener('click',toggleCarDet);

function toggleDesktopMenu (){
    const isAsideProdDet = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideProdDet){
        shoppingCartContainer.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isAsideProdDet = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideProdDet){
        shoppingCartContainer.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarDet (){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClose){
        mobileMenu.classList.toggle('inactive');
    }  
    if (!isDesktopMenu){
        desktopMenu.classList.toggle('inactive');
    } 
    shoppingCartContainer.classList.toggle('inactive'); 
}
/*Array de Objetos*/
const productList = [];
/*Inserto los objetos al array con push*/
productList.push({
    name: 'Bike',
    price: 800,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Ipad',
    price: 1200,
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'Reloj',
    price: 230,
    image: 'https://images.pexels.com/photos/4444892/pexels-photo-4444892.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'NoteBook',
    price: 1800,
    image: 'https://images.pexels.com/photos/8533387/pexels-photo-8533387.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'Parlante',
    price: 80,
    image: 'https://media.istockphoto.com/photos/two-huge-speakers-picture-id182883783?b=1&k=20&m=182883783&s=612x612&w=0&h=7e1YFd_lc5SINKzDSEBraZO8ZRe_BSGuB9i5nZUrhjI=',
});
productList.push({
    name: 'Iphone Xll',
    price: 1230,
    image: 'https://images.pexels.com/photos/13071952/pexels-photo-13071952.jpeg?auto=compress&cs=tinysrgb&w=400',
});
/*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

function renderProducts(arr){
    for (product of arr ){
        /*Maqueto product Card*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');    
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name
        /** Le digo que productoPrice, productName estan dentro de productInfoDiv */
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        /** Le digo que productInfoImg estan dentro de productInfoFigure */
        productInfoFigure.appendChild(productInfoImg);
        
        /** Le digo que productInfoDiv,productInfoFigure estan dentro de productInfo*/
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        /** Le digo que img,productInfo estan dentro de productCard*/
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        
        /** Le digo que img,productCard esta dentro de cardsContainer*/
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
