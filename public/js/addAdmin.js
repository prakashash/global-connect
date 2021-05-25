$(document).ready(function(){
    $('#userForm').submit(function(event){
        event.preventDefault()

        var adminInput = {
            name: $('#adminName').val(),
            email: $('#emailId').val(),
            password: $('#passWord').val()
        }
        $.ajax({
            type: 'POST',
            url: '/api/admin',
            data: adminInput,
            success: function(res){
                console.log(res)
                window.location.href='/admin'
            },
            error: function(error){
                console.log(error)
            }
        })
    })

    $('#sideHome').click(function(){
        window.location.href = 'http://localhost:2000/home'
    })
    $('#sideAdmin').click(function(){
        window.location.href = 'http://localhost:2000/admin'
    })
    $('.adminBtn').click(function(){
        window.location.href = 'http://localhost:2000/admin/add'
    })
    $('.logout').click(function(){
        window.location.href = 'http://localhost:2000'
    })
    $('#submitbtn').click(function(){
        window.location.href = 'http://localhost:2000/admin'
    })
})