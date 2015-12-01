$(function(){

    //tab英文标签选择
    $('.tab-select').find('a').click(function(){
        if($(this).parent().hasClass('tab-active')){
            return 0;
        }

        console.log($(this).parent().index());
        //获取当前TAB 和选中TAB
        var old = $('.tab-active').index();
        var current = $(this).parent().index();
        $('.tab-select').find('li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        var tab = $('.tab-item');
        tab.eq(old).hide();
        tab.eq(current).show();



    })
});
