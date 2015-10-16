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
            datePlan=data[i].datePlan,
            workExe=document.createElement("td");
        tbody.appendChild(tr);
        tr.id=data[i].id;
        name.innerHTML=data[i].name;
        tr.appendChild(name);
        for(var j=0;j<datePlan.length;j++){
            var plan=document.createElement("td");
                plan.innerHTML=datePlan[j];
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