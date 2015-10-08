function Builder(){
    var oD=document.getElementById("wrap");
    this.init.apply(this,arguments);
    this.click.call(this);

}

Builder.prototype={
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
                dl[i].onclick=function(){
                    //dl[0]=>有值
                    //dl[i]=undefine =>
                    //为啥这里的i并没有值呢？for循环括号里的 域属于哪里？@问题
                    //解决办法:给这个立即执行函数设置变量 然后在后面带入参数
                    //没解决的问题 i为啥不显示
                    //console.log(i);
                    var n=this.getElementsByTagName("dd").length;
                    var oH=31+26*n;
                    var ct=26*n;
                    var that=this;//
                    var num=1;
                    //var x=this.style.height.match(/\d{}/);
                    console.log(x);
                    function animate(){
                        if(ct==0){
                            clearInterval(fn);
                        }
                        var xh=that.style.height;
                            xh=xh.slice(0,xh.length-2);
                            xh=xh-0+num+"px";
                            that.style.height=xh;
                            //console.log(xh);
                            ct--;
                    }
                    var fn=setInterval(animate,10)
                }
            })()
        }
    }
};
