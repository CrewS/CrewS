/**
common-fucntion.js
*/
$(function(){

	//relative-shop-item

	var Banner = function(){
       var running = false;
       function moveImg(old,target){
           //if(!running) return;
           running = true;
           var step ;
           var list = $('.relative-item-list');
           var liDom = $('.item-slice-container');
           var flag = $('.tool-bar-container .tool-bar').find('span');
           if(old<target){
               step =1120;
           }else{
               step = -1120;
           }
           flag.removeClass('active');
           flag.eq(target).addClass('active');

           liDom.eq(target).css({'display': 'block', 'left': step+'px'});
           list.animate({'left': 0-step+'px'}, 1120, function () {
               liDom.eq(old).css({'display': 'none', 'left': '0'});
               liDom.eq(target).css({'left': '0'});
               list.css({'left': 0});
               running=false;
           });
       }
       $('.tool-bar').find('span').on('click',function(){
       		var target = $(this).text();
       		var old =$('.tool-bar .active').text()
       		//console.log(old,target);
       		if(running||old===target){
       			return ;
       		}
       		moveImg(old,target);
       });


       var cur=0;
       function autoRun(){
           var target ;
           if(running){
               return ;
           }
           if(cur==1){
               target=0;
               moveImg(cur,target);
               cur=0;
           }else{
               target = cur+1;
               moveImg(cur,target);
               cur+=1;
           }
       }
       //setInterval(autoRun,4000);

   };

   Banner();

});