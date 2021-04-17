var hamburgerBtn = document.querySelector('#dropdownMenuButton')
hamburgerBtn.addEventListener('click', function() {
  var btn = document.querySelector('#dropdownMenuButton')
  var menu = document.querySelector('.hamburger-menu')
  if (btn.classList.contains('open')) {
    btn.classList.remove('open')
    btn.setAttribute('aria-expanded', 'false')
    menu.classList.remove('open')
  } else {
    btn.classList.add('open')
    btn.setAttribute('aria-expanded', 'true')
    menu.classList.add('open')
  }
})
var menuItems = document.querySelectorAll('.menu-item');
for (i=0; i<menuItems.length; i++) {
  if (menuItems[i].getAttribute('href') == window.location.href) {
    menuItems[i].setAttribute('style', 'text-decoration: underline;')
  }
}