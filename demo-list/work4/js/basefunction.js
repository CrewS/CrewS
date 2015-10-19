$(document).ready(function(){
    //var checkboxDom=$(".click-checkbox");
    ////console.log(checkboxDom)
    //checkboxDom.click(function(){
    //    var nextDom=$(this).next();
    //    //console.log(nextDom);
    //    if($(this).hasClass("checkbox-icon")) {
    //        $(this).removeClass("checkbox-icon").addClass("checkbox-active");
    //        nextDom.addClass("has-done");
    //    }else{
    //        $(this).removeClass("checkbox-active").addClass("checkbox-icon");
    //        nextDom.removeClass("has-done");
    //    }
    //});
    $(".icon-add").click(function(){
        var ulDom=$(this).prev();
        var liDom=document.createElement("li");
        liDom.innerHTML="<input type='checkbox'>\n"+"<label class='checkbox checkbox-icon click-checkbox'></label> \n"+"" +
            "<div class='item'>write....</div>\n"+"<div class='delete'><i></i></div>";
        ulDom.append(liDom);
    });

    $(".item").dblclick(function(){
        console.log(this.contenteditable="true");
    });

    $(".to-do-list").click(function(e){
        //console.log($(e.target).hasClass("checkbox"));
        var dom=$(e.target);
        if(dom.hasClass("checkbox")){
            check(dom);
            return ;
        }
        if(dom.hasClass("delete")){
            deleteDom(dom);
            return ;
        }
    });
    function check(dom){
        var nextDom=dom.next();
        //console.log($(dom));
        console.log(dom.hasClass("checkbox-icon"));
        if(dom.hasClass("checkbox-icon")) {
            dom.removeClass("checkbox-icon").addClass("checkbox-active");
            nextDom.addClass("has-done");
        }else{
            dom.removeClass("checkbox-active").addClass("checkbox-icon");
            nextDom.removeClass("has-done");
        }
    }
    function deleteDom(dom){
        var farther=dom.parent();
        farther.remove();
    }

});
