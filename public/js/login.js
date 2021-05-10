$(document).ready(function(){
    var getUser = localStorage.getItem('username');
    var getPass = localStorage.getItem('password');
    var getcheckbox = localStorage.getItem('checkbox');

    if(getUser){
        $('#userName').val(getUser)
    }
    if(getPass){
        $('#passWord').val(getPass)
    }
    if(getcheckbox){
        $('#rememberMe').prop('checked', checkbox)

    }

    $('#rememberMe').click(function(){
        var username = $('#userName').val();
        var password = $('#passWord').val();

        if ($('#rememberMe').prop('checked')==true){
            if(username != ''){
                localStorage.setItem('username' ,username)            
            }
            if(password != ''){
                localStorage.setItem('password' ,password)            
            }
            localStorage.setItem('checked', checkbox)
        }else{
            localStorage.clear();
        }   
    })
    
    $('#showPswd').on('click', function(){
        if ($(this).is(":checked")){
            $('#passWord').attr('type','text');
        }else{
            $('#passWord').attr('type','password');
        }
    })
    $('#loginBtn').on('click', function(){
        window.location.href = 'http://localhost:2000/home'
    })
})
