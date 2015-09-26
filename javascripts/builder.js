function Builder(){
    var oD=document.getElementById("wrap");
    this.init.apply(this,arguments);

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
                    var n=dl[i].getElementsByTagName("dd").length;
                    var oH=31+26*n;

                }
            })()
        }
    }
};
