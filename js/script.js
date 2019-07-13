$(function() {
  $(".red-box").fadeTo(3000, 0.2);
  $(".green-box").fadeTo(3000, 0.5);
  $(".blue-box").fadeTo(3000, 0.8);

  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();
  $(".blue-box2").toggle();
  $(".blue-box").hide(1000);
  $(".blue-box").show(1000);
  $(".blue-box2").slideUp(2000);
  $(".blue-box2").slideDown(2000);
  $("p").hide();
  $("p").slideDown(3000);
    $(".blue-box").slideToggle();
});
