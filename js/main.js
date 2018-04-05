/*Global $,alert,console*/
$(function(){
    'use strict';

// Nice Scroll
    
$("html").niceScroll();    
    
    
$('.carousel').carousel({
    interval:6000
});
    
//Show Color Option Div When Click On Gear Check    
  
$('.gear-check').click(function(){
    $('.color-option').fadeToggle();
});
    
 // Change Theme Color On Click

var colorList=$('.color-option ul li'),
    scrollBtn=$('#scroll-top');
    
colorList.eq(0).css("background","#E41B17").end()
    .eq(1).css("background","#009AFF").end()
    .eq(2).css("background","#E426D5").end()
    .eq(3).css("background","#FFD500");
    
colorList.click(function(){
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});    
 
// Loading Screen

$(window).load(function() {
    
    $(".loading-overlay .spinner").fadeOut(1000,function(){
                    
        $("body").css("overflow","auto");

        $(this).parent().fadeOut(2000,function(){
            $(this).remove();
        });
    });
}); 

      // Caching The Scroll Top Element

$(window).scroll(function(){
   $(this).scrollTop() >= 700 ?scrollBtn.show() : scrollBtn.hide(); 
});
    
scrollBtn.click(function(){
   $("html body").animate({
      scrollTop:0 
   },600); 
});    
 

});
