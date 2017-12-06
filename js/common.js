$(document).ready(function(){
  // 서브 네비게이션 클릭시 나타내기
  $('.sub_gnb').hide();
  $('.sub_gnb_up').on('mouseenter',function(){
    $(this).children('.sub_gnb').stop(true, true).slideToggle();
    $(this).children('.sub_gnb').mouseleave(function(){
      $(this).slideUp();
    });
  });

});
