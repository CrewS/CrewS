$(function(){

    $('.scroll-box').Gscroll({
        box:$('.scroll-box'),
        con:$('.scroll-cont'),
        scr:$('.scroll-toolbar div'),
        downColor:'#ccc',
        upColor:'#ccc'
    });
    $('.img-tab').find('a').click(function(){
        if($(this).hasClass('select-tab')){
            return 0;
        }
        $('.img-tab').find('a').toggleClass('select-tab');
    });



});
