const hambuerger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
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

window.onscroll = function(){
  console.log(document.documentElement.scrollTop > 100)
  if(document.documentElement.scrollTop > 300){
    document.querySelector('.go-top-container').classList.add('show');
  }else if(document.documentElement.scrollTop < 300){
    document.querySelector('.go-top-container').classList.remove('show');
  }
}

document.querySelector('.go-top-container').addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
