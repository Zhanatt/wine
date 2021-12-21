//header-top-fixed || button scroll up ======================================
const body = document.querySelector('body');
window.onscroll = function SohwHeader() {
  const headerTop = document.querySelector('.header-top');
  const headerContacts = document.querySelector('.contacts');
  const buttonScroll = document.querySelector('.button-scroll');
  
  if(window.pageYOffset > 700){
    //header-top-fixed visibility
    headerTop.classList.add('header-fixed');
    headerContacts.classList.add('header-padd');
    //scroll up button visibility
    buttonScroll.style.bottom = "20px";
  }else{
    //header-top-fixed visibility
    headerTop.classList.remove('header-fixed');
    headerContacts.classList.remove('header-padd');
    headerContacts.classList.add('contacts');
    //scroll up button visibility
    buttonScroll.style.opacity = "1";
    buttonScroll.style.bottom = "-100px";
  }
};
//burger-menu ===============================================================
const headerTopMenu = document.querySelector('.header-top-menu');
const headerBurger = document.querySelector('.header-top__burger');

headerBurger.addEventListener('click', ()=>{
  headerBurger.classList.toggle('active');
  headerTopMenu.classList.toggle('active');
  body.classList.toggle('lock');
})

