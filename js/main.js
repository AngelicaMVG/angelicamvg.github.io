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
  if (scroll >= 730) {
    $('.skill').show('slow');
  } else if (scroll < 729) {
    $('.skill').hide();
  }
}
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
