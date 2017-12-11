$(document).ready(function(){

  // 서브 네비게이션 클릭시 나타내기
  $('.sub_gnb').hide();
  $('.sub_gnb_up').on('mouseenter',function(){
    $(this).children('.sub_gnb').stop(true, true).slideToggle();
    $(this).children('.sub_gnb').mouseleave(function(){
      $(this).slideUp();
    });
  });

// 퍼블리셔,디자이너 단어 나타내기
  function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  $(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the
    // class of outer div
    // The second paramter is the speed between each letter is typed.
    autoType(".type-js",200);
  });

 // WORK 슬라이드

 var num=0;
 var show_num = 2;
 var items = $(".work_web_showbox .work_web_list li");
 var itemsWidth= $(".work_web_showbox .work_web_list li").width();
 var itemBox = $(".work_web_showbox .work_web_list");
 var copyObj = $('.work_web_showbox .work_web_list li:lt('+show_num+')').clone();
 itemBox.append(copyObj);
 var total = $(items).length;
 var webSliderbtn = $("div.work_web_showbox>.main_slider_under_btn a");
 $(webSliderbtn).eq(0).addClass("on");

 $("div.work_wrap> span.next_btn").on("click",function(){
   clearInterval(start);
   if(num==total){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
     num = 0;
     $(itemBox).css("margin-left",num);
   }
   num++;
   var sdIdx=num;
   $(itemBox).stop().animate({marginLeft:-(itemsWidth+60)*num},500);
   // return false;
   if(sdIdx==total){
     sdIdx=0;
   }
   $(webSliderbtn).removeClass("on");
   $(webSliderbtn).eq(sdIdx).addClass("on");

 })
 $("div.work_wrap> span.pre_btn").on("click",function(){
   clearInterval(start);
   if(num==0){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
     num = total;
     $(itemBox).css("margin-left",-(itemsWidth+60)*num);
   }
   num--;
   var sdIdx=num;
   $(itemBox).stop().animate({marginLeft:-(itemsWidth+60)*num},500);
   // return false;
   $(webSliderbtn).removeClass("on");
   $(webSliderbtn).eq(sdIdx).addClass("on");
 })

 var start = setInterval(function(){
   if(num==total){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
     num = 0;
     $(itemBox).css("margin-left",num);
   }
   num++;
   var sdIdx=num;
   $(itemBox).stop().animate({marginLeft:-(itemsWidth+60)*num},500);
   // return false;
   if(sdIdx==total){
     sdIdx=0;
   }
   $(webSliderbtn).removeClass("on");
   $(webSliderbtn).eq(sdIdx).addClass("on");
 },2000)
//슬라이드 인덱스 버튼 활성화
$("div.work_web_showbox > div.main_slider_under_btn> a.stop_btn").click(function(){
  clearInterval(start);
  $(this).removeClass("stop_btn")
  $(this).addClass("play_btn");
})



// WORK design 슬라이드
var num_2 =0;
var show_num_2 = 1;
var items_2 = $(".work_design_showbox .work_design_list li");
var itemsWidth_2= $(".work_design_showbox .work_design_list li").width();
var itemBox_2 = $(".work_design_showbox .work_design_list");
var copyObj_2 = $('.work_design_showbox .work_design_list li:lt('+show_num+')').clone();
var copyObj_2_padding= $(copyObj_2).css("padding-top",65);
itemBox_2.append(copyObj_2_padding);
 var total_2 = $(items_2).length;

 var designSlidebtn=$("div.work_design_showbox>.main_slider_under_btn a");
 $(designSlidebtn).eq(0).addClass("on");


$("div.work_design_wrap> span.next_btn").on("click",function(){
  clearInterval(start_2);
  if(num_2==total_2){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
    num_2 = 0;
    $(itemBox_2).css("margin-left",num_2);
  }
  num_2++;
  var sdIdx=num_2;
  $(itemBox_2).stop().animate({marginLeft:-(itemsWidth_2)*num_2},500);
  // return false;
  if(sdIdx==total_2){
    sdIdx=0;
  }
  $(designSlidebtn).removeClass("on");
  $(designSlidebtn).eq(sdIdx).addClass("on");
  console.log("IDX"+sdIdx);

})
$("div.work_design_wrap> span.pre_btn").on("click",function(){
  clearInterval(start_2);
  if(num_2==0){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
    num_2 = total_2;
    $(itemBox_2).css("margin-left",-(itemsWidth_2)*num_2);
  }
  num_2--;
  var sdIdx=num_2;
  $(itemBox_2).stop().animate({marginLeft:-(itemsWidth_2)*num_2},500);
  // return false;
  $(designSlidebtn).removeClass("on");
  $(designSlidebtn).eq(sdIdx).addClass("on");
})

var start_2 = setInterval(function(){
  if(num_2==total_2){ // 클릭할때마다 num++ 되다가 if에서 조건이 충족되면 걸린다.
    num_2 = 0;
    $(itemBox_2).css("margin-left",num_2);
  }
  num_2++;
  var sdIdx=num_2;
  $(itemBox_2).stop().animate({marginLeft:-(itemsWidth_2)*num_2},500);
  // return false;
  if(sdIdx==total_2){
    sdIdx=0;
  }
  $(designSlidebtn).removeClass("on");
  $(designSlidebtn).eq(sdIdx).addClass("on");
},2000)

$("div.work_design_showbox > div.main_slider_under_btn> a.stop_btn").click(function(){
  clearInterval(start_2);
  $(this).removeClass("stop_btn")
  $(this).addClass("play_btn");
})
});//메인 스크립트 닫기
