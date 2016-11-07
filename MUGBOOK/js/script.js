$(document).ready(function(){
    $('#button').on("click", function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        
//        if (name != null){
        
        var varData = 'name=' + name + '&email=' + email + '&password=' + password;
            console.log(varData);
        
        $.ajax({
            data: varData,
            success: function() {
                alert("It was a success");
                $(location).attr('href', "profile.html");
            },
            error:function(){
                alert("Error");
            },
            
            
        
        });
    });
});