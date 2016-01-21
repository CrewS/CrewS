$(function(){


	//选码
	$('.size-number').on('click',function(){
		$('.size-number').removeClass('active');
		$(this).addClass('active');

	});
	$('.item-little-img').find('li').on('click',function(){

		$('.item-little-img').find('li').removeClass('active');//.addClass('hidden');
		$(this).addClass('active');
		var target = $(this).index();
		//console.log($(this).index());
		var bigImg = $('.item-big-img').find('img');
		bigImg.removeClass('active');
		bigImg.eq(target).addClass('active');

	})


});