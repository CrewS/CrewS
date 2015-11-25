;(function($){
	$.fn.extend({					   
	Gscroll:function(option){
			//滚动条属性开始,默认参数---------------------------------------------
		var defaults={
			box:$('.boxwrap'),
			con:$('.con'),
			scr:$('.scroll div'),
			downColor:'#8d8d8d',
			upColor:'#bcbcbc'
		}
		var option=$.extend(defaults,option)
		return this.each(function(){
			//滚动条方法开始-------------------------------------------------------------------------
			//鼠标点击拖拉
			var This=$(this);
			var this_scr=This.find(option.scr);
			var this_con=This.find(option.con);
			//设置拖动条的高度
			var pei=This.height()/(this_con.height() + 20);
			this_scr.css('height',this_scr.parent().height()*pei);
			var Dhei=Math.abs(This.height()-this_scr.height())/Math.abs(This.height()-this_con.height());
			var wheelFlag=0;
			var flag=0;
			var _wheelData=-1;
			var data=0;
			//高度不够，隐藏滚动条

			if(This.height()>=this_con.height()){
				this_scr.parent().hide();
				return;
			}
			//this_scr.css('height',"250");
			this_scr.on('mousedown',function(e){
				var sThis=$(this);
				e.preventDefault();
				var DHe=e.pageY-sThis.position().top
				$(document).on('mouseup',function(e){
					sThis.css('background',option.upColor);
					$(document).off('mousemove');
					$(document).off('mouseup');
				})
				$(document).on('mousemove',function(e){
					//兼容ie678拖拉时选到文本;
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
					var moveTop=e.pageY-DHe
					if(moveTop<=0){
						moveTop=0;
					}
					if(moveTop>=sThis.parent().height()-sThis.height()){
						moveTop=sThis.parent().height()-sThis.height();
					}
					sThis.css('top',moveTop);
					this_con.css('top',-moveTop/Dhei);
					_wheelData=moveTop;
				})
				sThis.css('background',option.downColor);
			})
			//滚轮事件,兼容全浏览器
			This.on("mousewheel DOMMouseScroll", function (e) {
				var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
							(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
				if (delta > 0) {	// 向上滚
					data=-120;
				} else if (delta < 0) {		// 向下滚
					data=120;
				}
				wheelFlag+=data;
				if( _wheelData>=0 ){
					flag=_wheelData;
					this_scr.css('top',flag);
					wheelFlag=_wheelData*12;
					_wheelData=-1;
				}else{
					flag=wheelFlag/12;
				}
				if(flag<=0){
					flag=0;
					wheelFlag=0;
				}
				if(flag>=($(this).height()-this_scr.height())){
					flag=($(this).height()-this_scr.height());
					wheelFlag=($(this).height()-this_scr.height())*12;
				}
				this_scr.css('top',flag);
				this_con.css('top',-flag*(this_con.height()/$(this).height()));
				return false;
			});
		})
	}
	})
})(jQuery);
