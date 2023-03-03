/* ------- PreLoader ------- */
$(window).on('load', function () {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(150).fadeOut('slow');
  $('body').delay(150).css({ 'overflow': 'visible' });
})

/* ------- Banner & Popup ------- */
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');
// Mostrar automaticamente a popup após 2 segundos da página carregada
window.onload = function () {
  setTimeout(function () {
      popup.style.display = "block";
      const img = "ifes-horizontal-branco ifes-horizontal-cor ifes-horizontal-pb ifes-horizontal-preto ifes-vertical-branco".split(" ");
      document.querySelector("#banners").src = `./img/logo-ifes/${img[Math.floor(Math.random() * img.length)]}`
  }, 2000);
}
close.addEventListener('click', () => {
  popup.style.display = "none";
})