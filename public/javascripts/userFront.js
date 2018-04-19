$.ajax('/users',{
    
    accepts:"application/json",
    success: function(data,status){
        var $body = $('body');
        data.forEach((user) => {
            var $element = '<div> name is : '+ user.username +' age is : '+ user.age +'</div>';
            $body.append($element);
        });        
    },
    error: function(ajax,status,err){

    }
})

$("#submitBtn").on('click',function(e){
    var username = $('input[name="username"]').val();
    var age = $('input[name="age"]').val();
    $.ajax('/users/sendData',{
        method:"POST",
        contentType:"application/json",
        data:JSON.stringify({
            username: username,
            age: age
        }),
        success: function(data,status){
            var $body = $('body');
            var $element = '<div> name is : '+ data.username +' age is : '+ data.age +'</div>';
            $body.append($element);
                    
        },
        error: function(ajax,status,error){
            debugger;
        }
    });
})