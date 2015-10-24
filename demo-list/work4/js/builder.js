/*
 *2015-10-16
 *
 *
*/

var Builder=function(data){
    var table=document.createDocumentFragment();
    var tbody=document.createElement("tbody");
        table.appendChild(tbody);
    var len=data.length;
    for(var i=0;i<len;i++){
        var tr=document.createElement("tr"),
            name=document.createElement("td"),
            datePlan=data[i].datePlan,//获取to-do-list
            workExe=document.createElement("td");
        tbody.appendChild(tr);
        tr.id=data[i].id;
        name.innerHTML=data[i].name;
        tr.appendChild(name);
        for(var j=0;j<datePlan.length;j++){
            var plan=document.createElement("td");//单元格容器
            var ul =document.createElement("ul");//列表
            plan.appendChild(ul);//添加列表
            ul.className="to-do-list";
            for(var k= 0;k<datePlan[j].length;k++){
                var item=datePlan[j][k];
                var liDom=document.createElement("li");
                var check=item.done==1 ? "checkbox-active":"checkbox-icon";
                var hasdone=item.done==1 ?" has-done":"";
                liDom.innerHTML="<label class='base-checkbox "+check+"'></label>"+"" +
                    "<div class='item"+hasdone+"'>"+item.content+"</div>"+"<div class='delete hidden'><i></i></div>";
                ul.appendChild(liDom);
            }

            tr.appendChild(plan);
        }
        workExe.innerHTML=data[i].workExe;
        tr.appendChild(workExe);
    }
    var dateBox = document.getElementById("date-box");
    dateBox.appendChild(table);
};
var Permission=function(){
    this.name="";

};

Permission.prototype={
  isLogin:function(){

  },
  isAuthor:function(){

  }
};