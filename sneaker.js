// ハンバーガーメニュー
$(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        $('#mask').toggleClass('active');
    });

    $('#mask').click(function(){
        $(this).removeClass('active');
        $('#hamburger').removeClass('active');
        $('nav').removeClass('active');
    });

    $('.nav-item a').click(function(){
        $('#hamburger').removeClass('active');
        $('#nav').removeClass('active');
        $('#mask').removeClass('active');
    });
});

// スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 600;
        var type = 'swing';
        var href = $(this).attr("href");
        var target = $(href == "#index" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position},speed,type);
        return false;
    });
});

// スライダー
$(function(){
    $('#slider').slick({
        autoplay:false,
        arrows:false,
        centerMode:true,
        centerPadding:'100px',
        slidesToShow:3,
        responsive:[
            {
                breakpoint:768,
                setting:{
                    centerPadding:'50px',
                    slidesToShow:1,
                }
            }
        ]
    });
});

// フェードイン
$(function(){
    $(window).scroll(function(){
        $(".fade-in").each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass("show");
            }
        });
    });
    jQuery(window).scroll();
});