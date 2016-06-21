$(document).ready(function() {
       /*video 弹窗*/
       var height= document.documentElement.scrollHeight || documentd.body.scrollHeight;
      $(".video").click(function () {
        $('body').css('overflow','hidden');
        // $('.y_vid video').attr('autoplay:autoplay;');
      	$(".y_vid").attr("style","display:block;");
      	// $(".y_vid video").attr("style","visibility:visible;");
      	$(".touming_bg").html('<div id="pop_video2_popwin_bg" style="height: '+height+'px; opacity: 0.6; width: 100%; z-index: 9999; position: absolute; top: -50px; left: 0px; background: rgb(0, 0, 0);"></div>')
      });

     $(".y_vid .close_video,.touming_bg").click(function () {
      $('body').css('overflow','auto');
     	$(".y_vid").attr("style","display:none;");
    	$(".y_vid #video").attr("style","visibility:hidden;");
    	$(".touming_bg").html('');

    });
       // libao弹窗 
    $('div.down_sec .get_gift').click(function(){
         $('#libao').attr('style','display:block');
         $(".touming_bg").html('<div id="pop_video2_popwin_bg" style="height: 2500px; opacity: 0.6; width: 100%; z-index: 9; position: absolute; top: -50px; left: 0px; background: rgb(0, 0, 0);"></div>')
          
         $('body.index').css('overflow','hidden');
    })
     // libao关闭
       $('.touming_bg,a.close').click(function(){
         $('#libao').css('display','none'); 
         $(".touming_bg").html('');
         $('body.index').css('overflow','auto');
       })

       $('#libao input:nth-child(1)').click(function(){
        $('#libao input:nth-child(1)').val('');

       })
       $('#libao input:nth-child(2)').click(function(){
        $('#libao input:nth-child(2)').val('');
       })
       // weixin 首页的hover
       $('#gongzhonghao').slideUp(1)
      $('.weixin span.img').hover(function() {
        $('#gongzhonghao').slideToggle(500)
    });
      // android
      $('.android').click(function(){
        alert('敬请期待！')
      })
     /*  $('.weixin img').mouseenter(function(){
        $('#gongzhonghao').slideUp();
       })*/

    /*slide*/
    /*news slide start*/



   /**/
    /*news slide end*/
   // function changeSlide() {
   //      $('ul.dots li').click(function() {
   //          var index = $('ul.dots li').index($(this));
   //          cur = index;

   //          tab(cur);
   //      });
   //  }

   //  changeSlide();
  
})