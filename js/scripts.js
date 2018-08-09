$(document).ready(function(){
  $(".turtle button").click(function(){
    $(".turtle p").slideDown();
    $(".turtle").siblings().children("p").slideUp();
  });
  $(".snake button").click(function(){
    $(".snake p").slideDown();
    $(".snake").siblings().children("p").slideUp();
  });
  $(".anteater button").click(function(){
    $(".anteater p").slideDown();
    $(".anteater").siblings().children("p").slideUp();
  });
});
