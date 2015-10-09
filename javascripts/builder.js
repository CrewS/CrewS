function Builder(){
    var oD=document.getElementById("wrap");
    this.init.apply(this,arguments);
    this.click.call(this);

}

Builder.prototype={
    message:[],
    init:function(oData){
        var oE,oD,oF;
        oF=document.createDocumentFragment();
        while(oData[0]){
            oD=oData[0].item;
            oE=document.createElement("dl");
            oF.appendChild(oE);
            for(var i= 0,len=oD.length;i<len;i++){
                var objD;
                if(oD[i].href){
                    objD=document.createElement("dd");
                    objD.innerHTML="<a href="+"'"+oD[i].href+"'"+" >"+oD[i].text+"</a>";
                }
                else{
                    objD=document.createElement("dt");
                    objD.innerHTML=oD[i].text+"["+(oD.length-1)+"]";
                }
                oE.appendChild(objD);
            }
            oE.style.height="31px";
            oData.shift();
        }
        var oT=document.getElementById("wrap");
        oT.appendChild(oF);
    },
    click:function(){
        var dl=document.getElementsByTagName("dl");
        for(var i= 0,len=dl.length;i<len;i++){
            (function(){
                dl[i].onclick=function(e){
                    console.log(e.target.tagName);
                    //dl[0]=>有值
                    //dl[i]=undefine =>
                    //为啥这里的i并没有值呢？for循环括号里的 域属于哪里？@问题
                    //解决办法:给这个立即执行函数设置变量 然后在后面带入参数
                    //没解决的问题 i为啥不显示
                    //console.log(i);
                    var n=this.getElementsByTagName("dd").length;
                    var that=this;
                    if(e.target.tagName!="DT")return;//判断事件源是否是DT点击
                    var arg=Builder.prototype.message.pop();
                    console.log(arg);
                    if(this.className=="active"){
                        //console.log(arg[0],arg[1]);
                        Builder.prototype.doMove(arg[0],arg[1]);
                        this.className="";
                        return 0;
                    }else{
                        //var arg=Builder.prototype.message.pop();
                        if(arg){
                            Builder.prototype.doMove(arg[0],arg[1]);
                            arg[1].className="";
                        }
                        Builder.prototype.doMove(n,that);
                        this.className="active";
                        Builder.prototype.message.push([n,that])
                    }

                }
            })()
        }
    },
    doMove: function (len,dom){
        var n=len;
        var oH=31+26*n;
        var ct=50;
        var num=-(2*(26*n/100));
        //console.log();
        var now=dom.style.height.match(/\d{1,}/)[0];
        //if(oH==31)return;
        if(now<oH){
            num=2*(26*n/100);
        }
        function animates(){
            if(ct==0){
                clearInterval(fn);
            }
            var xh=dom.style.height;
            xh=xh.slice(0,xh.length-2);
            xh=xh-0+num+"px";
            dom.style.height=xh;
            ct--;
        }
        var fn=setInterval(animates,10)
    }
};
//原型内部 各种变量的使用技巧 ，堆栈设置