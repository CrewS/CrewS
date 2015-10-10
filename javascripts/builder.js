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
                    objD.innerHTML="<a target='_blank' href="+"'"+oD[i].href+"'"+" >"+oD[i].text+"</a>";
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
                    //console.log(e.target.tagName);
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
                    //console.log(arg);
                    if(this.className=="active"){
                        Builder.prototype.doMove(arg[0],arg[1]);
                        this.className="";
                        return 0;
                    }else{
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
        var ct=oH;
        var flag=false;
        var now=dom.style.height.match(/\d{1,}/)[0];
        var speed=-(26*n/40);
        if(now<oH){
            flag=true;
            speed=26*n/40;
            ct=31;
        }
        function animates(){
            if(flag&&Math.round(ct)>=31+26*n){
                dom.style.height=31+26*n+"px";
                //console.log(Math.round(ct),ct);
                clearInterval(fn);
                return ;
            }
            else if(!flag&&Math.round(ct)<=31){
                dom.style.height="31px";
                clearInterval(fn);
                //console.log(Math.round(ct),ct);
                return ;
            }
            ct+=speed;
            var xh=dom.style.height;
            xh=xh.slice(0,xh.length-2);
            xh=xh-0+speed+"px";
            dom.style.height=xh;

        }
        var fn=setInterval(animates,10)
    }
};
//bug-log
//1===>2015-10-10:完成了知识索引页面的动画，在速度调节上 用了百分比 所以在位移时会出现保留小数点的情况 导致无法恢复原高度[不用计数器算步数OK了 最后有个判定重置高度]
//

//问题思考列表:
//原型内部 各种变量的使用技巧 ，堆栈设置
//方法作用域理清思路