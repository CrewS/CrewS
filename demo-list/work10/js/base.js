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
        $('.race-way-img-box').find('img').toggleClass('hidden');
        $('.src-data').toggleClass('init');
    });
    var d = dialog({
        width:500,
        height:600,
        content:'<img id="big-img" src="img/test-way-img.png">'
    });


    $('.look-big-img').click(function(){
        var img = $('#big-img');
        if(img.hasClass('spic')){
            d.close();
            img.removeClass('spic');

        }else{
            var src = "img/"+$('.init').text();
            img.addClass('spic');
            img.attr({'src':src});
            d.show();

        }

    });



});
