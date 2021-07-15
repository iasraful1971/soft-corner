//typejss

var typed = new Typed('.type', {
  strings: [
    'I am a web desinger',
    'I am a web Develoer',
    'I am a web Software Developer',
    'I am a Wordpress Web Developer',
    'I am a Psd To Html Expert',
    'I am a Responsive Desinger'],
  typeSpeed: 150,
  loop: true,
  showCursor: true,
  autoInsertCss: true,

});
//scrool top:

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 600){
      $('#scrolltop').fadeIn();
    }else{
      $('#scrolltop').fadeOut();
    }
  });
$('#scrolltop').click(function(){
  $('html, body').animate({
    scrollTop:0
  }, 800);
});


});
