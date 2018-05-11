$(document).ready(function(){
    $("#submit").click(function(){
        var todo={name:$("#name").val(),age:$("#age").val()};
        $.ajax({
            type:"POST",
            url:"/todo",
            data:todo,
            success:function(data){
                console.log(data);
                location.reload();
            }
        });
    });
    $("#person-list").click(function(){
        console.log(event.target);
        var obj=$(event.target);
        if(obj.hasClass("personDel")){
            $.ajax({
                type:"DELETE",
                url:"/todo/"+obj.attr("key"),
                success:function(data){
                    console.log(data);
                    location.reload();
                }
            });
        }
    });
});