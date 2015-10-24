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
            //��Ϊ��ť���滹�б�ǩ ����дһ�ݼ��� ����ð��
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
    //��¼ע�Ṧ��
    $(".close-btn").click(function(){
        $("#outer").hide();
    });
    $("#sign-in").click(function(){
        var name=$("#sign-name")[0].value,
            email=$("#inputEmail-sign")[0].value,
            pwd=$("#inputPassword-sign")[0].value;
            signIn(email,pwd,name);
    });
    $("#login-in").click(function(){
        var email=$("#inputEmail-login")[0].value,
            pwd=$("#inputPassword-login")[0].value;
            //console.log(loginIn(email,pwd));
            return loginIn(email,pwd);
    });
    function signIn(email,pwd,name){
        var user = new Bmob.User();
        user.set("username",email);
        user.set("password",pwd);
        user.set("email",email);
        user.set("china-name",name);

        user.signUp(null, {
            success: function(user) {
                console.log("success");
                window.location.reload();
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
    function loginIn(email,pwd){
        var user = new Bmob.User();
        var success=false;
        Bmob.User.logIn(email,pwd, {
            success: function(user) {
                // Do stuff after successful login.
                //console.log("success");
                window.location.reload();//�ɹ���תҳ��
                success=true;
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
                alert(error.message)
            }
        });
        return success;
    }






});
//�о���innerHTMLд��ǩ�� createElement������
//СBUG ���delete��ʱ�� ����㵽icon I��ǩ ���ᴥ���¼�....

