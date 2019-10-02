var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');

toggle.addEventListener('click', function(){
  if (menu.classList.contains('active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('active');
  } else {
    menu.classList.add('active'); 
    this.setAttribute('aria-expanded', 'true');
  }
});