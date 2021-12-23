const body = document.querySelector('body');
const buttonScroll = document.querySelector('.button-scroll');

//header-top-fixed || button scroll-to-top ============= VISIBLE ON SCROLL =========================
window.onscroll = function SohwHeader() {
  const headerTop = document.querySelector('.header-top');
  
  
  if(window.pageYOffset > 700){
    //header-top-fixed visibility
    headerTop.classList.add('header-fixed');
    //scroll-to-top button visibility
    buttonScroll.style.bottom = "20px";
  }else{
    //header-top-fixed visibility
    headerTop.classList.remove('header-fixed');
    //scroll-to-top button visibility
    buttonScroll.style.opacity = "1";
    buttonScroll.style.bottom = "-100px";
  }
};
//scroll-to-top =============== EVENT ================================================
buttonScroll.addEventListener('click', ()=>{
  window.scrollTo(0, 0);
})
//burger-menu ================= EVENT ==============================================
const headerTopMenu = document.querySelector('.header-top-menu');
const headerBurger = document.querySelector('.header-top__burger');

headerBurger.addEventListener('click', ()=>{
  headerBurger.classList.toggle('active');
  headerTopMenu.classList.toggle('active');
  body.classList.toggle('lock');
})

