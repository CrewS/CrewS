$(function(){

    //tabӢ�ı�ǩѡ��
    $('.tab-select').find('a').click(function(){
        if($(this).parent().hasClass('tab-active')){
            return 0;
        }

        console.log($(this).parent().index());
        //��ȡ��ǰTAB ��ѡ��TAB
        var old = $('.tab-active').index();
        var current = $(this).parent().index();
        $('.tab-select').find('li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        var tab = $('.tab-item');
        tab.eq(old).hide();
        tab.eq(current).show();



    })
});
