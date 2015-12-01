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
        width:1120,
        height:919,
        content:'<img id="big-img" src="img/test-way-img.png"><div id="img-close" class="close-btn"></div>'
    });
    var textBox =dialog({
        width:588,
        height:205,
        content:'<div id="big-text-box"><h1 id="big-text-title"></h1><p id="big-text-p"></p></div><div id="text-close" class="close-btn"></div>'
    });
    $('.see-more-text').click(function(){
        var text = $('.all-text').text();
        var title = $('.brief-info-title').text();
        $('#big-text-p').text(text);
        $('#big-text-title').text(title);
        textBox.showModal();
    });
    $('#text-close').click(function(){
        textBox.close();
    });



    //查看大图按钮
    $('.look-big-img').click(function(){
        var img = $('#big-img');
        if(img.hasClass('spic')){
            d.close();
            img.removeClass('spic');

        }else{
            var src = "img/"+$('.init').text();
            img.addClass('spic');
            img.attr({'src':src});
            d.showModal();

        }

    });
    //图片关闭按钮
    $('#img-close').click(function () {
        var img = $('#big-img');
        d.close();
        img.removeClass('spic');
    })
});
