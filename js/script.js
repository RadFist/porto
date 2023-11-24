window.onscroll = function(){
    const header = document.querySelector('header');
    const fix_nav = header.offsetTop;
    if(window.pageYOffset>fix_nav){
        header.classList.add('nav-fixed');
    }else{
        header.classList.remove('nav-fixed');
    }
};

const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});