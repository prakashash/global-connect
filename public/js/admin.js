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

    $(".deletBtn").click(function() {
        var cnt = $('input[type=checkbox]:checked').length
        if(!cnt || cnt > 1){
            alert("Please select only one box")
            return;
        }
        
        var check = confirm("Please confirm");

        if (check){
            var all = $('input:checked');
            var checked = all.filter(':checked');
            var checkedId = checked.map(function(){
                return this.id
            })

            $.ajax({
                type: 'DELETE',
                url: `/api/admin/${checkedId[0]}`,
                success: function(res){
                    console.log(res)
                    window.location.href='/admin'
                },
                error: function(error){
                    console.log(error)
                }
            })
        }
   });

    $('.logout').click(function(){
        window.location.href = 'http://localhost:2000'
    })
})