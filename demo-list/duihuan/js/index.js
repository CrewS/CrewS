/**
 * 2016-1-18
 * crews
 * **/
$(function(){
   /***
    * �ֲ�
    * */
   var Banner = function(){
       var running = false;
       function moveImg(old,target){
           //if(!running) return;
           running = true;
           var step ;
           var list = $('.slice-list');
           var liDom = list.find('li');
           var flag = $('.banner-active-flag').find('span');
           //ͨ���Ƚ����� �ж�λ�Ʒ���
           if(old<target){
               step =768;
           }else{
               step = -768;
           }
           flag.removeClass('active');
           flag.eq(target).addClass('active');

           liDom.eq(target).css({'display': 'block', 'left': step+'px'});
           list.animate({'left': 0-step+'px'}, 768, function () {
               liDom.eq(old).css({'display': 'none', 'left': '0'});
               liDom.eq(target).css({'left': '0'});
               list.css({'left': 0});
               running=false;
           });
       }

       var cur=0;
       function autoRun(){
           var target ;
           if(running){
               return ;
           }
           if(cur==3){
               target=0;
               moveImg(cur,target);
               cur=0;
           }else{
               target = cur+1;
               moveImg(cur,target);
               cur+=1;
           }
       }
       setInterval(autoRun,4000);
       //�������ҵ�ʱ����������������
       $('.banner-tool-op').find('a').on('click', function (e) {
           if(running){
               return ;
           }
           if($(this).hasClass('pre')){
               if(cur == 0){
                   return 0;
               }else{
                   moveImg(cur,cur-1);
                   cur = cur -1;
               }
           }else{
               if(cur == 3){
                   return 0 ;
               }else{
                   moveImg(cur,cur+1);
                   cur = cur+1;
               }
           }
       });
   };
    //����banner�ֲ�
   Banner();
    /*****
     * ���¶�̬
     *
     * **/
    var Newtest = function(){
        var running =false;
        var cur = 0;
        var news = $('.newest-list').find('li');
        var max = news.length;

        function dealChange(old,target){
            running = true;

            news.eq(old).animate({'opacity':'0'},600,function(){
                news.removeClass('active');
            });
            news.eq(target).animate({'opacity':'1'},600,function(){
                running =false;
                news.eq(target).addClass('active')
            });
        }


        $('.newest-content-header .pre-new').on('click',function(){
            //alert()
            if(cur==0){
                return 0;
            }else{
                dealChange(cur,cur-1);
                cur--;
            }
        });
        $('.newest-content-header .next-new').on('click',function(){
            if(cur == max-1){
                return 0;
            }else{
                dealChange(cur,cur+1);
                cur++;
            }
        });
    };
    Newtest();


});