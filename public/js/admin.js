$(document).ready(function(){
    $('#sideHome').click(function(){
        window.location.href = 'http://localhost:2000/home'
    })
    $('#sideAdmin').click(function(){
        window.location.href = 'http://localhost:2000/admin'
    })
    $('.adminBtn').click(function(){
        window.location.href = 'http://localhost:2000/admin/add'
    })
})