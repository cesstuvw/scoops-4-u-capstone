
$(document).ready(function(){
    // var form = $('#form')
    // form.on('submit', function (e) {
    //     e.preventDefault();

       
    // })



    $('#btn_compute').on('click', function (e) {
        e.preventDefault();
        var total_amount = parseInt($('#total_amount').val())
        var cash = parseInt($('#cash').val())

        var result =  cash - total_amount
;
        // var formattedNumber = new result.toLocaleString('en-PH', options);
        var currency = parseFloat(result).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
        var msg = $('#msg')
        var pos_id = $('#pos_id').val()


        if(cash >= total_amount){
            $('#get_id').val(pos_id)
            $('#vchange').val(currency)
            $('#change').val(result)
            $('#btn-receipt').removeAttr('hidden');
            
            // $('#form').submit()


        }else{
            $('#msg').css("color", "red")
            // $('#msg').css("fontSize", "20px")
            $('#msg').css("display", "block")
            msg.html('<i class="msg">Invalid Payment<i/>')
            setTimeout(function (){
                $('.msg').remove()
            },3000)
        }
        
    })

    $('#btn-receipt').on('click', function(e){
        e.preventDefault()
        var cash = $('#cash').val()
        // var change = $('#change').val()
        
        if(cash == "" ){
            alert('all field required')
        }else if(cash.length > 12){
            alert('invalid cash')
        }else{
            $('#form').submit()
        }


    })


    if ($("#posTable > tbody > tr").length == null || $("#posTable > tbody > tr").length == 0){
        $("#removeAll").addClass("d-none");
        $("#orderSummary").addClass("d-none");

    }
    else{
        $("#removeAll").removeClass("d-none");
        $("#orderSummary").removeClass("d-none");
    };

    $('#btnCart').on('click', function(e){
        e.preventDefault();
        $('#addToCart').modal('show');
    });

})




