$(document).ready(function(){
  
        var payment_id = $('#payment_id').val()
        $('#get_id').val(payment_id)

        // $('#btn-print').on('click', function (e) {
        //         window.print()
        //         $('#btn-receipt').removeClass("d-none");
                
        // })

        $('#btnPrint').on('click', function (e){
                // window.print()

                if($('#btn-receipt').hasClass("d-none")){
                        
                        $('#btn-receipt').removeClass("d-none");
                        
                }else{
                        $('#btn-receipt').addClass("d-none");
                }
        });

})