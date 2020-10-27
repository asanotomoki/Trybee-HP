const $menu = document.querySelector(".menu");
const $close = document.querySelector(".close");
const $Hamburger = document.querySelector(".Hamburger");
const $nav = document.querySelector(".nav");
const $top = document.querySelector(".top");

// menuのアニメーション
$menu.addEventListener("click", () => {
  $Hamburger.classList.add("active");
});

$close.addEventListener("click", () => {
  $Hamburger.classList.remove("active");
});


window.addEventListener("scroll", () => {
  //navmenuのアニメーション
  let y = window.pageYOffset;
  if(y > 300){
    $nav.classList.add("active");
  }
  else{
    $nav.classList.remove("active");
  }

  // TOPのアニメーション
  if(y > 900){
    $top.classList.add("active");
  }
  else{
    $top.classList.remove("active");
  }
});

$(function(){
  $('a[href^="#"]').click(function() {
     var speed = 500; 

     var href= $(this).attr("href");

     var target = $(href == "#" || href == "" ? 'html' : href);

     var position = target.offset().top;

     $('body,html').animate({scrollTop:position - 80}, speed, 'swing');
     return false;
  });

  // ドロップダウンメニュー
  $('.drop').on('click', function(){
    $(this).next().slideToggle();
  })
});