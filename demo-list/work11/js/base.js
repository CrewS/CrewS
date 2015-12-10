$(function(){
    var d = dialog({
        width:960,
        height:919,
        content:'<img id="big-img" src="img/1.jpg"><div id="img-close" class="close-btn"></div>'
    });
    //d.showModal();
    $('.img-item').find('img').click(function(){
        var src = $(this).attr('src');
        $('#big-img').attr({'src':src});
        d.showModal();
    });
    $('.close-btn').click(function(){
        d.close();
    })
});