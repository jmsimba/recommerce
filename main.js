const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const asideProdDet = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
shoppingCar.addEventListener('click',toggleCarDet);

function toggleDesktopMenu (){
    const isAsideProdDet = asideProdDet.classList.contains('inactive');
    if(!isAsideProdDet){
        asideProdDet.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isAsideProdDet = asideProdDet.classList.contains('inactive');
    if(!isAsideProdDet){
        asideProdDet.classList.toggle('inactive');
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
    asideProdDet.classList.toggle('inactive'); 
}
