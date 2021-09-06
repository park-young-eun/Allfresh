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

    // splide slider
    new Splide('.splide',{
        type:'loop',
        perPage:5,
        perMove:1,
        focus:'center',
        autowidth:true,
        pagination:false
    }).mount();

    // bxslider 간편한 과일 슬라이드
    var bx1=$('.bx1').bxSlider({mode:'fade',pager:false,controls:false});
    var bx2=$('.bx2').bxSlider({mode:'fade',pager:false,controls:false});
    var bx3=$('.bx3').bxSlider({mode:'horizontal',pager:false,controls:false});
    var bx4=$('.bx4').bxSlider({mode:'fade',pager:false,controls:false});
    var bx5=$('.bx5').bxSlider({mode:'fade',pager:false,controls:false});

    //왼쪽버튼
    $('.bx_prev').click(function(e){
        // a태그의 링크 기능막음
        e.preventDefault();
        bx1.goToPrevSlide();
        bx2.goToPrevSlide();
        bx3.goToPrevSlide();
        bx4.goToPrevSlide();
        bx5.goToPrevSlide();
    });

    //오른쪽버튼
    $('.bx_next').click(function(e){
        e.preventDefault();
        bx1.goToNextSlide();
        bx2.goToNextSlide();
        bx3.goToNextSlide();
        bx4.goToNextSlide();
        bx5.goToNextSlide();
    });

    //slick / farmer's dreams
    $('.farmer_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        Infinite:true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // review_wrap 베스트리뷰 -tap
    $('.review_list ul li:first a').addClass('active');
    $('.review_list').hide();
    $('.review_list:first').show();

    $('.t1').click(function(e){
        e.preventDefault();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.t3').removeClass('active');
        $('.t4').removeClass('active');
        $('.review_all').show();
        $('.review_m').hide();
        $('.review_i').hide();
        $('.review_f').hide();
    });
    
    $('.t2').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
        $('.t3').removeClass('active');
        $('.t4').removeClass('active');
        $('.review_all').hide();
        $('.review_m').show();
        $('.review_i').hide();
        $('.review_f').hide();
    });

    $('.t3').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').removeClass('active');
        $('.t3').addClass('active');
        $('.t4').removeClass('active');
        $('.review_all').hide();
        $('.review_m').hide();
        $('.review_i').show();
        $('.review_f').hide();
    });

    $('.t4').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').removeClass('active');
        $('.t3').removeClass('active');
        $('.t4').addClass('active');
        $('.review_all').hide();
        $('.review_m').hide();
        $('.review_i').hide();
        $('.review_f').show();
    });
    
    // top버튼
    $('.top').click(function(){
        // top버튼 클릭하면 맨위로 올라감
        $('html,body').animate({'scrollTop':0});
    });
});