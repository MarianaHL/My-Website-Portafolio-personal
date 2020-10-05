const hambuerger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_tem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hambuerger.addEventListener('click',()=>{
  hambuerger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
  var scrollPosition = window.scrollY;
  if(scrollPosition > 250){
    header.style.backgroundColor = '#29323c';
  }else{
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach(item => {
  item.addEventListener('click',()=>{
    hambuerger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
