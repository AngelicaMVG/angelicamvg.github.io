var animationNombre = function() {
  $("div[data-liffect]").each(function(i) {
    $(this).attr("style", "-webkit-animation-delay:" + i * 300 + "ms;" +
      "-moz-animation-delay:" + i * 300 + "ms;" +
      "-o-animation-delay:" + i * 300 + "ms;" +
      "animation-delay:" + i * 300 + "ms;");
    if (i == $("div[data-liffect]").size() - 1) {
      $("div[data-liffect]").addClass("play")
    }
  });
};

var cargarProgressBar = function() {
  var scroll = document.body.scrollTop;
  if (scroll >= 690) {
    $('.skill').show('slow');
  } else if (scroll < 689) {
    $('.skill').hide();
  }
}

var menuColor = function (){
  var scroll = document.body.scrollTop;

  if (scroll <= 499) {
    $('.menu-mov').css('color', 'white');
  } else if(scroll>500) {
    $('.menu-mov').css('color', 'black');
  } else if (scroll >=800) {
      $('.menu-mov').css('color', 'red');
  }
}


document.addEventListener("scroll", menuColor);
document.addEventListener("scroll", cargarProgressBar);

$(document).ready(function() {
  $(".button-collapse").sideNav({
    menuWidth: 500, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $('.parallax').parallax();
  $('.modal').modal();

  animationNombre();
  cargarProgressBar();

});
