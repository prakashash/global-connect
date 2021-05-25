$(document).ready(function(){
    $('#sideHome').click(function(){
        window.location.href = 'http://localhost:2000/home'

    })
    $('#sideAdmin').click(function(){
        window.location.href = 'http://localhost:2000/admin'
    })
    $('.logout').click(function(){
        window.location.href = 'http://localhost:2000'
    })
})