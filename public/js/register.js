$(document).ready(function () {
    $('#checkclk').on('click', function () {
        if ($(this).is(":checked")) {
            $('#passWord1').attr('type', 'text');
        } else {
            $('#passWord2').attr('type', 'password');
        }
    })


    $('#checkclk').on('click', function () {
        if ($(this).is(":checked")) {
            $('#passWord2').attr('type', 'text');
        } else {
            $('#passWord2').attr('type', 'password');
        }
    })
    
    $('#btnclk').click(function () {
        var pswd1 = $('#passWord1').val();
        var pswd2 = $('#passWord2').val();

        if (pswd1 == pswd2) {
            alert("Sucessfully registered");
            window.location.href = 'http://localhost:2000/'
        } else {
            alert("passwword mismatched")
        }

    })

})

