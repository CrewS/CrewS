


$(function (){
    $(window).on("scroll",function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var nav = $(".nav");
        var liDom = nav.find('a');
        var tmp =$('.tmp');
        nav.css({"position":"fixed","top":"0","z-index":"20"});
        if(scrollTop >= 1022 && scrollTop < 1910){
            liDom.removeClass("active");
            liDom.eq(0).addClass("active");
        }else if(scrollTop >= 1910 && scrollTop < 3434){
            liDom.removeClass("active");
            liDom.eq(1).addClass("active");
        }else if(scrollTop >= 3434 && scrollTop < 4144){
            liDom.removeClass("active");
            liDom.eq(2).addClass("active");
        }else if(scrollTop >= 4144 && scrollTop < 5115){
            liDom.removeClass("active");
            liDom.eq(3).addClass("active");
        }else if(scrollTop >= 5115 && scrollTop < 6329){
            liDom.removeClass("active");
            liDom.eq(4).addClass("active");
        }else if(scrollTop >= 6329){
            liDom.removeClass("active");
            liDom.eq(5).addClass("active");
        } else if(scrollTop < 1025){
            nav.css({"position":"static"});
        }
        console.log(scrollTop);
    });

    $(".menu").find('a').each(function(){
        $(this).on("click",function(){
            var num = $(this).next().text();
            var liDom = $('.nav').find('a');

            //console.log(num);
            //liDom.removeClass("active");
            //$(this).addClass("active");

            if(num == 1){
                $('html,body').stop().animate({scrollTop:'1022px'},300,function(){

                });
                //
            }else if(num == 2){
                $('html,body').stop().animate({scrollTop:'1910px'},300,function(){

                });
                //
            }else if(num == 3){
                $('html,body').stop().animate({scrollTop:'3434px'},300,function(){

                });
                //
            }else if(num == 4){
                $('html,body').stop().animate({scrollTop:'4144px'},300,function(){

                });
                //
            }else if(num == 5){
                $('html,body').stop().animate({scrollTop:'5115px'},300,function(){

                });
                //
            }else if(num == 6){
                $('html,body').stop().animate({scrollTop:'6329px'},300,function(){

                });
                //
            }else{
                $('html,body').stop().animate({scrollTop:'6329px'},300,function(){

                });
                //
            }
        })
    })



});