const btnOpenNav = document.getElementById('btn-open-nav'); 
btnOpenNav.addEventListener("click", displayMenu, false);

function displayMenu() {
	const elem = document.getElementById("nav-engie");
    elem.classList.toggle("opened");
}

const tab = [
  $("section:nth-child(1)"),
  $("section:nth-child(2)"),
  $("section:nth-child(3)"),
  $("section:nth-child(5)"),
  $("section:nth-child(6)"),
  $("section:nth-child(7)"),
  $("section:nth-child(8)"),
];

$(document).ready(function() {
  let currentNav = $('#first');
  $('.quick__nav__item').click(function(e) {
    if (currentNav) {
      currentNav.removeClass('current__nav');
    }

    $(this).addClass('current__nav');
    $('html, body').animate({
      scrollTop: tab[$(this).index()].offset().top
    }, 1000);
    currentNav = $(this);
  });
});
