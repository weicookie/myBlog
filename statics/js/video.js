/**
 * Created by Administrator on 2015/12/19.
 */
$(function(){
    $('.fenlei ul li').mouseenter(function(){
        $(this).stop().animate({'height':'289px'},300).siblings().stop().animate({'height':'36px'},300);
        $(this).siblings().css('background','#F5F5F5');
    }).mouseleave(function(){
        $('.fenlei ul li').stop().animate({'height':'36px'},300)
        $(this).siblings().css('background','#ffffff');
    });
});