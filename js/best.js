$(function(){
    //header_bottom skily 기능
    var h_top=$('.header_bottom').offset().top;
    $(window).scroll(function(){
        var win_top=$(window).scrollTop();
        if(win_top>=h_top){
            $('.header_bottom').addClass('active');
        }else{
            $('.header_bottom').removeClass('active');
        }
    });

    $('nav>ul>li').hover(function(){
        $(this).find('.sub').stop().slideDown(300);
    },function(){
        $(this).find('.sub').stop().slideUp(300);
    });
      
    // top버튼
    $('.top').click(function(){
        // top버튼 클릭하면 맨위로 올라감
        $('html,body').animate({'scrollTop':0});
    });
});