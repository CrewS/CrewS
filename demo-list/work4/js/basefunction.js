$(document).ready(function(){


    $("#date-box").click(function(e){
        //console.log($(e.target).hasClass("checkbox"));

        var dom=$(e.target);
        if(dom.hasClass("click-checkbox")){
            check(dom);
            return false;
        }
        if(dom.hasClass("delete")||dom.parent().hasClass("delete")){
            if(dom.hasClass("delete")){
                deleteDom(dom);
            }else{
                deleteDom(dom.parent());
            }
            return false;
        }
        if(dom.hasClass("icon-add")||dom.parent().hasClass("icon-add")){
            //console.log(dom.find("div.icon-add"));
            if(dom.hasClass("icon-add")){
                addIcon(dom);
            }else{
                addIcon(dom.parent());
            }
            //因为按钮下面还有标签 所以写一份兼容 让他冒泡
            return false;
        }

    });
    function check(dom){
        var nextDom=dom.next();
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
    function addIcon(dom){
        var ulDom=dom.prev();
        var liDom=document.createElement("li");

        liDom.innerHTML="<label class='base-checkbox checkbox-icon click-checkbox'></label>"+"" +
            "<div class='item edit-block' contenteditable='true'>...</div>"+"<div class='delete'><i></i></div>";
        ulDom.append(liDom);
    }
});
//研究下innerHTML写标签和 createElement的区别
//小BUG 点击delete的时候 如果点到icon I标签 不会触发事件....

