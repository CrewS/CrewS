$(function(){
    var Bridge = (function(){
        var connectWebViewJavascriptBridge = function(callback) {
            if (window.WebViewJavascriptBridge) {
                callback(WebViewJavascriptBridge)
            } else {
                document.addEventListener('WebViewJavascriptBridgeReady', function() {
                    callback(WebViewJavascriptBridge)
                }, false)
            }
        };
        return {
            connect : connectWebViewJavascriptBridge
        };
    })();



    var delegateHandle = function(event) {
        event.preventDefault();

        var me = $(this);
        var src = me[0].href;

        // 点击图片
        if (me[0].tagName == 'IMG' && me.parents('.avatar').length == 0) {
            //console.log(1111);
            var imgAll = $('.info-text img');
            var json = {};
            var imagesList = [];
            var currentImage;

            imgAll.each(function () {
                imagesList.push(this.src);
            });

            json.imagesList = imagesList;
            json.currentImage = me[0].src;
            var type =$('#os').val();//type=1: IOS ;type=2:AND;

            try {
                //根据类型判断调用
                if(type==='iOS'){
                    Bridge.connect(function (bridge) {
                        bridge.callHandler('didClickImageViewFromWebView', {
                            'imagesList': json.imagesList,
                            'currentImage': json.currentImage
                        })
                    });
                }else if(type==='Android'){
                    window.ANDROID.didClickImageViewFromWebView( JSON.stringify({'imagesList': json.imagesList, 'currentImage': json.currentImage}) );
                }else{
                    console.log(111);
                }

            } catch (error) {
                console.log('imagesList: ' + json.imagesList, 'currentImage: ' + json.currentImage);
            }

        }
    };
    $('.info-text').delegate('img', 'click',delegateHandle);
});
