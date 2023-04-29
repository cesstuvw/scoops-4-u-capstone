$(document).ready(function () {
    // for most tables
    var table = $('#tableMain').DataTable({

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

         // order: [[1, 'asc']],
        order: [] 
    });

    $('#btn-place').html(table.buttons().container()); 


    // for row numbers
    table.on('order.dt search.dt', function () {
        let i = 1;

        table.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableM').keyup(function(){
        table.search($(this).val()).draw();
    });    
    
    









    // for most tables
    var tableProL = $('#tableMainProL').DataTable({

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

         // order: [[1, 'asc']],
        order: [] 
    });

    $('#btn-place').html(tableProL.buttons().container()); 


    // for row numbers
    tableProL.on('order.dt search.dt', function () {
        let i = 1;

        tableProL.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableProL.search($(this).val()).draw();
    });    
    





    // tables for transactions
    var tableOr = $('#tableOrder').DataTable({
        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],
        order: [] 
    });

    // for row numbers
    tableOr.on('order.dt search.dt', function () {
        let i = 1;

        tableOr.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableOr.search($(this).val()).draw();
    });  



    // Hide user table if empty
    if ($("#tableMain > tbody > tr").length == null || $("#tableMain > tbody > tr").length == 0){
        $("#tableMain").addClass("d-none");
        $("#resliID").addClass("d-none");
        $(".empty-screen1").removeClass("d-none");
        
    }
    else{
        $(".empty-screen1").addClass("d-none");
        $("#tableMain").removeClass("d-none");
        $("#resliID").removeClass("d-none");
    };


    if ($('#tableMainProL').DataTable().rows().count() === 0) {
        $("#tableMainProL").addClass("d-none");
        $("#proListID").addClass("d-none");
        $(".empty-screenProL").removeClass("d-none");
    } else {
        $("#tableMainProL").removeClass("d-none");
        $("#proListID").removeClass("d-none");
        $(".empty-screenProL").addClass("d-none");
    }

    if ($('#tableOrder').DataTable().rows().count() === 0) {
        $("#tableOrder").addClass("d-none");
        $("#ordersID").addClass("d-none");
        $(".empty-screen").removeClass("d-none");
    } else {
        $("#tableOrder").removeClass("d-none");
        $("#ordersID").removeClass("d-none");
        $(".empty-screen").addClass("d-none");
    }


        // Hide pending order
        // if ($("#tableOrder > tbody > tr").length == null || $("#tableOrder > tbody > tr").length == 0){
        //     $("#tableOrder").addClass("d-none");
        //     $("#ordersID").addClass("d-none");
        //     $(".empty-screen").removeClass("d-none");
            
        // }
        // else{
        //     $(".empty-screen").addClass("d-none");
        //     $("#tableOrder").removeClass("d-none");
        //     $("#ordersID").removeClass("d-none");
        // };
    
    
    // if ($('#tableAdd').DataTable().rows().count() === 0) {
    //     $("#tableAdd").addClass("d-none");
    //     $("#addStoID").addClass("d-none");
    //     $(".empty-screenAdd").removeClass("d-none");
    // } else {
    //     $("#tableAdd").removeClass("d-none");
    //     $("#addStoID").removeClass("d-none");
    //     $(".empty-screenAdd").addClass("d-none");
    // }

    if ($("#tableAdd > tbody > tr").length == null || $("#tableAdd > tbody > tr").length == 0){
        $("#tableAdd").addClass("d-none");
        $("#addStoID").addClass("d-none");
        $(".empty-screenAdd").removeClass("d-none");
        
    }
    else{
        $(".empty-screenAdd").addClass("d-none");
        $("#tableAdd").removeClass("d-none");
        $("#addStoID").removeClass("d-none");
    };
    


    // Hide OS table if empty
    if ($("#tableRepOS > tbody > tr").length == null || $("#tableRepOS > tbody > tr").length == 0){
        $("#tableRepOS").addClass("d-none");
        $("#osID").addClass("d-none");
        $(".empty-screen").removeClass("d-none");
        
    }
    else{
        $(".empty-screen").addClass("d-none");
        $("#tableRepOS").removeClass("d-none");
        $("#osID").removeClass("d-none");
    };



    // Hide user table if empty
    if ($("#tableRepUs > tbody > tr").length == null || $("#tableRepUs > tbody > tr").length == 0){
        $("#tableRepUs").addClass("d-none");
        $("#usID").addClass("d-none");
        $(".empty-screenUs").removeClass("d-none");
        
    }
    else{
        $(".empty-screenUs").addClass("d-none");
        $("#tableRepUs").removeClass("d-none");
        $("#usID").removeClass("d-none");
    };

    // Hide res table if empty
    if ($("#tableRepRes > tbody > tr").length == null || $("#tableRepRes > tbody > tr").length == 0){
        $("#tableRepRes").addClass("d-none");
        $("#resID").addClass("d-none");
        $(".empty-screenRes").removeClass("d-none");
        
    }
    else{
        $(".empty-screenRes").addClass("d-none");
        $("#tableRepRes").removeClass("d-none");
        $("#resID").removeClass("d-none");
    };

    // Hide act table if empty
    if ($("#tableRep > tbody > tr").length == null || $("#tableRep > tbody > tr").length == 0){
        $("#tableRep").addClass("d-none");
        $("#actID").addClass("d-none");
        $(".empty-screenAct").removeClass("d-none");
        
    }
    else{
        $(".empty-screenAct").addClass("d-none");
        $("#tableRep").removeClass("d-none");
        $("#actID").removeClass("d-none");
    };





      // for most tables (reports actlog)


    var tableRep = $('#tableRep').DataTable({

        dom: 'lBfrtip',

    
        // buttons: [
        //     // 'excel', 
        //     { extend: 'excel', text: '<i class="ri-file-excel-2-fill"></i>' },
        //     { extend: 'print', text: '<i class="ri-printer-fill"></i>' },
        // ],
        buttons: [
            {
                extend: 'collection',
                text: '<i class="ri-save-fill"></i>',
                buttons: [
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel', 

                    exportOptions: {
                        columns: ':not(:eq(0))' // Exclude column with index 2
                    }
                
                    },
                    
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        // orientation: 'landscape',
                        // title: function() {
                        //     return document.title;
                        // },

                        filename: function() {
                            var now = new Date();
                            var options = { hour: '2-digit', minute:'2-digit', hour12: true };
                            var jsTime = now.toLocaleTimeString([], options).replace(/:/g, '-');
                            
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            return 'SCOOPS 4 U' + ' - ' + document.title + '' + ' (' + jsDate + ' '+ jsTime + ')';
                        },
                        
                        pageSize: {
                            width: 8.5 * 72,  // convert inches to points (1 inch = 72 points)
                            height: 13 * 72
                        },
                        customize: function (doc) {

                            pdfMake.fonts = {
                                Poppins: {
                                        normal: 'Poppins-Light.ttf',
                                        bold: 'Poppins-Bold.ttf',
                                        italics: 'Poppins-Black.ttf',
                                        bolditalics: 'Poppins-Medium.ttf'
                                }
                            };
                            doc.defaultStyle.font = 'Poppins';


                            delete doc.styles.tableBodyOdd.fillColor;
                            doc.content[1].table.body[0].forEach(function(h) {
                                h.fillColor = '#001BDE';
                            });
                            
                            var logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACbEAAAFuCAYAAAC1e8cOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAALNDSURBVHgB7N0LfFznXef/73Nm5HtiJU0aW5LJyHbSNlAiQ2kboHjMrVwKcRYKBQqW2T9LgRbbXBYoWyyXOyy1AywsuxQ7wFJoy8Yp7VIKrRUCTQstdnoLJJZmUluScx878UWey/M/zxnNzJnRXM5Io5vn8369Rp6RzjzznHOec5TXS9/8fka4tm23q5VLb1aucJ3/6pUqmH7JrJPsTcWH2SJjXipre4LtPa3yv66T1Rr/Z/73rOf/63/LWv+R9be94r+4pIKmg+2NXvS3fc5/8rz/PO0/f95/i/+z7L8rtnpKPdlzunFwUp82WQEAAAAAAAAAAAAAAABADSOsfNsfX61cfLOueq+Uzb/SP60D8uxXyuql/hnu87dYpaVV8B9nZc1ZyX5BxnvCn9enVSiMa3LwMX++VgAAAAAAAAAAAAAAAAC6EiG2leaGsY1alx+U6dmpgr1dxnyFZL/U/8l1Wple9B+fkrXj8rzP+PvysLLrPq8nN10UAAAAAAAAAAAAAAAAgGseIbblrv/sgMzVpKz5Sv/VXZK90/93ja5lVll/Zf6z/+/n/CX6z+q5/KCeuGNKAAAAAAAAAAAAAAAAAK45hNiWm80TNyl+9WtVMK+TyX+LrLlD8Nl/k1ylNu+vpUsPa+IVzwoAAAAAAAAAAAAAAADAikeIbTkYGH+1CnaXjPkOWfsa/9+40IIZlewH/X8/qonBUwIAAAAAAAAAAAAAAACwIhFiWyoDqaQKer2M/QH/1RZhHsyYrB2V1X2a2vqQAAAAAAAAAAAAAAAAAKwYhNgWUxBcK3yLPPOjsuoVFkJa1n5Mxvvfmhj8hAAAAAAAAAAAAAAAAAAsa4TYFtqWL/bJZv+Lf6h/RFZ9wmJKS96fq8e+W+nBtAAAAAAAAAAAAAAAAAAsO4TYFsIdn1ul8+veJHk/JBW+QVh6xnxY+cKfa2rb/xEAAAAAAAAAAAAAAACAZYMQWycNnN7uH9I3+499tAtdpoyZki28Vz3eEaqzAQAAAAAAAAAAAAAAAEuPEFsnDKSSsvZn/GffLqwcVn8leb+rycTHBQAAAAAAAAAAAAAAAGBJEGKbj/6xN/iH8B3+s1cLK5gZk7EjOrv1zwUAAAAAAAAAAAAAAABgURFia9ct59ar58X/LHn7ZTUoXEvS8uwva9vWP9WoyQkAAAAAAAAAAAAAAADAgiPEFlUQXrv8Vln7Y/6rW4VrWVqm8Gvavu0oYTYAAAAAAAAAAAAAAABgYRFia+UrbY+mxg7IxH5UsluFbuIqs71TZ7YdFQAAAAAAAAAAAAAAAIAFQYitmb7x7/CP0G/6z14hdLO0CnqHprb+uQAAAAAAAAAAAAAAAAB0FCG2ejaPf508/ar/7GsFlFjzr/4ls1+TiY8LAAAAAAAAAAAAAAAAQEcQYgu7feImXZo+IqsfENCQOaYeHVJ6MC0AAAAAAAAAAAAAAAAA80KIzRn4+FoVNr9Nnv0FWfUKaMXaC/L06zq79Tf9y8gKAAAAAAAAAAAAAAAAwJwQYus/vUuK/bFktwpoX9q/jL5PE4OfEAAAAAAAAAAAAAAAAIC2dW+Irf/sS6TpX/UPwY8KmC9r361V3q/QYhQAAAAAAAAAAAAAAABoT3eG2AbG/pOs/qe/+zcL6Jy0bP6XNXnbnwgAAAAAAAAAAAAAAABAJN0VYtt27qW6cum/+89+UMCCsUfV472TqmwAAAAAAAAAAAAAAABAa90TYhtIJSX7HlltErDw0rJmvyYHHxAAAAAAAAAAAAAAAACAhq79EFsitUY5+9uyequAxfer2vTcIX36VVkBAAAAAAAAAAAAAAAAmOXaDrH1j90ueX8l2SEBSyetHrOL9qIAAAAAAAAAAAAAAADAbJ6uVQPjb/V37yQBNiwDCWXtSW1O7RMAAAAAAAAAAAAAAACAKtdeJbaBM2ulq78uawgMYRmy79LGy7+gL3zZVQEAAAAAAAAAAAAAAAC4xkJsiVRCVwsfkjF3CFiujEkprq+nvSgAAAAAAAAAAAAAAABwLbUT7X/8tcrZhwmwYdmzdlBZ+4/6krGvFQAAAAAAAAAAAAAAANDlro0Q28Dpt0mxh2W1ScDKsEV585C2jL9DAAAAAAAAAAAAAAAAQBdb+e1EB8aOyJp9AlYqY9+ps9sOCgAAAAAAAAAAAAAAAOhCKzfEdsPYRq01f+nvwbcIWPEK75NZ/Rad3fKcAAAAAAAAAAAAAAAAgC6yMkNs26du1uXLD/nPXibgmmHH1ON9o9KDaQEAAAAAAAAAAAAAAABdYuWF2BKphLL2hHsm4NqTVo/ZRZANAAAAAAAAAAAAAAAA3cLTSnJr+hXKFlwFtoSAa5MLaY6qf+x2AQAAAAAAAAAAAAAAAF1g5YTY+h+/S7n8Q5IZEHBtu1VW/+Sv+dcKAAAAAAAAAAAAAAAAuMatjHai/ae/Xsb7a1n1Cugel2XMt+ns4KgAAAAAAAAAAAAAAACAa9Tyr8S2JfV6AmzoUmtl7d9p8/g3CwAAAAAAAAAAAAAAALhGLe9KbFse/2blvQ/JmLiAbmWV9R9v0NTWjwgAAAAAAAAAAAAAAAC4xizfENtAKqmC/Yg/wx4ByEiF79LE9o8JAAAAAAAAAAAAAAAAuIYszxBb/6N3Sas/KtdOEUBJRsp/qyZu+4QAAAAAAAAAAAAAAACAa8TyC7EN/vvLdHXVQ/6zmwWgmtUzsrmv09TtjwoAAAAAAAAAAAAAAAC4BiyvEFsilVDWjvrPbhWABuxZ9XivU3owLQAAAAAAAAAAAAAAAGCF87RcFANsJ0SADWjBDATXyi2PvFQAAAAAAAAAAAAAAADACrc8KrENnLlRyv2LrN0mAFH9hy7Z1+j5becFAAAAAAAAAAAAAAAArFDLoxKbzf4hATagbS/TOu89AgAAAAAAAAAAAAAAAFawpQ+x9Y+/0//6PQIwB/Zb1Z86LAAAAAAAAAAAAAAAAGCFWtoQW9/4O/yv7xCAebD71Xf6bQIAAAAAAAAAAAAAAABWIKOlsnnsa+WZhwSgM4x5rc4OflIAAAAAAAAAAAAAAADACrI0ldgSqYT/ye8RgM4p2OPBtQUAAAAAAAAAAAAAAACsIIsfYrvjc6uU08ckMyAAnWO0SbnChzTw8bUCAAAAAAAAAAAAAAAAVojFD7Gd3/BrsnZQADrPmjtkb/k1AQAAAAAAAAAAAAAAACuE0WLqH9vvf+RhAVhYtvCTmtz+ewIAAAAAAAAAAAAAAACWucULsSVSCeXsSVn1CsBCuyTZHZrY9pgAAAAAAAAAAAAAAACAZWxx2ol+5ad6lLUnCLABi2adrPkrJVJrBAAAAAAAAAAAAAAAACxjixNiO3fjQf9rQgAWj9GQcua3BAAAAAAAAAAAAAAAACxjC99OdEvqbhXscQFYGia/S2dvGxUAAAAAAAAAAAAAAACwDC1siC2RSgRtRKnCBiwdq3PKF+7Uk9ufEgAAAAAAAAAAAAAAALDMLGw70ax+SQTYgKVltElx77cFAAAAAAAAAAAAAAAALEMLV4lty9gPq2DeLQDLgzH/SWcH7xcAAAAAAAAAAAAAAACwjCxMiI02osDyY+3TMqtfoYmBZwUAAAAAAAAAAAAAAAAsEwvTTvRq4b+JABuwvBhzszT9qwIAAAAAAAAAAAAAAACWkc5XYut//C4p9nEBWKa8r9dE4oQAAAAAAAAAAAAAAACAZaDTldiMFPsLAVjGCn+sgY+vFQAAAAAAAAAAAAAAALAMdDbENpD6OdFGFFjutqrw0rcJAAAAAAAAAAAAAAAAWAY61040kUooW3jEH/J6AVjuMsrnb9e5254WAAAAAAAAAAAAAAAAsITi6pSsDhJgQ6ddt8HTnXes0rZb4zJGyuWkc0/nderzV/XMc3lhznrleYf9f98sAAAAAAAAAAAAAAAAYAl1phJb3+mvkfH+SUAHvHpotXZ/yzrd/fr1uuO2nobbpc7kdOLjl/X+D17S3564JMyBp6/Tma0PCQAAAAAAAAAAAAAAAFginQmxDYz/q6xeJWAeknet0cGfuiH4t13pMzm9/Tef03uOXxTaYO0/aXLb6wQAAAAAAAAAAAAAAAAskfmH2DaPv1me/kzAHPVe7+nXf+FGveUHr9N8/fO/XtGb3/a00mdzQlSx79DErR8UAAAAAAAAAAAAAAAAsATmH2LrH0/5XxMC5iCxJa4T790c/Nspk0/m9aYff1IPfXJaiMDYL+iW54f06VdlBQAAAAAAAAAAAAAAACwyT/PRl9orAmyYoy9/xSo99H87G2Bz+m6J6cH39+k7v2mdEIE1d2iqd78AAAAAAAAAAAAAAACAJTD3SmxJG9fjqcdFiA1zEFRge99mJQY6G2ALs1Z69bdP6lOfoSJbS1Yp5de9Uk9uuigAAAAAAAAAAAAAAABgEc29EttpqrBh7j7yF5sWNMDmGCO9749euuCfc00wGlTP5bcKAAAAAAAAAAAAAAAAWGRzC7G5KmxWbxcwB7/yX2/QbYM9Wgyu4tsf/PpLhAisfYtuObdeAAAAAAAAAAAAAAAAwCKaW4jtsfEfElXYMAcuVPb2n+zVYvrWXeuU/Oo1QksJxS79sAAAAAAAAAAAAAAAAIBFNLcQmzHvEDAHB3/qBhktvoMHbhAiOSAAAAAAAAAAAAAAAABgEbUfYusf/0FRhQ1zcNONMX3f3UvTrTJ51xp93WuoxtaS0aBuGXuDAAAAAAAAAAAAAAAAgEUyl0psIwLm4A3fuFarVy1FHbaib9q5VoggLiotAgAAAAAAAAAAAAAAYNG0F2K7Nf3V/tetAubg9cmlDZG96TuWpgrcymNerYHHkwIAAAAAAAAAAAAAAAAWQXshtpz9SQFz9LVftbTtPLcP9mjDuqWrBLei2NjPCAAAAAAAAAAAAAAAAFgE0UNsiVRCst8rYA5ecmNMA5vjWmpDX7ZKiOTbNXB6uwAAAAAAAAAAAAAAAIAFFj3ElrMHBMzRy7f1aDnYduvymMeKUDA/IAAAAAAAAAAAAAAAAGCBRS+NZc0b/S9CtcEtPdp512ptWO9p80tjwRF6PlPQ5Lm8PvPotD7/WFaQepa+CBvaZcx+3fG5X9cXvuyqAAAAAAAAAAAAAAAAgAUSLVq0eewHJLtZCLx6aLXedPd67Xnjdbqxt3kxu7NTOf3DQ5d15I8v6JEvkAXCitKr59a9yf/3TwUAAAAAAAAAAAAAAAAskGjtRGPemwXdcXuP/v49m/TJD/bpwI9sbBlgcwY2xzX8Pdfp1Ef69eH/s0m3DXZnSbKnniloObh4aXnMY8WI6YcEAAAAAAAAAAAAAAAALKDWKaxEKiFrv0Vd7hfe2qvPf2xA3/i6tZqr1+9cq8ce2qLf/MUbtHqVUTd5YiKrq9mlb0f7xYm80JZv0JZ/7xMAAAAAAAAAAAAAAACwQFqH2LLmP6uL9V7vBRXUfu3nb1Cn/Ncf69XHP7BZfZu6pyrbxUtWk08ufYDsXx+ZFtqU7/kRAQAAAAAAAAAAAAAAAAskQjvRQte2EnUBtoc/0BdUUOu0r/iy1Xrw/Zu1+aXdE2T7wEcuaSmNfuKK7NIXg1t5jEeIDQAAAAAAAAAAAAAAAAumeYgtkXqt+6ou9f7//VK9fHuPFsr2RFx//55NQViuG9z/txe1lD70D0sbolu5bL8GHk8KAAAAAAAAAAAAAAAAWADN01NX1bUVmEZ+6gZ9w9d0vgJbrS99WY9GfqZzrUqXs4f/bVqZCwUtlfd/cGlDdCtaIf56AQAAAAAAAAAAAAAAAAugeYjN2K9XF3rZth4d/KleLZZ9P3y9knet0bVuetrqN//HeS2FY+99QemzOWGOjP1RAQAAAAAAAAAAAAAAAAugcYhty/jr1KWtRP/oN2/SYvvNt98oz+ia9z//7IKeejavxWStdOhdGWFebqClKAAAAAAAAAAAAAAAABZC4xBb3gyrC33NV63RztcuflW0V+9YrW/8uoVvX7rUXDvRn3j7s1pMhw4/TxW2TqClKAAAAAAAAAAAAAAAABZA4xCbsUl1oZ8Yvk5L5RfeungtTJfS+z90Ue85/qIWw3+MZfUr9y5NC9NrjrE/IAAAAAAAAAAAAAAAAKDD6jewTKSGlLUn1YUunU5o7Zql6euZy1ndMvRFPZcp6FrnjvHo+zYHFegWSvpMTsnvntITE1Rh6xiTfY3OvuxfBAAAAAAAAAAAAAAAAHRI/UpsefsN6kLf+vVrlyzA5sTjRt+ya526weUrVm/Y+6Q+9ZlpLQQXYNv1RgJsHVdYlRQAAAAAAAAAAAAAAADQQfVDbAV9h7rQK1+2Skvtzlf0qFs8/Uxe3/Smc/r9oxfUSf/w0GW95g2TSp8lwNZ59jsFAAAAAAAAAAAAAAAAdNDsENvt/3GT/3WnutDLti19gOyO25c+SLeYMhcKets7ntUP7Xt63qEzN9bP/dpz+ubvP6enns0LC+LV2jxxkwAAAAAAAAAAAAAAAIAOmR1iu7jmtepSN94Q01JbDkG6pfBnf/2iXvOGCf38rz3fdpjNhdd+8w8yGnztGf3WH5yXtcJCMeqRyX+NAAAAAAAAAAAAAAAAgA6Jz/5W4bvUpdatNVpqPfGln8NSeeqZYhjNPXbetUbf9a3r9Ooda5TYEtctN8VC2+X1zPN5ffLktO7/20v66D9f1qVLJNcWjcl9nf/1AQEAAAAAAAAAAAAAAAAdUCfEpi9Xl7q4DIJQ2SxhLOfBh68Ej5J43Oi6DUbT01aXLnOMlpS13+J//WkBAAAAAAAAAAAAAAAAHVDdTjTx1CbJfoW61PkX8lpq555Z+jksR7mc1fOZAgG25cCYO9R/dkAAAAAAAAAAAAAAAABAB1SH2K5e3Kku9vSzSx8g+/x/ZAUse4Xprr5XAAAAAAAAAAAAAAAAoHOqQ2yyr1MX+8JjSx8g++y/TwtY/rxXCQAAAAAAAAAAAAAAAOiA6hCbMV+qLnb8w5e01P7tM1cFLHue7hIAAAAAAAAAAAAAAADQAZUQ282f2yBrv0ZdLHOhoNGHr2ip/MdYVp84SSU2rAT2y3XD2EYBAAAAAAAAAAAAAAAA81QJsa1ed4eMetTl3v+hi1oq/+PYBQErxFr1mIQAAAAAAAAAAAAAAACAeYpXnsbukvLqdn/8Fy/o7W/bqL5b4lpM518o6G/+funbmUK6br3Rd79hvb7uNWv01a9aq5fc4Om5TD6olPehj17Wh09cUvpsTl0vZpL+10cEAAAAAAAAAAAAACvZ5tO75cXu9p+NamLwPs1FIjWkrPb5zzK6mDmkzI6MFlMi1et//sHgeY/uVXowLQBYQUJJrcKXC5q+avUbv39ev/vLL9Fi+rXfyxCMWgZ+/sc36ufe2qve672q77sg222DPXrDN65zr/Qb/yOj3/mjC3rmuS4Ofhp7uwAAAAAAAAAAAAAsvf7UCVmbCJ5nc/fo6dtP1d/u9LCsVww6yd6nyW0jDcYbksn11v3Z2dtG1YoLVOW0R1ZD/uckih9nMjJK++M+EGmMxeKOibyj/gTdq2FtHrtBU9uOVG2z5fRu5b3DwXNjXNBtb9XPE6mEcvaE/6x4zNZvHFJGu7SYsvakm0nxuXar9+SORQ/SAcA8VEJsVluFwO8dvaDvv2eDXvsVq7UYHk9l9Vt/cF5YOjds9PR///gWJe9aE2n7n/+JXr3pOzdo1xunujd8aMxXCAAAAAAAAAAAAMDSCipw2aTMzOtGATbHuGpjM6EyeSk1dlg2lpz1Xau0/3VQzfSP7VfOHvS3rQ7BGTszRmy/+sfT6jG75l0tbCCVlM0n1K6LLxwvB7xs7Nby3IJ5aqf/tTrEVvD3xcwExMrHLySfH5L1KvtrNXubhZeoet6z3r0+JXTWwOPJ8nMbz2hikGPc7YIqjP49oJWCMvJiadZMYzMhNuv/Oku9Sij7nrc8pYfu36xb+xe2reiFFwv65u87JyyddeuMPvbezRr60lVtvS+xJa4T79vcxUE2+6Xa/vhqnb5tWgAAAAAAAAAAAACWRk7h8MRo022trWx7NfuIOq3/9DHJ7JFtuWUiqBzW/9guTdw+90CH1R7JG1a71t5yQhkVQ2yeHqyar/VG1a5YbNQ/tplKcM8uRUjFfWbx/LqwYfZiWuisIDQZVNyb4Z/z3pODVLzrcld1t4w30nK7oCGgf7NxIV6Tv0/x+DHa/lYr9kzsS7m2gBuEsjOTOe3+4Sf1bKaghXLpktWbfuwp2ogusUM/fUPbAbYSF2T7k3fdJGPUja7TxfWbBAAAAAAAAAAAAGDpFILKYTPPm4SnXMW2SrWuTPOKbTrufzlWfLQIxpUMjI1I3p7ya2uPK2+SmthqgsfF8zf4E9w7U83N8ecTv1+9J3u1lM4OjgbzMua4P+cRTQ3eq3alBzP+sbonGKNgj+jShb1abPnpe/z5HwvOmcndQ7BqAQShySq92rChdQUuoFpCNnZQWXsiaEWMsmKZMc/bKrtwYa2V6tTnr+qb3jSlB/7kFm3p62xFtsyFgvb+1NP62xOXhaXjQmg/86MbNR+7vnqtvul1a/WRf+zCc1nIvtL/+oQAAAAAAAAAAAAALA1PQ+VKYqZJFbF8Plmqc6NWbSbPhoJc/aeH/fclm27vghhZe7D82oXBJrcdqtrGhaoyOqZNj44qvvrkTNWyhNZdv8///iHNlwtwFVYdi7Ttub7qv3FObD/mfz2m+QjCcBEDfwvh3CvS/tfFD891E2N3z6oy6MJIS3nesdyMKt8zUvcnsenBoKWz9ddRUSIIsvWe3EHotKiYzLKFrxTqOvm5q9r53VP66F9u1uCXdCbIlj6T0+7//KQe+cJVYWn94k92JtT/C2/r7c4Qm1dwIbYPCgAAAAAAAAAAAMASscny08KVxi1C87E7ZWYSOIUOt7vMhgJyrtJabYAtzIWt+lJH/LmMBK+N8d/bgRCbvLTObXlQwEJwYc5yu9igFW3p+VBQTZAQEgKm2X3Iff+Y+sf2+9sdnvle54K814CZEJtuVXe2Q4wk9cWctn71Gb1jf69+/id6tW7t3A7WCxet3v2eCzr0rkxQiQ1L72tftUadkLxrjfo3xTVxrutaw24RAAAAAAAAAAAAgKWRSA0payvBmmI1rvqMkpXnTSq2zUlsj0olqqw50nLzVXpAWY3MvEpqqYVb+qUH05qL6raAmWKL0aqfu/PU2/Bz3M+z+d2ysVuD154LSuUe0dnbRhXt88Pjz/782jmGP9+9dzqflIndWf6ezT+i1bHRuuNEnY8bM+bvT8GfV6P9iTLvVuPm80/Ma66RhNe4de12/eMVtOft1drePf4s7m0x70ToVaatubZ/jBJBsLQza6l2rcx37ETdcRfifW4/cnLtXu8M1opTXNen5nydd8LEtiPqG9spY2YqsgX/zg6xNbteS/eKwpX7mt73nX7/94TyQ+Vz1ugYNPu8ZveuZtp8bzHEZrw7XKNsNPfLRzL6s79+Ufv+80a98Q3rgtBSFC6w9r//4oIO/68LmnoqLywPt9wc08tv61GnvO41q/WXD3RZiM2zVHEEAAAAAAAAAAAAFtpAKqmCPTrr+1etQgVretU3nmo8iE2Un3r2mL9tdRBmcuug5sr6Y5fmYdW6ytsVZRTT8pG1leO2eTKhqZp2o1FkdbRSFc8M+1/uq/q5C9NYeyL0neIRc+fW6qA/h2RQza5ULS/4xz9I/eNp/5sjmhi8r9nH66r2lavbyRxTvdaiV/3PLwavpE3+567RI8oV9itn98nzehXulWk8d1xcAOaYLmYORK40FoSc/GPh9sfz3Noo7mlpfwb8dWeNG/NQMGbVvIO2nLsajNvrj3vYn+vuYK7hcb3QXHt0qOMBpWK73GT5dTZ/r3p60v6HjwSvvaA9ZPMQW9X6aLKfdd9rT7pZBM9d29xGbWOD1r+xff72Q3XXUvHYH295jFxASt7Rmfe67QaLgVn/+M9nnW4KjmP4HhWtglS773PnKxeslWS5el7pHaV13Td+SsYcaXldLRRjH5gJrzmzWwjW7rO7L62ePu9fryP+9/dVzsGaUf9Luu5nuIpvxhz010xv1TkrX9vj/nvNAf8YFO/Z4c9z94dzg8WKcjnt8cc4Uhk3taP8nlbqraUmZlJYhQEhEtcK9MDIs8Fj511rggpcr/ry1RrcEtf69cXyqO5e+ZlHp/XZf8/q45+6ogc/cUWXLllhebm1vzPtYUu+5lVr9JcPXFRXsXqpAAAAAAAAAAAAACy8Uvhovts4Lthh6gQn5szsV35mvCuZR4RoXMjE2sMttkr4J+yY+sdH1GN2dSygFZMLyRzxz91Q8w3tsNZvTKo31fqz3f7k7EGpydoKQkV2vz/m7mDMq2qtGCJzAcCEbIu5ZpX0t9/V0SBbdbvcU3r69lPalHJBzJGZLZLaPHlr0/Cj0SH/vcny9lFbkBarLSbKrwtX61fsKofkmhyg4rEvHqPNpw9oavtxRbHltP+eOiHamlkE63Tg8UGdvW1ES6W0Bm2L+5txFdrcdZVKthXSXCqx6cHiOTCJltuG10PzqFLS3+akf84ONT1ncd2nnL/WS8fUFu72v0YLsYUrGBoz0mrruO743CqdFyG2OXjw4SvBAyvTxQ4HC7/utavVdYzt0/bHV+v0bdMCAAAAAAAAAAAAsDDichWr0rO+Hw6t2QbVeIrbVbcjtOpsYGNy8IG2to+HwkjN5n0tGxgbkTUHZ15lVLDHZL1T/sFJy8v556qwO9Sy0ikGuXpP7uhI4MbakfLYrrpXwbWY9T/bieeG/Pnsb+uzXXhI5nBNaGZUxhxXwT/HhXgmGNdq90xFsuKYrjWnaVGQqxRgK8oUq0L5x8qN6XhXh/0xhstzvWrv9//doY7x9pWfmpl2uecG0+pPjZarq5nLw6rXErLk7OBosRLazHW47vp9/p4cUitZ7Qu9Gp3VOjIc8Atvl3fV+GbOZ2k9hY+R592vgcd3tWwD6u4dhXAlLVcJbubYzx7X/3HsoDaPZTS17YgWW+maqqzB2Wtl1toOQpoJf8volfE6wrXuLYW7ItwDXbXG8DUQVF8z7r4xu23x7PXQ/P5SOmeNuPa1fakj5YqJxvjXeoS1W1vBMH/lwVZviev5dZvllSKjQPf44mRO2ZxVTzxahcpWXvny1XrpS2J66tluahlrVuni+k3+k/bL6QIAAAAAAAAAAACIJh20bpvdhq1/vBLXuHS+ScAodTiofuUUzIimBpu3PlxoVntCL0bVjUoBNhcgu3ShXiWoB7Tp0YRiq/YFle6KElp3/VFldI/mKwivKC2Tu0eTt9dWVXJhk3vVlzoYavWZaBi8KoZVKhXl3LgFM1xuR1g7rmt7ab2DwRy88r7Vt+X0bhVCgZz89I5ZQS43bv/pB8ttC12Vrb7U3W2HK+sp7lulWl04iGN0vFJdLQhyNQ/2FEw4CJRUlCCQQiGgYpvYatmacFOhsLdBhTW3ng4pttoF/Ir7Y2P3q/fkYItQZDF0V7BHdPnCoQbr9JC81ZVWtZ6/tntPHlvU6mbF83Sw/LrxdVVvbSfVN3ZQk9sinI+OzXV35Rt1zusswToohvIuXbi34bF1LV/DAbbm582//lYdDEKInmleEdJk/WspPjLzqlcDjydbBiCLa3Nm+v75mH3dzuL5E9ksoAu98GJBqS/m1CkuHH7Hy3rUdQq56wQAAAAAAAAAAABgcbk2gyWuxWHzwEj1tkvJBThc9aMyL1pLw2uRC5hMbtvb8Ny50MfEtgP+8apUtTJmdxAg6cjnT+/SxO2N18Pk4CH/A0dDn52su104rBIEqfxxZwfYKia2Hwu2MREqAuZdxaoZrmpboyCMG7NqrtqtTqjet+pKaK7NYuXzEi3PyyqFw6PJltu7AF8pkOSCgROD91X9fCCVrLqWGgfYitzcXUvaSvXD3iCY2Iq7Z0xtO9B0nXpmb+g7vVrbu0eLKWifWTba9LpygrVtD5Rfu+pirsXrQnJV0tw5C1dKc/eA2vPaUG5XELRrtF+191Y3dqvz5o5T+P7SSHCfCF1frnpbS6EAZsE7pghcDbZbBHSp//exS+qk1+zowpaisfwrBQAAAAAAAAAAAGBxZfOVYJpsuvnGoTDBlcwjWkpV1XmU7ki1LMfY3epPHW36WOiQSjvcvrsKSVH0eIeq2q7aeCcCQqNRKiPJVFULS846hrODMyORxnXbFEx7LSeNaX7+TM4/TmYkeLj964gmldBcm8VwsCfv3a1m2t2+EAv9vE7FwnBFQ1fpqlmALTyHcODMtKiEF8wjwjauXWp437xQcHahFddgsvw6P7030vsmth0JBSk7E7xz96G+8VTdR9Y+75+n6gCbC5lF4c5vs8CpU3tvnev9pZFW94IwV20xHMBsFmoN8ZTTKwR0qU+enFYnvWJ7F1Zikx0QAAAAAAAAAAAAgEUW21l+ar3RhpsF1ZpK27Ws2LawgmBDOPBkhtU5Q8WxmzzW3rJRy4U1RyKfi2LwKBT4svOvMlYw0SrgxWsq9/WsT1S9zuaToVcZTW2L3qrWVSZrVY3NUzj8ktTmscaBKtfe0FXYco/I1a2aKF47ifLri5k6gct85XO8COs5HARqtv2scODV2YEkE14HbVQ0rD6nvbr5seaBs4gBpKC9aplNaLHkFA4DRgtnlthQMNEUkpov6x9PV5Wv3qMiEwQDowbYAlHObzhwaY+1dX+J0tLUBRXD12uzKn4mFMA0Qag0Es//gC4sHQUU/fO/dDjEdtsqdR+zTgAAAAAAAAAAAAAWmY3aIvTO0HuWrpWoC+UY73D5tatCFDUccy3KZdvb95zCAapebZ68VfMRta2sC7iEqzTFemqCgKF2n2qzVW0wdoswnQvOhD/fM4fVl7pf/ak9QXvGhVRb6axeKKgndryqmlerFqEuQBZl+3A40J2r2mDWJv96coGpkkuZ6Oup9pyu6rmz4bZRKnSVt82fD70vocWTLD8rtHuPy4cqU5pOVI+bqbZX7xE6755//+sfTxXDihFks080/XnxWkiUXxeaBJvrKSha6LOqemKDEKbbJ1sOWGbqhz/ri/sr50YBXerMVE5TT+W1+aUxdcLLt/Uo5vm3uYK6iL1JAAAAAAAAAAAAABaPCyxkQyG25mGwZPmZaTPY0Cku1JAN2ugVQzcuGNNWFaIIXAtJV4FrpXj69vbCNucG0+ofr7y20wn/6xNaepV1WJhDSNKtBdNim8L0LnmrT5SrWRUrkO1W1v/aPz4qY44rrgeU9o9RJ7nPsaUXDSphuUBYf+p4uWqajbmWjqNqxG3flzrijz3SfPvYHpU+3NRpuxpXojI33/qNz2v9uLpSOMznmf3+mtivJeOvxYnBxu1MNz2akLfqoH9Oh+VCZ1l70r8/7mi5duMbnm/681xN+9Z220bX3l8acdUTsxoJnrvr0YUwXQXEsCCA6RWfW3u8neqfcf99t1YtbKDLfOYLV7X5pWvVCddf56lvU1xnJnPqHoTYAAAAAAAAAAAAgAWRSA0paw/P+v5V2xsK/mTUP36i8SChsJusC3gMV/24sGZYU30LF4aqBNgSxSkoHYSScO0x3sK0qi1WIRvUQGqfCv4arm7NmJS1SWV1JAi0uTatk4ORKz815Frf2lDostmYRvf52wzPvBpS78nepsEdk/XHio803L54zSRnXrVVyQrLXHEt71X/mKvY5sJ2LpB81P+3s/fEhWobXQxtjpZbl+Y91zZ0tHoj72D5ab02uE3EVdCNLVOtwDXs05+b1uuTnQmxOddf719Qk+oiZkAAAAAAAAAAAAAAOi8XhGiSs75f/Tf++tuUVBe16US7vOhqA2wukOMCbLWtEbtRq6BTrWL1PS1D6fIzM4cWkkbRW4KeHbzX/3qvNp3ZKXN1tzxvqBymKUrK+K8HHj+ks7eNaF5CldBkR9V8XqMaGM/MhN56tbZ3j7/S7224/cTtp0JBoNnbX9We8jXeqJJV3H9HNvwNc0xzZXLLoaLf3Ln2rOVT5dq1mrm1Ta60eV14Pd4h5WwpKJnUzY8NtV2dMSznX4fhBoSu3XA74eR27i9Gh/x5J4Pnnhn272WHymt0IOVCpYmZLUfbvdfH/QFv9AcQ0K0mpjpbNW3ojlX6/L9n1TWMbhEAAAAAAAAAAAAAhBWryN2v2gpsBNiKNmwYUqZJ28la820XuHBCwZ9yeKUd7Qcrz21x7XOLLXRde8ZYT1LWO1gO0bkWnQOPj85qcxhVdSU0Ba0faysY1grHbryg3em9Tbc3Ol4JAtVsb2ZakzoF71iDEdJVry5mDixY9a2FEjXIWds6tZYNrUFrRzW5tbOtihdCsaLZqXIIM96z0/869xDbmppQY+zioNppN5xr4zpsFtq02lPZsP1gpaeCXS+giz2e6myIbUtfXF3FqkcAAAAAAAAAAAAAOs+FBSa2mlmPcIDlam5H3W3cw5qR8nYFe6TuNgvRSnTz6d3K1WkhSoCtouDtbGv7cDjEHc/lEljy8g+GXiWDYFJULixWXUmtfW5NTWw/psmtg/5YR8rfd0G2ucrmk5qf1schrvtClb+SQeUsx1WyCl835wYfrPt+F4KyofvAut721tNSWFNT6axnfSLK22TzLbYLrUFjklqJ2qlIWI9bDzKj5dfFNp/RVYXPIiiYyrVWDGEWq7mZmedubU4M3qc2eQK63MRUXp20djX9eQEAAAAAAAAAAAAskCD4E2rP2awFnQm1GTXeqBbDwNiIPO/+mSo9xfZ+BNhmM2b/zLlsbVbYq0V7y8UUi41WtWFc3xs9PJYrDLfcpj912H8cDR4DjyebbuvZSpjJzqG1aWWgfaFxThUrSkV4hI/Duuv3Nf2IIIQWqlRlLg/PfF4lTGRCIdS6wu+3+xXVwNgR9Y2ngkd/6oQWS23wricWLWhlWmzXEzte2VZDLddJibuuSsfBPVz4dlGFKhfaDrQytaHKjq7N55zvLxGsqqo0mAyOeTa/u3zfn+M9yvNP4GoBXWzq6c5WYrvpJTF1FWOoxAYAAAAAAAAAAAAslnw+3Patefs5YyvbFq4sfPtJF46xphJictXfJrfuIMBWV6+u2vtbVuxy1Y3CbVmdwtVDWi5cMClclUl2v/pTras6bTk9XLVWGvPXsGuv6T/aq642t1BQMfhTuW6yub2aGIz2CB8HY1oHooweCG0/E0ILhYnyVx5s+n4XJKqq5jbWOsjm9s+afUHrVfewhVEtJmNCgbMIQU5Xmc7a5scyCMfZY+XXNnY0UkXArA6Wj0Pwvuzc23m2q99f/+Fr2l55QPNVvR7mfn+Jom7lt1jluo9yj3KfXXP+XYhtnYAu9nymoOf8R6dsvK7bKrHRkhgAAAAAAAAAAABYNIVYpW2gDYUIaiVSQ5WqOMosaJDMBRH6x08G4Zjy3OyIprYdEOpzYRNXNWr9xpMNgzwuwJMN2rJWQlXuuC63UKALz4QrbMke08DjI3W3dcEVV62v4B0tbhp+Xz35cEvCZJNxE/6Yh0NzmFsgyQWbykPoVNNKh7UKCs+1dUUw1y64EgTqDarNlVuJ+sew1XkuhrcqYSHPHG54fJzKeioK2vxebbvl47yEg3tun918Gq3/oDJaELBqbZV3ILSWEk2vq+IaPFIMR86w9siiXVf9Y/tlQmvV2uMd+eza9dDO/aXldViHUXjtDYcCmKMt98f9fsrZlP/5rgreyVLYLu7vwBo3MtDNLrxY0I29nemue2Nvl1Vik6GaIwAAAAAAAAAAALB4QtXVQu3jauXzCVfXJmAXuP1kMQiRqPqea4XYPz6iaEY1sXWXuoq5xz8xxePmghz946P+904FbQVNED4c8s9bsuotLtg0uW35VGErceGZROoe5fz9KbeRjR3092mPrHEhsGIQzFW8ytnd/vcqrWblKnPZkYZjT2w/VqzsNnMsKuMek8k/Udwodqc/7rAUCm3OuVpd6JibcIW5CM4Npv25jpbHCKpTNblGg8/Qcf84JGc+e7j8/YJ3TFFMbDui/tP+PcErVsEqHR8XjjP+8bX58zKxjf5n7K5ZT/46y92z6IFIF9zrS43IlM95Zf2XQrlu/bu5miBcVQx5tapsN3sNVo/r1krxOCSCtVJag46rGDm17V51hD/vYhixzo/8eXn+z92/tvw9FyTsXNi3dj1Evb8UzLBibf6ecOeyf/yUir+TQhXfQm1uG8nqcPk9Qdiu925/ZvfF/YnHVT46AOZr7Zquq8S2SgAAAAAAAAAAAAAWh2sRWvoT/5VM4xahQcW20obeQrfJSwjtcQGQLafvUd47PNPOMBkEYBr9ubkYtFm+le3Sg6e06dEd8lafKLdndOvCWPe8EkAqh3fscV26sFfreve1HLtH9yhr7g8FzBLFEJRXGbQSe8moUNg7p3BWsXVlovy6VTvPesKhtKA6lZqfs7juU04joaqJxWDTucHonz2xfVh9qVRVMCxovxpMwh3r6u3d+C7ANnH7Qt8X6pscPOTPV6H5Ov7aDwcIZ/51wc2Cd0gx27o9a/01ODNu6DiED0fnr6tEVRgxzKg2njWqwvTejgcJZ68HJ9ng/pJR3uwO1lv/uNpmzfGqttVubU0Otq7u5ypR1omqeapc1UDXsuQ454N7CAAAAAAAAAAAALAYwi1CXRWrzI5Mk62jVWzrCFdBaT4PuzRhmqV2ZvtxFaZ3BUGdxu38RpU3yRXRmtWFcSa3DsqY/S33Z3LbPS3Wb4WrsjUxuMtfyHtD7TdrZYJAUn56h6b84zoXVnuq5jmXcFG8qqVob8uWokELyJrKVa6KYbtcMCw/PRisJXcs6nHnxLWjvXR+x5IF2EqC+fYkm5xP//tm2F8ne9WO0hoM1ooa7WNGS3VdBdeFf77dZ7vqkwtVCa96PdSTCdbCxfODbQUma7lWwia83hp+Xq3K+9wxuZgJ2swa9Y8XRD9RdLnUw1uU2BJXJ4w+fFm73nhO3cNY/z8YCLIBAAAAAAAAAAAAQCPFKl8nyq8nts7OafSnhpSPb5SX65XRE7qYSUcOei1Hpf0pufLMIx3Zn96TvVpz053B82vlWHVaeC0V4hmZWFpTfU9oOQqfT6eTcy2NXToOsdx5TQx2X2h205mdwb+l66XeMegfr5R/ciG7KOE2F6zO2pOV900PRg7muXOzvjcRnotL7bgQW0xANyPGOQ+2IAAAAAAAAAAAAADA/Fxr4ZqF2p9iWG3u1aO6wUpaSwt5PlkrRee2tHcM8tnzkbbLqtIO2FV9a6eynDs3mepqefFgSEJsAOYuKwAAAAAAAAAAAAAAACydcPvas7eNKqpipcjK6+zFdMv3JFIJZe1w+XXBO6Z58mR0RQA6Jp+z6jLTAgAAAAAAAAAAAAAAwNJIpHplYyfKj3CgrRWrPaHnpyK15s3mk6H3pCO1H23BkzUXBXS5jRs8dcr5F7suxHZJAAAAAAAAAAAAAAAAWBrpwYxkRsuvC7HD6j3Z2/J9idSQFKqoZswRReIdDL1nRB3gyVpaAaKrrV5tdENv50Jsk0/m1VUsldgAAAAAAAAAAAAAAACWlNGh0PMhrd94Mmj72YhrI5qzJ8qvXUW1icH71Ip7n5Qov85fmXcVNicuoMvdcVuPOunZ57ssxAYAAAAAAAAAAAAAAICldXZwVH2pERk7MvOdhLI2pf7xURlzXDZ/PviuiW2U1W5Zmwy9O6PC9K5In1PVftQe07lXpNUBcX+SWTc60K02Xte5KmxONtdt15OlJTEAAAAAAAAAAAAAAMBSmxw8pL6UQkE2J1kMrM3kY2xNrsVVYDO5eyKF0Vxlt2yo/WjBO6YOce1EnxIiuW69UU/cCNeWvk2dLUj4xJmuq8T2nAAAAAAAAAAAAAAAALD0XJAtPz0YVElzFdYay/jbjOjS+R2auP2Uosjmk+XnLvx2brAjrUSduGTOUImtvptfEtNP7Lle3/C6tfqaV62WmcmvXbxk9fcPXdZffeBF/eUDFKFa6W4b7GyIbfyLWXUXQ4gNAAAAAAAAAAAAAJpxbf42TyYEAIuhWFVtb/DYdGanvFyvPCWCn+WUUUyPaGIwWnAtbGL7Mf/rMS2AuGSfEWb5pf29+oW39WrN6tmV19avM9r9+nXB49d/Pqe3/dKz+uDfXxJWpjvvWKVOmjjXZZXYjEkLAAAAAAAAAAAAANDcVN8TAoDFdm5Lx6qlLSRPMoTYQlzL0H/868069DM31A2w1Upsietvjt6igz/VK6xMd9zWuRBbNms1MdVlITar5wUAAAAAAAAAAAAAAADMkSdZSoiFvOcPb9HrXrNG7Rr5qRv0E3uvF1aWW26K6WXbetQp//rItHL5LmvPazUtAAAAAAAAAAAAAAAAYI48WTshBN7yg9fp279+rebqV372Bm2/NS6sHK+4vXMBNue5TEFdp6BHBQAAAAAAAAAAAAAAAMyRp5g+K2j9OqO3v21+LUF7r/d0+J0vEVaOna9tv+peM5/6TBcWJevROQEAAAAAAAAAAAAAAABzFFfOe0GxLmt/WMcb37BeW/rmX0XtDd+wLgizZS50YUWuFehbd61TJ7l2ol0nbwmxAQAAAAAAAAAAAACAikRqSFnt859ldDFzSJkdGQFNxLUhN6XLsav+81XqYm/+TxvUKbu/ZZ2OvfdFYXkb2BzXV76ys8v+s49m1WUK6ntuUlMCAAAAAAAAAAAAVpZNqYQ8e6L8enLroLpV7bGwa5Ka6ntCADAXCf+ekgvuKcWWiOs3DimjXVpJ+lOHZe3u4LmxxzWx7YDaNfB4su734/G00oNpRRojlfS/3imroeC19Y+pUTp4xPVA5HGajWtnzpPxz5LRKf/1g5oYPKW5SKR6ldOeWfOVP26PP26T+cZ1+rZp9Y1P+m9IqIv13zL/Kmwlu1+/nhDbCpD86jX+fcGoUx4bz+rMZE5d5qw+/aquS+4BAAAAAAAAAABghgsqZPPJltsZm5aNZ+b8R/GF0uV/J68SPhY0c7v2RL1Wm+mJjc45MIPly4WOsvndLbdz9/Go4at8fkjW6w19Z0grT2/lvli1L9HZ2Im637+qEf/roWZvDUJmVi5IV33sSjEXd5/O6oj6x0fVY/a2FYqzOuiPm5w1Zmlcp91xi+G1o8ra3XXnq2C+Lhx4TD3+vtcZt5jc8vS0P4mEutiX9HcuxPb65NogHJXL8Zt9Ofuub1uvTvrcv19V17HmrAAAAAAAAAAAANC9cu7vzN7RltvZmS/942n/L9qjMrn7dPa2UQFYHFGv1WayGva/poVryxX1KhbxPp4t38dHNDF4X8NtY7FRWZspV/iydlSIbmBsxD9mByNunfTPS0r9qeGm52Su424eO6CpbUeabhmEZIPKewm1ZIf9e0nSf8+u2iCbV/y5+ZS63IuXCuqUNauNdt61Wli+btjoBZXYOukDf39J3cd+QQAAAAAAAAAAAEB0ieAP2K46Tf/4ieAP3wCAlSTh38eP+ffwVMN7eHowI5l7ZMxxFewRXbqwV13JHCs/bMQAaP9p/3ekqQTNrGvvaXbr4vkbNLHVBA+ZHVJhb/WY/nHuf2yojXHTypvhqnHz04OzxvXM4YZtUUuycuMmQt8ZDcbO9ySDhxvTrYUKF3qbFZwslh8r2LMzcbauNfbFnF56U0yd8uM/dL0++tAVYXn6tm9Yp97rOrvoH/lCF1ZiM3pCAAAAAAAAAAAAQFHG/2N1/ZZ0Xq5XtpD0/4i9O9S2MnqVFwDzE9cpXXFhkjq8q8P+tTk882rUv45H6m535ZlHhGufCx8pnp71/dj0oEzsbtlyu8hi9a3ekzuU2ZGZtf3ZwVG59dTNJgYr4b3+1NEgxN2SFwqa2eOa3HZPnXFda+5T2vToqGKr71exXWuvf94O+//uaj2u/95L53fNOm/nXpH2vx5TInV8prJaMRRnY+69o3WHDdqThvbL2hF/zrWtUh8Mxu1LHZTxf16UDMJxoaqsxRBbT+yzyufVzUY/fkV3fUXnqqe9fudabbzO0/kXOlfhDZ3zg/9pgzopfSanU5/vwhBbgSqOAAAAAAAAAAAAmGGV0bktDzbZ4gH/caBYDcb/Y3opzOaqvGweE0E2YAEFlbFU//rsSyVnev76TLrFdYxrnVk9qqm+egVtikGkLad3q+DdP/O9hNZdv8+/+x8S5q8YCEuUXxeuHmi6vQudDaQO+O85MfOdpHpP9s4KpyVSQ8qGx52+p27wsMTdL/of2yvFT5bH3Tx5a4N1sa/8zNpjdQJsFZODh/z5DpWDkDXhuGKI7Wrhs+pcEbIV6SMPXtIvvHWjOmX9Ok//5c3X6bf/8LywvCS2xPX65Fp10ujDl9WVvJ5xAQAAAAAAAAAAAO2Y2D67yotnDvp/MB/VxO2nZm1f3a4uMxPGaW2u71uszw5vkx5Mh77fq2x+t//H/VuD157/fuUeCVerqas/NSSjnSq4ajwz77N6cKZiz/yU5mRiG4Pxo86p1ZjT+aRi/n6Gx4zHT1UdL7edZvbJqT5WidCI7Z3j6nFbv9cdX+WHyufF5h/R6tipqvnUzqn2Z60+dyHP4WKpPa9Oo2PVeIxE+Xmja8NkH6h7v6gdJ+vPpfZaql1jUTUab67XQb015cXSs853qzW12M5sP66+1Ei5opYx+/2vs4NLza7P2us6mtbXqRs3F/xeubPp+mt2X1lKNp9QpZXm6ExltOZcxbuBcXevKO5Pz3p/DFWvoXxoXFeFLcq47vrqG0+XA+d22v1bHWILrklbqcBauBolzHiv/yi9ZygcuiuG2DbkpnQ59oL/7Dp1qYc+eUWZC/4Kvr5zLSa/5w3rCbEtQ29/W7v3wdbe/6FL6jrWvqjJ/scFAAAAAAAAAAAAtMsFERKpXbpqT878gbxxG7SsXAu2ZPFF0PLwPkURfp81I9IcKgUt1GdvcmEYmwp9xxQDMv77su59/t+tzUxlrOCfmNQ/nva/OaKJweo5BJV7dDD4PBuMFHqfr2/8lIzZO6cgVO2crC2OH56Tyd+ns7eNtDnmQeXsbnle76wxs9aFe46pxz9mLljiQkvyjs7sU9r/Olgeq+r8BNV8dkWeRzhE2ezcDoyN+D/f58+zt+q8GG9mruOj/osD5eMbPq+b/HNzbrC6qll4f0pzbnUOG5375aS0D26teKG14jQ6Vo2Ej+HmyYRWT59XrjDif39f5Rz0pFUb1Clx1R4V29PwWqpdY+3sWzvXZiP9Y/v9a/Jg3TXlBi1es0fK47VaU0uh4F8vMY3MvOqtW6Wr2f2z+jqIptl9PAivFfb795V95TDXrPUXOucu6FapXhbeehkx6cibFpTx96C437Ge5hW8jKIHOI2bQ6iCW61c6R6q6OE4F7qrhON6tWHDkD+jUfejYmLr9G3T/tcvqIvlC9L9H76oTnrVnauVvGuNsHwMbI7rB+7pbCvRJ5/O62P/3IWV2IxrJVr6bQoAAAAAAAAAAAC0yQXZPLM39J2kBh5PqhsFwS4XqCgHsupu5f/8mH+MRsrfcWEY2+J9xoUM7Mmq90Wx5fSwcv77Ws3JtYPrH0/VVF1qNeZwOWhSl/9zdzz6HxtqOp7R8dCrYhu9KFxrPYXCF/krD9bZJuHv10lZFzZqWjEqOafjWxLlHNY798vJwNiRCPvgJNs+Vt70Df5acOdhX8ttXZCpP3WiGI5qNZdgjZ30t9/TdDMXYox6fvpTh9V8foni/MzhpmuqeM0u3/PtnKsJ/xWrdC2NYqvMCNdqxHO+lEwsXX5u7VD0981US3OuZB6Z9fNYeNzQti3HDc/hSr1WondWntq0Io9rRsvP8/HyGPHKWPq0v1OvURf7u9HL2vs9nS1G919/fKNGH74iLA/f/e3rtG5tZwO0LsB2+UoXZrmsxgQAAAAAAAAAAADMh6vI0p8arVQti7twwai6TbEqWEKuXV7BHpPxRlWIZ+TleqXCbv8P/sPlbV1obPNYRqv9bbK2GJoJKpT575N3qun7Bh4fjdb68PI9KnilQE5xTtYfW/F0MLYtJP2xd4eCE8UQnquu16iy1ebTu/0xaysvjfrjHFfBn7+bdzw35O/L7pn14I8dPxFUpLIN/h4b133KaaQcXFl3/T5/tq0r7mVVCURZf99qqweVQ4VVYY/Zx8EdY5lkcBxK56UdLkxiTOUcev6+lo5Fs3M/te2IlosgwBYKmNWuRcdc3V21XoprUREr+Lnjk5h57sZL+wNmZHL12hqeVPU5K66vXLxYsW32Me2dCZ+pbhU1V9HNBaPC4+XNseD8O7HpQX89HKxcB3a/f36eqHt+ivNrf02547Qc4wjF/dGc5bOj0prhptt47vqYaVnqmKASY+08EsoFx7USXqtdg8F5MjtnznvxnMseWpbF1+I65d/Tiq1BXZjRBbtbtpJ2lQfLRkutOaukByutQd0j6rile6s7pvWqrNlQGNgd7+gqc/QqY1RCbJ55rOGNv0t84COX9MKLVtdt6NxC/dZd6/SqL1+tT31mWlhaG9Z7+ukf3ahO+4vjna3gt2JY81kBAAAAAAAAAAAA8+WqaVlXocmxu/0ve9V9EkErtsL0PXWCAg9o06OH5K0+UQ7LeOagsipWE3IhrEsXDtQJLjygROreIOBRDiLEXCBnVK3EgopGCrbNT++tOyfpgPpSB0MhExf8ciG12S09i6GwcJWqjAqFvZrafrxmS1cR7d6gApuN318M8oRCLLVcNb++1JHyHIzZr0htY0NVtQresVk/du1Ow2Gjgj2iyxcO1T3Gmx5NyFt1MAjIeFWBp9ZK59ONP7XtQJ0t6p/73pPH6gZVFlsx5FUJsDXeD3deq9dL5FBlcK4y/jo44q/zexvut2s3KpOofMM/H/XbexaPaWz1/SpX4/PHTqQenB3AjO0pJ8isPa7Jbfdo9n4d84/DMf/EFK/H4ho40nJ+za5bt6Ziq/zj6q/n4jW7/ITbSAbqVulqrHhPSTfdxlV4LHEhqsk65zNbE2Ar2P3+Gry3Zqvieao67xEq+y0Fd0/rHzsUVOtzbOxo03Cwa3Ure7gcdHT360ZihQP+/e7+OY1rCwcajJooP7PttCn1z2dl7PL588obxLX0PXOXmKum9Z4HXlCn/fY7bhSW3lvefF3QTrST0mdy+uA/XFJXslcfFgAAAAAAAAAAADBf1X+r7o3cEvJa4gIa9QNsRe77q0w4QOOqCQ0Vgx3b9jYM9rjqO6bQfstWF3pzoZ2JrbsazsmZHDwka0Zajl8bClNuV50AW8XE7S7Qt6tYUakFk30g9Kq35f4VqxYlgudBdaHB6qxE0GrUDpdfuxCdC2Y1Osbu+Lhz4IJQUvtr14WZ6ge/KuNXt93t1freu7UseJWAVeMAW4VbL8XjVOSCNJH462Vy26GG58CFJKvDdPsbBNiK3DHtMS5sWaoc1avpwuxQU7iVYsFrXP2uJ7Y/9KpXN9e0wa2dnzvnza5bN78Jdyzt8qm4V8sqHEodbXqfmAvXxrUqSDo9OxwbvpaDbeoG2CrC593O4VpdLBPbjoTuqy4AnFJ/6mhQzdLd39zD7btrTWvLIeVMENxsdh7O+PfcKOMOpO4PjTtzXJvcr0u8NkJsNn++/NyYOiE2r5Dyf3JZXe69f9P5QFLyrjV67VesFpbOl/THF6QK29+e6NIAm3RVduPnBQAAAAAAAAAAAMxfuupVz/qEuk6dlpa1XCBNZrTqe6YqQFafCy6YULggH79TrWVUuHpAUQTBpNC8aitHubaDtaEwF1JrZXZ4q75grCafP0tsT/lpveNX1Wo0CAlGqOzm6/EOVR3nqOpVgqvl2u6G97FQGNJSqw0D2qv3Rnpf9XFKtAwdusBXq/VSDEmWjDYNMpW4ilfGVNa4Z4abBmi9JqGn4lj7g4CQe6xS4/kFgdWr0ddUlCDnYnLXs2shq1DAT67Fakc/I1HVxtXdM+reH71wMPB45POen75Hy11wXw0CyDNr37+Het79/v3tRPCQa81casPttsntahrcrBo3t6PpuDaoiFocN2+SkY5rh1RCbOPbzvs3is+oy330ny7r7FROnfY7v/QSYen8wlt7temlMXXab/3BeXWpj+vJTV3aRxUAAAAAAAAAAAAd5UIFYbGezlenWO4K3mik7Vzr1bCLmQcivc+GQiaeWgegXCCkrcpK+XB4IlkVBsrnk1WbFq62DlqUuPBWpGpsVS1Ekw3DSC4cU2klmql7/MxMgMOxJnolLLeOC21sX5pDbSW4xipBLhOuardUYjsrz230SlzuOFlT2Ze816KqnNe6AlS4PWw7gSq3viqBul5t2FB9bYTnaYKWo4kmY90bBITcY1boLjy/No+V1/aa6oDL+4PWr+FHf+qw/+/9ytlUTVW5kUjhqXYUW4TOjN8gSFo8F9Eq5dUKjn9NIHi5CfYvCNy2vl8bt03Pvqbrs2rcnsORx41pONK4HeJVvbKiPaDvj9/T+ZaiX/2q1fqh79ogLL6tXxLXW37wOnXaiY9fVvps5wOPK4LV5wQAAAAAAAAAAACgM65kHom0nck/UX7uwh2N2hHWsm1WCItSHSysJ1YdNApX08vH7gzN41TbbQeNaR1iqg4jSeuu31d3u6uqVGFzQb3a47fJVYAKVdzKZaMGzIpWKVqosDyHdqps5StrJNR+b+mEKnFZr3VlvWrRA3nZ7BNNfx5U+guNcTUb7VoqCZ+D2iqF1eHIRBCucu0X+1PRK+HVzq/dayvX5prqBM/sl7EjVQ/Z/UHAs3J9ZII2k1ErFUYVpY2ok89Xn4PoYdDSAJ0N3nWSa2mcsyerAreuXW/eDCvfkwwerkqbq1JYZoeD9dkscOZ+1mpca3a3PW4HxateFeyna2JtXel3331Bb39br1b1GHXSvb/8Ev3NP1zS8+cLwuI5/iebtBD+4L4L6lp5808CAAAAAAAAAAAAOsGFPLK28jqf7b52SJHDaLGMS90sOLM63c7mQcWogfFMOeCyqseFgYpBpaqQkk2rXca1qoywnauCFoRt3HtM0v86O1xjQm1N67V0jCtR9VlP395uOCvdzsZzaj+6XLhzXYpUePaI+sfbqBgWOsitAnnxDc83/fkVfx7hpmyr4if9uWhOTE3LUBeO7EuNlNdVEK4K1tCw/xnpoJpXIf+AprY3C1omqj9jdVrtODeYnvP+LISgdaU9rksX7o1834rKBaWyNkIbUV8hdK7m0nLVxPz7yiLcS9tVPAb3SzP750Jmly8cqnOsXWjvmDY9ekix1W57F+pL6Grw3h11xu2dqXBXHNcF1S5dONDgHD5QHHdNqWVpMcDZe3JHx865iW2sd/yrI2veqlEhCJnd994X1Wm913v6jbffKCyen33LRr3y5T3qtNSZnN7/oUvqWvnL/ygAAAAAAAAAAACgE3I1bc2yF9PCylOIEMgyXvsBCJuPFmpcpXtDr5IaeDxZ9fOBlHudmHk12nZFuChqW+Ney5ZFS1PfGi1sVTrXHjQ/PVhdnSqQCAJtnne/BsafDyq0RalWdfnJ5R/SLaxJaGKrKT/CrTdd0G8hAmxOlDai5XnErs2201m5EF8ieO7W3NS2A02PtbuP9Zhd5UCsawHan9oze9z87sq4OuUf272tx9U9oYBgokGFy3T5mW3jnhAOIcqkS8+qK7FNDJzVwNgXZM0d6nKuytaP/EDnW1D+F3/M933wov7hocvCwkpsievn37owv6/eefh5dbFP65k7pgQAAAAAAAAAAAB0QkE7yxWd3B/XFyIc0QmFBQ7LrHSef3xKhXWq25dWnttC+8ewQcWeWVyArD81Wm6Vl/fulgurlT871EpU5ljdMeL+XLOh170ne9taj7VVBa9lLtxiQqHAUBClTaOajyv+OQtXYnNtYucSlnS8XP2WlMXA415/PRzQut6d/s1gt7+/yfL+BxUIXdtFJf01sMtfi+mG81t7y0b/Oysr7Ojaqlp/34qKYaaMOt9G1EZoI1oShFuvxVaToTa9UVvPuntfX6pSidK69amadqmxPZUKiGZEUQQVNv1xrS1WWaxX4bJ4H5gZto0Qm6eh0O+LdOnb8VkbWvNh/2vXh9hOfeGqPvTRS/r2b1inTjv2rpv02u+c0tmpnLAwjH+RfPQvN+vG3s7ftNJncvrT93e+Ut+KYe1nBQAAAAAAAAAAAHRKuMWjtaOzf65M6I/dCS2m8GebLgqxedNJzQpBNFFsgVc5PtnsE+XnVe1AzZDaZRX9PeGwjWeG1Xuy2IavOL/hmfHSmhxstG/pqlcbNgz5K2BUUeXU/v6tVFWtUM0xTQxGXy+dtKYmeGjX7tdk3xNaCG4tZfSAFDyk/tSQbGGfjL/Wima3Xaydn5l2ayT6/BL+Zyx1MNK1Ve0fO+JPfn/w2vj/JlL3VYX15qOdNqIl4XagLjzVbuBUulPLU+Uecm7wwcjviuUfUaGUj6lznzU2FBpbfUrRPaJ6c6v7uTahqGzV79PyfGYnfDxDm8AZv/UHC1PFsX9zXEffdZNiMSMsjIMHbtDWW+NaCL/yu8+rUFD3ysf/WgAAAAAAAAAAAEAn9J8elkLBNHv13lnbhKt6tVPpxdj5B4qW8rOXktXutrbP5pOhVxk9fXs4JFEJQbhjWNvms/VkkpE3dWGbSriqV2t798yeX52gZImrPBSqCjRTzS26qmpv17pQi0mVq3QtvqCFa3gu0+2t3fmYGCy2ZXTtRivrLhGEHxvNzxaSakdW+7Qc9HiHqq6trD2qTmmnjWhJXNVBrNK1HlW797jlzsYWo7rf7CB3LDYaejUUhAlbCdruhu7rhSvl3xGzQ2y5Vf8saykR5vvHT17RR/95Ydp+fuPr1uoXfuLabNG71N6693od/KmF+Z8gXBW2o3/VxVXYnEuXHhYAAAAAAAAAAAAwX+4P2cY7XH5t7bG61XdMOKxgowUPBlLJmkovc7OUn72UjL+v/Y9FC+K5FprywlWUjlf9vDpY5sIWBxVV/5ir/JRQOwrmSPm5VzpnXiUIVLjaIiATajXqqrkFgYsIisGMYXULM1ONLOAf5yjhFcddH33jqfLj5ojrrBkbqpbnRbxOHbe+KnM5WfUzF7bsTx0tP5px9y1rKuu+EN/ZeH5tr6mklgMXxgtfWy642HYgtQ7XRlRttBENzyccDvTs/shrcEtq97I5rrXC98r2ju+doTHSs35aCI0buzioqGw+UXmu2RXcqs9Db9BqtpVcYTj0ajT8e392iG2q/xn/Az4pBP7bbzyvS1cWpjTjL//XG7TnjRuEznHV1975MzdooYy8q8ursLkbyAuveFYAAAAAAAAAAADAfLggS86eLIe9XPWdxuGicDuzXvWNtQ5B2Y5VCVrKz15i8fsjhW1ycvtb2a7eeZwdfhlRK66NosxhtWuV7q36rM2nXaipFJQabdmm0L0/XHHqqr2/ZTjGBfmy/nbdxIUTw+GV9ddHO1fu+nAV+UqVDaur9s1N9TmLur4S/vz3VeZiq+eRi6eLocSZR+tAUaL8LFzBcfb82l1TCbXi7qeuqqV7uOcLZXLwUFWlQhs7Gjk4Vo87B9a010Y0zLUPDo2m9b2t78/uMwu2/fvKYrGmsg5tPHp1OWv3l58X7OxryoRClu0EicMBZdn616rR8dDn7G/6e6P2nIdDw6oXYitu9AEh8ImT0/rARy5pofzer7xEX/6KVcL8JbbE9dG/2qwbNnpaCKkzOd33vi6vwlbw/kYAAAAAAAAAAADAXAVhi9QJ/w/uJ6oDbNO7GoYXqsMy7o/kIw1DKu4P5G78dqt3NbKUn720XOAmEbT5axTeKe2vDVW+Ktgjdc+jC78oVMXHhSjccWwUdnAVsnIzLQZtnapCzcyq0OSFQoXVgYmG77e2Eo4xGtL6jScbztWt6WI7xKG257rS9ehA5YUZVt9Y4+CjC2XVXh8F/z2dUHvOSuurUcCqcs4Sxe3rhGjPDaar24DGjjbcty2uLXKoslcu+2DT+XV6TVkXynLr3H8UCgvb0tYze0OvEpEqbzUylzaiYUGVx1A4S3Z/UDWv9XFNaLmqCuYF4cmRlu/pP31MrdpyV1VOjBj0rK2Sl6sKI1fEdV9onfYGx7g/tadYpXOGe+7Gc+H18jz990wM3lc9VD2eHdXCFB9bkd72i8/qW5Jr1Xt958NR16339P/+9BZ97T1TSp+li+tc9W+K68R7NysxENdCefPbnlLXy9mPCQAAAAAAAAAAAKjHqLdh2z1rh+T5fwy3tjZUMqrC9N6W1XdcWCanUPAtdlD943uCkEnpj+dGrrqbq7jVG3zPBN9NaL7yV/Yqvvrkknz2UikU9irmHfX3xT9nsRPqGz8lE+xvJjjPLlyTrWnH51rNTW070HDM/PQ98lafKFfgcscxZ/epLzWqUsAtqIpldwfH2qoYcvDMEX/dHFE7XBDE+uekqBKWnKwOTDQ0se2I+k/759MrBYJcoC/ln/dRf/BTVcfBho6Dyd0jxU+qW6QHT6l/7EC5Yp4xu/3jtNs/p8f9691fL/nzMrGN/vEa8s+1CztWrv+g6tbWB9UptefMra/1G/dofWo0aAtcmcvuqnPmuDBdvXuQu+9kVTqfxTUwe992qxAaz7VFrlddbq5ryhYOyHiNq/y5wFbWDlX2pVW73HlywbF+d83OzLFYees+fy2k1Q5XNS58j3QtMFu1bXW/L2pCT4prr676x6x0X3HBr6yGg+NqZ0KI7ri6sK21xW2Ce3ThUDH4t8wEx/f0fVXruD91q39vuU/x+KliSFfF857T3f4+DatSabJxNbtg3DH/Pmr2V8Yd3+nf6+/V6thoaNxeZfP+tRrbU7UOXUD5qW2P1J2ze+9Aam8QTi9K+B9wzD8P0sB4JmhlmnXH3lS/L7hfVquf+Dm79V/8yZ7xn20R9Mzzeb3rf51fsDaV/ZvjOvG+zfr675kKqn2hPTe/JKZ/+MtNQSW2hXL0vS/o45+aVpcb19OD8y/lCgAAAAAAAAAAgGtVb7H1Xh3ub9fVhVT8P2z7f2yf2navonBhmURqV9CGrxxWCP5QPlz1d3E7M3bwx/Gew/43EpovFwhYqs9eMutOKj5d2WdXOUp2qDaDUOaCO5cuHGg6pDuOmx7dVR1k89eMCcJNlWpulXUyqkvn79H663Y3bDLXSBDYGHd/2xwKTfKY2jGxfVj9Y8+XQx9FySC8M/s4ZJQ3u3Xu9lP+56qruHDWltNp5b3D5fNaDCIWz5udOaGV89retd/WXPxz1pdK+Z8/MvOdRHCdBp8dmktJEGbyr9dzDVqauvvOltP3tNy3yninml4Hs+fnJBuuKbf2prYfb7qmsvlk6PoYbasd51xVB3td5S0XBtvV1hg2dqt/HMLfSaplta3gIFWH2FyAKrivrDooU1XZzz+m4YBp6XNnKn/G1yRmnb/loie2XzltrFS5dGs4NuwfZ5XXQrbO3F2ArVk1u4ltB/x7mkL3tKQ8Lzl7XLeebHjcY00Dyo675w74vycLM+2Cy+9193jVhtcr98saje/01v6FUPY7f3ReJz9/VQvFBbA+5iqJLWAQ61r0khs8ffj/3KKXb+/RQnn+fEHvfFdGXc/aUQEAAAAAAAAAAABzEYRFzPGgmkveJDWx9Ya2QywuUOLCB+4P6vVb7GWCP+JfPD+oids7W5xhKT97qbTeZ2c0OJ+T2/Yqs6P1H1VdwGZy66BU2Nt0TNeacmLrrkhjNmLDbQblKlRFq8IW5kIfyu2obllYpXLezw12rqrYSnNm+/EIayVTvP6ndyxIgK3Eta7NTw8Gcym2xZ3NzdGdt0vnd7S8XqPsW2m8ya07Wq7Z6vnVUzlOE1EqB8Z2Vp5HaJfbCe46LlS1lkw2bDu8GIL7in8PcveVcAvYapnyOV+MoN98uGDe2cF7Wtwnw0r34dZV+IJ7WsRxXSizULineGwjcEE2d61UzkMmNFY6mKer3NfkfmkaDu56wdpQ/1lo52vXaPT9m7WQ0mdy+qY3Ten0E1Rka2VLX1wfOHqLhr50lRbST77jGf3e0RfU9QrZr9PUyx4SAAAAAAAAAAAAsBz0p4aUj28Mnsdy5zWxiF2FlvKzl0ppn72cq6zzhC5m0vMKmTmbHk1IG24NxizEMzKxtKb6nlAnBK0JZyoDusBQ1CBGI70ne7XmpjvLr7vlvM9FeK10+rzOdS4l851LJ/ctvKZK11W7a6p/PCVXcS5ol+sCoigf1+Ww/jph05md/r4kZyqcucqYmZn2s6eU8x9zDdAu1LjzYJr+dGDseVnTK5Td+84b9ZM/vFELyQXZvvFNUxojyNaQq1j3gaOb9MqXL1wFNuez/35VX/6NE+p6/MIDAAAAAAAAAAAAsFIkUgllbar82lUp6uZKabg2JVJD/jo/WXzhqhdGqdwGLF/NG0cX9EdClYP/PaPUFxc2XOYCWg//TZ/2fu8GYbavunO1Hvq/mxc8wHZ2KqfvHH5ScOzHBAAAAAAAAAAAAAArQTafLD93BTsIsOFalFOllWj+CmscK17zEJvnfViokrlQ0Bvf8pRyeauFdPONMb37v9+sd+ynEF7YW3/4ev3T8c0a2BzXQvu138sofZZqeAFv1f8SAAAAAAAAAAAAAKwI3sHyU2NGBFyLrHYX/7XHdO4VaQErXPMQ29nBUf+GPilU+fRnpjXyO/Nr7R2FMdI7f+YG/e2f3aIbez11s9Wrjf7w12/S773zJVrVY7TQjv7Vi/rDP31BUPH/TDi75ZMCAAAAAAAAAAAAgOVuIJX0vybKr6lQhWuVsUPBvwXvmIBrQOtkVEFUYKrjV383ow/+wyUthm/ZtU6f/tt+7XztGnWjL3vZKj3ykQG95Qev02JIn8npZ3/lWWGG0Z8LAAAAAAAAAAAAAFYCqz2V51SowjXs7NYbNLHV0C4X14rWIbZY7H8LdQ0feEZPTCxOu8nElrhG379Z7zp4o9auWfhKZMuB5xkdPHCDHvmHfr1s28K3D3UuXS7om79/Ss8+XxBm5KffLQAAAAAAAAAAAABY7hKphGSHy6+pUAUAK0brENuZL3HtRD8qzPLs83l90/dN6cILVovlwI9s1BdODOjN/2mDrmV3fcVqff5Ev0Z+ulfeImb2fvztz+rx1OIEE1cEqw/zfyYAAAAAAAAAAAAAWBGy+WT5uVWaClUAsHK0DrE5hdh9Ql2Pj+f0k7/0jBaTq8r2Z797s46/+xZtvXVxKpQtlptu9PR/fv9mffwDfXr5th4tpl++N6P73veiEGItrUQBAAAAAAAAAAAArBDewfJTY0YEAFgxotW4uuNzq3Rh3ZOy6hXq+pm3bNRv/7cbtRSOvfcFHXpXRumzK7eCWO/1nn72xzbq5358o2KxxW+X+vtHL+ht73hWqDKlia19AgAAAAAAAAAAAAAAABZQLNJWT/9BXhv2r5FRUqjr45+a1to1nr72q9ZosQ196Wrt//82BhXaxp7I6aln8lopvuzlq/QrP3uD/uJ/3Kydd62V5y1+gO3v//Gyvv+tTwu1zJ/ohXs/LAAAAAAAAAAAAAAAAGABRU8MDZzeLus9LjT1J79zs/Z+7wYtpYf+5Yr+8L4Let+HLimXs1pueuJGX/+1a/TzP9Gr17169ZJUXit5+NPT+s69T+qZ51ZO8G/R5KcHde4VaQEAAAAAAAAAAAAAAAALqL30UP/4B/2v3y409f7/9VJ917et11I791Ref//QJf3JX76o0YevaCnF40Zf+1Wr9b3fud5/bNANGz0ttZOfm9bde5/SmamV24Z1wVjzl5oc/D4BAAAAAAAAAAAAAAAAC6y9ENtAKilrTwgtHX/3Lbr79eu0XLhA24dHL+nv//GKHv63K0p9ceGDWy+5wdM371yn13zFKn3f3dfppS9Z+uBaySNfuKrvHH5SX5wkwFaX9b5Gk4mPCwAAAAAAAAAAAAAAAFhg7fdx7E99QrKvEVr6P7/3Un3/PUtfka2eRx/P6tOfndZnvnBV//rItM5M5jT2xNwDXbfcFNOXvbxHX3r7Kt22tUdv+MZ1urU/LrN0nUIbOvW5aX37nic1+SQtROszY5oY3C4AAAAAAAAAAAAAAABgEcwhxPbEG6T83wiR/PZ/u1E/85aNWgmezxT05DN5TZzLBaG2qafymr5qZ223do3RTTfGtOnmmF5x2yptWG/00pfEtBL83YOX9b1veUrnXygIDRT0g5ra+ucCAAAAAAAAAAAAAAC41iRSCWW1L3jeo3uVHkwLS25udbL6U2OS3SpEcvBAr0Z++gZhaR3+4/P62Xc+pzz5tcas0prcOigAAAAAAAAAAAAAAIBrUf94yv+amHmV1kSdnERfsE1RNnePnr79lLCgPM2F0b1CZIcOZ7Tvl54Vls4v/ffn9FMjBNhas78sAAAAAAAAAAAAAFjp+k8Pq3/clh/hQAqA7rUplVAlwKbg+ebJW2dtZ/zvlx6xnpXRgnGFm1uILbv23bJ6Qojsd//kgnZ+95TSZ3PC4slcKOi7fuRJ/fKR80ILrgrb7Vv/VAAAAAAAAAAAAACwkrlWgcY7rOXCBejKgbrUHgFYOucG00E+osQ9n+ojA7UMxDUXT266qIHUH8ra3xAi+8dPXNGuN07p/j++RUNfukpYWI+NZ/Wdw+f0H+MEByPxCr+mUcPBAgAAAAAAAAAAALCyZe0J/2uvgKXgQpTT+SF5NWvQ2LTi8bTSg2lhaRWmd8lbdVDG859fOSQsC3MLsTnTF/+HVq3/L5LdKkSWPpPTq751Qgd/6ga9Yz+/MxfKH9x3Qb/4G88r8wL9QyNxyeLbth3VWQEAAAAAAAAAAADAyjUwNuL//TMx82rUfyQFLLSBVNJfd3fL2GFlba+8Oo0RrVzAUuofT0tmVD06RKBtiZx7Rdr/uldYVubWTtR5+stelMn/kdC2fEH6pf/+vL71zedoL9phTz2T194DT+snfvFZAmxtse+kChsAAAAAAAAAAACAFS0IEpmDwXNXyCOfp8ISFlb/6WH1j6dkXfU/u99fd6VqRpmZlpWngke4faVcyDIIu6XUnzoaVG4DIKP5uONzq3Rh/Un/YrxDmJPNt8T0iz/Zq5/Yc70wPyc+fllv+rGn9dSzeaEN7pfl5NZBAQAAAAAAAAAAACuVC4Fk80nZ2K3Ba08ZKfeIzt42qrloNF48fkrpwYzmIpHqVU5DsvlEeVybf0ReLK2JwVOaj07MNxykqa0O5eY+7Y8f88cvqHfex6PT56s8ZtBGNBG8LhTu8cc/pZhNBa9b/V202f63+tx673PHrNTS9Ko/LzMzL2P2K64HakbJtDyObrxsfrdMbGP5HOTzT2h17FTk+TabqxvbnY/ClftmqlQ1H6eT10d/akjKD3VsPdSO566zesdprue89N6sjvqDJ0PfHfXP73HlVx/XVN8Tdd+36cxOeVeH/YWQLK8J/9PVY3bNqSpbvX2td0+pDsrNXm/h9RrMqGp9JPx7193BunO8IKD3YMv7lguVSneW39foPERVuoe2GrPZvtTfpv711z9uy8/z/vk6N/ig5qvRWu/E75b5HOtmx8zN2WhneWzj1qt//luNPYfzP78QWzDZJ97gH+C/Eeblnm9Zp3eNvESJgbl3eO1WU0/m9HO/9rz+7K9fFOagoB/U1NY/FwAAAAAAAAAAALDSFFv4HawJkoSl/T+Lj2hi8D5Fsfn0bnmxfU3G85ljbbUBDAIGhf3++/aFqjTNb54lrgqUYns6Mt++8VQ5VFMKbESaexvHo9PnK8xVtHLVrRxrRzS57ZA2pRKRQmzh7ZyJrdGyFLXvK6xJlMNLwbnxjkYaR2a44T63PmbOqHrM3qbnoN5cV0+fV1aHy8fNaRbWKa43d30MqaElXA/9Y/tlzMGGa9XqlLz8gXI4bq4hpS3+cbDe4fLnWHtchasHWob/wjY96p+PVf6xNPtnvtNekK31uUhXHbvw9V1vvQXnIgiBVq6VRGpoZn0kG36Gye+dFTYM7qP+8VE5pFdjIe6hoTHD++LUu57D9wv33onB2a1FOxli6/S14xSDlPuCFrbz/d0Svl+Vzn/r67P+fac4lquImaj/tsb7Ofd2oiUTt37Qn/Q/CfNy/4cv6c5vmtCv/G7Gv5aEiP7wTy/ojl0TBNjmyupfCbABAAAAAAAAAABgRRoYG5lp4ZdsslXC//kx9Y81DxO5kMRA6n553v0txlO5DeDA4yNqxYVdcv62tkmwpmqe46lIrQXdNv2pE8XQQaT5ntTmsf1qRxBg8d/Xcu7B+Cf845FsOl4nz1ctF14qB9hcAGPbtdFGdGDsSIRj5iQjr8mS2PRgcH7DAbZGqtfbUPONZ9aDCzI10856aLVf5fmZw03XqnGVEGMn2jpOtdy8C/5xcJ8TtKw1SX+93dNWgM1x209sO+Dv34GZ7yR01d7f8n3uXhXtXCQiHbtG3PnLRTg/tcfTHZ/gPtoowOTM3JNa3TOCTwgqLEa9D7n2rHu0nEQ/Xyoflyj74O55ueD63R/pd0vf+Mm22tYGQc2W57943wn/bnHnvxiGSzR+W2k/H5t1PDpT9iumX1RB8y+b1+UuvFDQO37reb37PS9o5Kdv0J7v3iDU9+AnrujnfvU5ffLktDAfhfb+QxUAAAAAAAAAAABYDorBhoPl10GFJXNMufip4LUL6Mjb5z+b+SO5GVbfWONwU7ENZfgP6sW2gKXxvFyv/7e13f5n7K5UX4od9P94n9HUtiN1x3Qhg4I5XPW9oGKTd9z/U306eB3PDalg94faChZbYiZSjSsy1bbNLM3X2lF/oqdUiGeCcV3AwNpSkKjXn/thf75qON+wmD92zh5Rpb1c9fGoN+9imGVX3RaQxUDcwar55v3zVToO7nxZ72BVpahm56t6bHc8Kse5ML1Ly0FP7JSuaiR47oWCJm4NuPMUZrKPzHp/EGAz+8qva9d48L6ru/3zsrt83NyaHHhc/jkYUStBhaXy+cuoWLEp45/X6paGQavROuut3vVh/PM2864gyLT59D2a2n581me7Sk0ulBQer9l6aHat1Z+f249j/hingjFL8yu18CyN1y4X7CrN2wXY3FprN7xWa8Lfp/6xW4OKbC5k1zd2sOm6n32var2vbk0UFJ3x16opV5pzlZiOlO8ts891ad359yCTCJ3X4hopuOPkv8+dUxO7u+qeZGP3++dvR5v3uur5BGvF7KzMxz8Wsoc60Zhy3opr86Tau3Z6i0HelBpXZ3QB0CDUV+KvZdfG1h+7vAbcGrHDlTbGGmr5u6XEnf9CqCpbcEybnH/3u2XgcX9/vOSs81/1O7mqaqg/TvxE7fnv3FnrG/9zf7QfEDrmVXeu0r2HXqKvftUaoehfTk3r7b/xvD76T5eFebL+jWZy214BAAAAAAAAAAAAK01VKzj/j+UTW+sHl/rHDofa9WV08fygMjuqwyulQECJC2dNbbu37niuBaC3+kQovJVRj5kdwiiGL1Ll1y6AVJhuXK2ptg2i235y647626bC1XFcgGWkjfn6hyNfP2hW1W6wPO+0Cma4cXvJWe0b0/4x3jH7GKfuL4dXXIjLVa6qP17r8zXrPePuOCdmxh6pCgAtZTvRsFatHGvVtiKt3a+wIChTOBg6bvXPce1ci4rr5/KF+xoe5+prLRN8TqP5By0yV7sqXEPl7eudw/7xk+Vtmv3dunatT2y9ocX83PV7xN+fQ3X3J7geVh2cCeC4n1cqWLVqF+muaVf5qlSBrVGArdiC8W7/kZCx/vjmlEzugeB8BOcqX7wOTCyts4Oj5fdV1kj9/QzGrrlXuWvp0oW9dffVfdbVoNXkyOyBWrQTrYx/zB//QIPxh4JKbeFrf+YnTddrUDWxKtzb5P4duraL82k8bnjtGRd0C53bpWonWhtEbfd3S93fVzXnqdXvlr7UwZo1UP9412t/3Oz8u3nI3l/1O8sEz5uf/1nzqT72828nWrIufyBYCOiYTz1yVV+ze0rf9oPn9PCnu7vi2Mc/Na037Dmn17xhkgBbZ5xX4Wrr/2sBAAAAAAAAAAAAWJbCbdlcBacGerxDob9j92pd786qn7tgSnUopHEgzHFBARdeCY85Xdg3a7usQgEkpXXpfPOKTa4ak0wl2FWqyFQrCBqE2rsVCntbzneV2VGsplOaT+ygoigHdZoEN2rn7QIM666ffTwK4fPlHVMjtedrw4YhNeNCIpWQy+g100ZUXvWabLZf6cFM0JbSVT0qvyfiOVZuV7B+GgXYgvaD4XajTQJsjltvPWZXaL311l0P4UpihSbrIX8lHCzq1ebJW9Vsfi7ANrXtQMP9cfMLAnNVVQajyYYCW/UCbC7U40JXxRaM+2WC0Gay2O4xdkL9qcPKuf12QSH/kS/cXfV+zxwp72e9Npuz71XFMGijfXXrYnLwkP+eEc1FsS3v3ibjn5IphM9PQsUA07Gm69XdM6rnlFTvydnnIrjXRQywOaW1J51q0V5zcRTPV7QAm1Pvd0u9a8fa9n63uDVQaVnrJCO1cW11/l0A09rK+TDBNd36/BfncyT0QbvD579zIbbTtz3tH/VfFzrub09c1lffPek/pvS3o5fUTUYfvqyv/54pfc3uSX3oo4TXOqZgf2PeZU0BAAAAAAAAAACApRIOKRSaBBZckENmJAhNuIfJVlfJyunu0JjR2lcGYQNT+SO8F2qr5rgKRVVBM//nraqJOcVQwLHyaxOqrFX5sFB7SX/beq0aa7lj4Jlw2CRaiMEFlqL8TTGoJhUKJbh51wullH/exvmytvFxK7akLB4Pd+7y09dGF6pweCfqmnTiau8cu/UzcfuppttkVR2aalVBzqldb/XWQ7hAktdkPbj1595fXg/nTeP5+cfKVWCLojos2VrVObEjs64LV13MVrW9dGP7x9aMzjxXMcwWantrvNGqMXJ6oPw871UH3Jyswq1l/XvQ1QOKIggN6ZTaZSKE3874959wQNbJ5u9t+b5Vurfq+K/vnb2/4Xtd1ICqW3v56Xu0HNSuzWYBthK3rmw4lF3zuyWofhYK9rnQW5TfLcWw8WhlPhFCroWaz240bu11FKWYkrv+KqrCyp0LsQVW/56/4+PCgnj401f0bW9+UoN3ndH//LMLOjuV07Uoc6Ggdx7O6OU7z2rXG8/pxMevCB1UvEH+pgAAAAAAAAAAAICVyoT+IO/Z/cWKTA2cHbw3CHK4R21ox2p35bltHQgrCcbaamYe1a3/rtYE49ppQWeqAiC9uvmxSsWq4j5Gq2BVKwiahY5ZvZBMtVF/Hx9QVHmvet61FdQ8EzrudmTO56skeH+oWpkL3FwrRTxMLHRu7KiiKgYAK9vn43c2f4MXYb2HwphqY73Fg9aCjSvq2Tmuh1nnODQ/a45ECvQ47liFg6gtzay1eqHCzad3V7XHdCE31wZyYusOTQzuCu4Plcpjoeu3JvxzbjBdPma1bX2LAydDz0fbWu+mSbXKRi5mol3/4QqALrD39O2tA3Pu+IfXgK3Z39p7Xb6NanJBEKyNe/mCCZ0v08b8JwYPlH+31LY/ttoTetXmGlB43SabBo2dqL+3bLgCpH/dR5lTcK8KBSttvFxhsbMhtrNbLiuf//+EBZU+k9OP/cKz2vJVZ/R9P/GURj++8iuU5XJWf//QZX3PW57SzV/+RR38nef1H2NZYQEY831ytw8AAAAAAAAAAABgpTIKV4RKKGtT6k8djVZhLCwcgvE6E3wwroVgacw2wxQutBWubLSqpxJEyufDQaBMW+G4okpowJhk0y1tKAwVhQvghOc9O0AVDrnN43zNKLZrTQTPXQvJKBXCVgprE5UXba/JdOWtGmq6ZbamKmGtRMqFXBKRt6+ahQuJhUJaoZBKIByocW0IXatOtx76U0OKqnZ+uWx718MqRQtpbXEhtZnPqQ0jubCV51UCbK5ylgu51YbpgmpoNdfUlcwjsz6rdA0ZUy9gNLcAqxNXu9dHJnIg0FaF8VoH2CrSDX+Sqwm1tXuvMzZ6AHch1K7Nq9lH1BmJ8rN279EuyByumlbbWjvMNjk3Tbe16ahv89d4OjRGovQ0rk47t92/uYz9kf+JPyosuL984GLwGNgc1ze+bo1+6Ls3KHnXWv98a9m7dMXqHz9xRX9x/4v64Ecv6flMQVhgVn/s/4L8hAAAAAAAAAAAAICVzP1Bvv/0XhnvcKW1qB2WjQ2rfzw9ExgZVY8emKn6MpsLGmRDtR/y2fPqCBsKoHhptSv44/5MkClcocjGbi3XqmgnZFCWfyRU56a3xcZzaT+YLs9bhUTVz0rnS97RyjfbPF8lA2MjsjPhw3ZaSK4clbCSscf946PoQuvZFpqf4/iG55v+PFcTglsVP9neXKqmlah67dZDX2rE37+Rme8kgvUgVdZDIf9A03a5tfPLXkyrPelIW9nYnvJxra1OVmwZmShuZ49pcmvjsJgL7tmZgKurWFU3JGYydevRbHKVyeZxr3LX1MB4pqoNczO2jVarC8HmE+V71VzudSbmqrFpCSWqXrW61qJyAddSFsjM4bi4YGmpnbOJuBbaYbzo66bBGutwO9EZhdx/878+JSwa11r02Htf1Nd/zzm95Mue0O7//KSOve9Fffbfr2o5eeTRaf3WH2b0+u8/p/6v+KK+9c3n9Gd//SIBtsUQ9MWe/lUBAAAAAAAAAAAA14KJ7ceUm94RhEdU9QfxRDEQ438/a58PKjzVa1d4peaP+B0LGoTG9ToYBimExjVLHDKpJzwnz5sdkHDnKz89OHO+whLl85WbqdDWqL2k+741lTaiheldkStGYenUC6y46mTN1oPn3a/+8ebrIazdddAqLFlWCkza47M/I1TJsXC1eZgyF6VilY0WLJrLvaqwDO8Z16pcze+Wqb7oVQyb8eYZPGtQ/Ww56XwlNmfqZc9oYOzH/F8efy0suufPF/TA310KHs6WvphePbRGXzW0Sq/ZsVov29ajzS9dmFMf9tSzeX3y36b1+ceu6p/+ZVr/9tlpTT2VF5aKfec10wceAAAAAAAAAAAAcIp//9qr3pMHiu3RCrv9v9QnZcJ/oLfDyiqp/sfuCdp1lqxRxv9+Re7FG/yv8w8bhMNchQ5WuzH5J0LViRJaSHOp0hMO7zWqntTqfAVjNDhfxcp5J0KfcUqxHn+702rMVSMzlX3qPz1c/lFPbFTpwbSWG7d+SsfSBafaqW5UNU6b7QZrxWuuD5ljmqtYrn47xfB6WH/dblmzs+b6TZTXQyK1q+p81c5v8+StbYWFaisx1t/GtTqdORfeaNXPBlLJUOvX0fb+Fu/Vr3To9ttNydrOB87M8gwtXZNcYDEWet3u2mwkXEltLuZbyW0RLFyS6ey2/6v+8T/zn/2gsKTOTOb9x0X99f+7WP7e5pfGtD3Ro6/4slW64QZPL9+2Srfc7KknboLWpJtujmn16sY9SS9esnouk9czz+V1/oWCnpjIBZ9z7qm8PvWZaU2ec5+ZE5YJ6/2JJhNHBQAAAAAAAAAAAFyLXIWkjFyrv2K7v/7UkGxhXygQ4z/iJ9R7crBcTam2xd6qnjs1lzaatVy1G2uHgudeTcvDSO/331vJ1lTm46q6lRpcuSBD78ne9qpPxe4styRsFWAoFNy871M7wvNuNX6083W/v487yvtYbB+ZqHyee+218zfQ3qrtsxpWo5aSUY/tGn/MrDqrGAAsrhvjHdfEYHvnoXPSVa8Kq0c6VlGqVnE9HPOfHQtel9aDMcMzWyRmAoyDajS/2EX3s+jzy0W4NvNVbS1r7w13lp/ZCIHB+ExArWj2fcZVmysF5mpDbucG01X3Km86qXauz2IYTytGuB2oux+0fa8LnZulUBuQbndtNlIVkG7zHl0MbSbKr/PdFmJz1hR+Rpe9b/IP5CZhWXEV0dzjoX+50nCbdWuMNl7vKRYz/sP/He5fZFezBV26bIMHVoigjejlXxYAAAAAAAAAAADQLSYGXQhkrzY9mlB89cmZ8Eev1vbuUUb3lrez5lS5JWA7oQAXCFCoIk51Ra9R/7F75gN2B/OIqljdqTJu4UqlglUsNqpC+e+0vdqwYcjfl1FFZndXnrYI3Rjjtj2gqGrnfTX7iNpR/3wltL73bn8fFz7E5UJC/eOV11GPbTjk1DHu3MyEIOcSJuwUF/LsG0+XK3i1G5yaj8p6OFS1HgYeT+rsbaN155f37pbauB6s9rTcJh+7U2bmmstnz1f9zFVZNIou/HnZ7OxAUz4/VF5LhTr7Eb5XBe132zgX2dDYK0Fcp6pCYLX37Vasdmsp1a7NgrdTUddm098toXuDZ9oLSGfzu6vWwJVMe/foRbKwq3Rs+1P+gfs+YUW6dMUGQbezUzk9cTanySdzeua5AgG2Fcfsp40oAAAAAAAAAAAArhmuqlB/6mj54ar0NOL+TmbDbRALiaqfGx0vP/fMcNOxwrI6rKxNBY+roRaXTm6mulhRrzafjh6osDZcWay6RaELRigUPrOxg4qq2EYzUX5duNI8AOPCF5vH9iu6feVnrsjG01VtQOd+vsJtU12wJe+fo3YeMkdCo2eqf37lwarPDrdALYZOWivE7lanmdD6aWdNuiBh33iq/HAtDOc/mWOV50FwKpqBsSPlefSnqq8PF0QLr4dmiuuhco3m43c2nJ87Vq6aWRRuO2PbCzrFNzyvuQrmVQqg+cLXR0lpLbl1eG7wwVk/D9+rFLTbjRZiCj7bi36vWA5q73We3R/5OtiS2l11rJdMaG0as3+Ov1vurx6y6ndLMriWIgutAWuPtVnZbtEsfNTy7OCoTOH3BWDxFfSrmhx8QAAAAAAAAAAAAMC1I10M1Mw8XLWuZky4BaVX/Yf7uO4LtWjr9cdqHfYoBlKGy69tVVCqWNWrKoDhHY0UrhkYG1E4aFYVICp9S4dCr1yIYUStuBCZ8Q6XX7sAQ5QiGJ45GHneNhQIMmakZot01flyVc6aCZ+vqlEGM/6xva+tRzj0YVXz/ppjYEJhKRc6abXv7ri2E+yKymUsKuvHX5PXH275Hle9yQUg3bErHr9MR1p/rtK9oesj6npL+PPfU56LLaSrfh6PZ6rWQ+sgTkLR5tcbhH5ahYWKbRXvL7fmbMY0+Wwv1NrRtAhN5QouEJoInts6bRyr7in+9VlP9b1KQbvdKNdnTofV7BguV9X3ukTke3PBtr5eOqnROahdm9HmX31PMTW/W6rvDS7IHPV3ixunsl3h6iEtU4tUL3D1f/UP5CkBWDzul1/fc8v25gMAAAAAAAAAAADMSW2VHtkjDf+QX2xzWQlY1bbpc2NZG/qbmt2v/tThpuNlQ5XX3N/kLmdmVzXLX9lbFWBw7+lP1W9f6EI1riKVNZWQQ8Hfp4nB2eMGRWRCYStXjc0FixrNt39sv3L+Z5cCO26+0QIMmZl5n2w6bxeOCM/bjV8779kV5BoHL7acHm56vhZS/kq4XWHxnDVbB7maCnzNeOG8RITgW1WAxwyrb6xxYMl9v7gmKz8vTN+jTqi9PkrrrZHS9dFsvaWDVqGnQmMebbp+w1W17JUHms7PaEjrN56McP0O1Q2T1Wq+TbgdY+OqWEHI0+xTM1kdLH9e4Wr9Komz7lUqnvdGn+uOgauC564nN25VAG4FCAJbhdCx8O/Nza6DyrlNaDEU79sngopp/eOpWfOq97ul1bWTq/ndUu93QI8OhM5lxDUQWn/WjiznTn5xLYazWy77N5fv9e/MJ/0jsk4AFlrG/w+TXfr0q7ICAAAAAAAAAAAArjUuJBZffXImLNMbBAn6UsflaVQ2f14mttH/2W7/D/bJ8nsatemb2HbEf+9GGf+P+8UN9yvrv7c/NSqjUw3HK/1Nrl5bNhcSGEjd449VCiUkggpL/eP+Z5jjQVUwE8x9yJ97suq91v/MyxcaB83i2uvPLxG8N9g+dlA5u8/fh1GVwkFBFawgvNLrPyrzNbl7IgUYrGvFaY8UK1GV5z1aDvUYucDFkL9db2je6eB41OOCFzmVwk2JhuerUHUsRuuer4Xijkv/2AF/50qVnBIzAZXRoGhP+JxV1oH/MyVbjm3zD0heKZyXDEIvCgWkXDW/cIctF+AJz8WY3f5cdtc5ZkP+eXDjhs5Dh0Mq7vroP+2vNa8YZnTrrX98T7AeWl0fjdabMQf8bSvXRnCcU8dmjVcVYGtQQbB2ftHOm1Tw13jMjqoZV22tdP2YaXe9VarbBefIXXMzY9rYieI+5GaCR/E7/c8bDs6Ruzas9c+d2V9u1Tu17UgQhMoVRoLtisel+bmbda9yle78z+0bP+W/d7ThfcUWDqjgHZ752crRE/Pvxda1kC3e60rXgTu3diYY6/YpCOrZRPA6COwV/Pund1QLKZv316eXnHmV0NWCu1arw6NRrh0buzW4n9b+rmp0L3Uh0P7TB0L7F20NBOP619DktmVdCGlxQmzOxLbH/IP2c/7B+j0BWFiF5Z2eBQAAAAAAAAAAAObF/S0skdoVtA8stfwrhrZ2Bw3JrK3evlkowJkcPKS+lKrCIQoCKGo4XqtAmAu5DPhzLMy0eayM64Is9bkKbFPbDqgZV+En2PfCYRkXNgvm0xvsv7Q7NMfwfE8F1bmi/g2x4Cr9+MfLW31iZu6J4HiYqjHDRv3x9zYc3wUv2jtfp4LxFtvskJCTDIJKs8/ZqJTzz1X8pFqOu/1YsaJdOVSSULhilNEx1ZtL/+mMrHew6TELhxTd34mntt2rTpvYPuwfl1Tb18fE7fU79rlrY8vpe/x9O1pp69lkPHesL1040Mb8nGSD85ZR3uwOApL942qhUm3NFpL+1+pKcNXhzJl9iA3PPC/9E7r3rN4f/OOZwxoYP6is7VVpgi58OLm1fhW2sNn3qmIFOtmhuvsqs19T24+rb3xx22x2Qr17XVGyqoVrab9Lxzq+JlFnDXVWELQMfYYx9QOCra4d0+B3VdMwo38/2eLfG/JBMDFR/PyGa2BmXLe+lneAzVmkdqIzJrf+fpDWBrCQfmdB/sMEAAAAAAAAAAAAWE5cMMr9sd+akSZt/zLBH+8vnd/RMsDlwiH56cGgWo0atN4rVlQqjtcooBPmwjqTWwelggtknWo4Rxdey5tkywBbiQt3TG7bq3xPsqq96GyjQTvKya072i6C4bYvzb3x8R0Nxp/Yuqvl+OXz5R/f1udr15IV7XDrQLkdTY7raHmf8z3RWzRODO4qroOgglS097mwSpRjFqyf6R0L+nfiTl8fZ7YfV86fc7N9C8KMdn9wrOtVPKydX/PzVlxbF88PRq7wF7TvndlXrypEVeTWtNuHqvbG5bmnq+49wXoOXUvl4Ju/nty1307AqPpc1FNZE/VaUq4kpXtd5dqpJ/p9vlPiui+0bjPFQGsDrc+XMzoTZByMtA/u+gnCkU3vz6V1MLgSAmyO0WIbOLNWhdy/ytgvFYDOsial3osv1xe+7KoAAAAAAAAAAACAbtKfGlI+vlFerleFeEYmltZU3xOaq01ndgZjOZ0Yz+k92as1N93ZsTmqZr6OG9voCV3MpFsGf8L6xlPlqj4uVFMb9Nn0qP+zDbdKOf/feFpXnnmkrfFrdfp8LZTScXWWeo7L6Zh1ei6dHK90nZXEcuc1Mdg6dFpPX+pguYpWwR4I2oC2+sxWcy+tqU6dv9prv96+hq9va3ZXta9dSRbyHjoX7ti3ey8Mr/W53KvrzmPm/rzc76ctLH6IzXEHz1v9sP/pmwSgM6w9q8LV19FGFAAAAAAAAAAAAEDbWoXYgG6USPUqZ1MzldNcxa1dkaowLjf945W+lVzfWKYWt51oiQvZmPw9AtA5Vt9HgA0AAAAAAAAAAAAAgA5x7SxtodQqsleKn1B/ao+WwsDjyfKjHYnUUPU3rqy4Cl3oDksTYnMmbvuEf6H/pADMny38kqa2/ZMAAAAAAAAAAAAAAEDnTGw/JmtGZl71+n+gP6b+1NGgLWQUrppbIuK2TcXul42dCB7tBNnyqoTurNIUx8FytTTtRMP6xw7709gvAHNj7Ts1ue2gAAAAAAAAAAAAAGCuaCcKNNd/eljGOzzTWrQkLZlR/9o5JZs/r4Iy8ko/j93pfxny/6if9Lc5ponBvZqP/tSJ4lgzn9tjdik9mG76nkQqoZw9WZ5zwezX1OC9ApahuJbaxLYD6h97mX/BfqsAtMm8V5NbCbABAAAAAAAAAAAAALCQXEW2TY+Oylt1UMYMz3w3IdlhWffUq+mHaEPPC5o3o0P+kMny52btCSVSjYNsA6mkv81RaSbA5qqw2SsPCFimlr4Sm7N1bKOmzSf9Zy8TgIjsmMyqV+vslucEAAAAAAAAAAAAAPNBJTYgut6TvVp/3W5Zs1PGS8jaRPn6cWExo4xkTgUV2vKrj2uq7wl1Qv/Yfn/cwzXfHZUxx4NKcI6JbfTnsDtUtc3x55PbpYnbTwlYppZHiM3Z/vjNuhT7l/JFDaAx90uvML2LXtUAAAAAAAAAAAAAOoIQG7AyuCCbMQdr2po2FoTqcvcQYMNy52m5OH3b00EoR/asADRm7RME2AAAAAAAAAAAAAAA6EIT244oN71D1h4LAmqNZfxtRnTp/A4CbFgJlk8ltpLNj71CXvwf/Wc3CUA1q6dkpl+niVc8JgAAAAAAAAAAAADolM2Tt5afX37yvDI7MgKw/PWnhmR1q7yZSoo5ZRTTI5oYJLiGFWX5hdic/sfvkon9v8ilD4HucFnKf70mbvuEAAAAAAAAAAAAAAAAgGvE8mknGjZx28Oyhe+SEcluwLE2K2O+jQAbAAAAAAAAAAAAAAAArjXLsxJbyebU62UKH5QxcQHdytqcYubbdWbrRwQAAAAAAAAAAAAAAABcY5ZnJbaSqcG/kzXfLqusgO6UUazwBgJsAAAAAAAAAAAAAAAAuFYt70psJQOppKz9f/6ztQK6R0YqfJcmtn9MAAAAAAAAAAAAAAAAwDVqZYTYnFtSr1XMfsCf8c0CrnXWPitz9Ts08YqHBQAAAAAAAAAAAAAAAFzDVk6Izekfu11WH5Extwq4Vll7VvbSN2vqlY8KAAAAAAAAAAAAAAAsnUSqV9n8bil2p/+qV9Z/GGX8f9Pycg/q7G2jmgvXlVCFpArenTK2t/IDc0qF/IOa2n5c7aqaqx0qf9+ajD/n4+rRg0oPptUuN25Oe/x9HpINxnXHIF0ed2LwPi0nbr55+cdWd/s7n/Dnnaiab6vjkEgllMslNB8vvnhKmR2Z4rHLDdXdJh5PRz4fwXrRncVzMLMGXYe/ua6VkmBfC8PBOnTHygnG9tehyT0wp/UdjOkfezfX0pju2HsaVVwPNNrnlRViczY9mpC3+oQ/84SAa437JVeY3qVzr0gLAAAAAAAAAAAAAAAsnYGxEcnsC0JDjaXVY3ZFDiO5gE9WRyWbbLFlWoXCgcgBpf6x/TLmYIu5+ruTP6Szt40oqmjjpv1x98450FdrYOyIrH/cy8wxTQzujfbeVFLW+se3aa4o48/33obHoS91UMaOaD4KaxKa6ntiZj4n6m9khlsGAIP362CL9eKvFXuvprYdUVRBuK4wUn2cG4wddX0Xw45H/f3d3XxD/3xezBwIQn4hnlYaF+5xIR/ZMQHXEqv/UCH/agJsAAAAAAAAAAAAAAAssf7Tx2QjhMJcWCprT6r/sSG1EgTYXKCpJpDkCt64R+24nne/+lN7Wg0bhL5kDkeYq/9ZsYPqHz+hKIohvupxK3PNVM3Vxk5o8+ndmq/+08MRglX1bXHvDQJjidB3M3WOb29wHAYeH9Fy5o6nrbNeZvPXin+eou5PULHPH7f2ODc6t25bt3abj1m8DloG2IIPGtb6jSfVe7Jqva68SmwlA2dulM3+T//ZGwWsdFYf1mX7Jj2/7bwAAAAAAAAAAAAAAMDSceEtF2ArsTolzxxTLn4qeO3leqXCbhkzHHpXWhfP76itLlWlfzylSsAqI2uP6NKFe6ves+nMTsVyI6HgUkY9ZkfDSli1c5VGlTcjupJ5pDxuf2pItrCvar7Wjmhy2yE1nOtpf1vvaNX2tXN14xodDAWXMv4xGGx6DJoph/xqq6hFqMRWfG8qNN/jKnhHdG7wwfL3gu6Pqw5WHQeT3zWrgtzA40kV4jvVDuOCfnZ/8bP9tTC5dfD/b+/uYuQ60/ywP6e6KWkkeabHjrEkmwN1k9TYEzseMusAWccLNZ2bIEEgKkHgi6ytZpwEuYlFJgHWAeIlmUWMAL4gBecihpFVM7tGcicycADfJGwhmwRY7IaU7ayAEcluYdhNjmez29KsNCS7q96c91R3dfV3nerqD5K/H1DVp6rOeeut95xD3vzxPKvzitXzU5Rr1QkFblOJrWrJmUNhnQDhQrTSVBSN6XJu7fUdXjpTvndxbTfLHqq7jc58VAXJVsYtyuvljxdurD23ORDYuNw19nTMnTy39ZibXNvpW1NVNbr2d+Y2qO+uqXCXz9H8qfc6M4/n3bF7/3U0Gn874HnVKm/cR6cuBQAAAAAAAABwsNYHqVKaivlTF7bY90ws5YpWy0Gj7YJh60NhsXQ25r5/N7aSK8FFo12FbatcQbui1p2e5lqNef9aRHFx+dVCzJ387tb7doeSdghGjc6sVgvbKRy3nTXjxN0oYrm6XQ8htjpzWLsO24ezetV9frc7D8fLdS16WNfuoFkOxeWulZt19lupqhYra1XuO7ccoNtMd9hvu3GzHPobfnU1SLdZ4K+aa41re/2+XWM+f+1E13t0+tfKxfq1gOdRiv9UgA0AAAAAAAAADonF5kR0QmG5otY2obDZ8buR0mpYqugEozYxtNoWNIestguwZUeGcoWtdmWsRjG5vvVipblurt98tX3+4EjjamfM3FLzT2/RArUKGnUF43aq7FVEj2uwjap1aaf63HQUrQ97PrZqddkJv83uGKJbuw4TcWz+rdi1xmq1tdaz/kJ8K3IwbbVSWlSV0rYKms2O50p957p+z1hVSW4ra6rCbTNulj9rFdc7r9PwFq1t11zbU9te23Onp8ovnu68bjU6Fe+e/xBbNn/y16OVfrlciYcBz4MUj8v/TX6pvHb/uwAAAAAAAAAADomuQE4O+exk7tT1NcGwLQNEafX91rPtQ2FZDietBohG4s03NwbOWkNdLS/T9I5tPPOYOeS14pUjP9x8x6416CWQ9XA8h85utcNJxd1NA3fbySG0lZaoeX7NpxdqHb8YH3S2ezlneR0ifbg83+kY+no8duN793I71bFqO4e4tguG9WKxeb6znSvS7RQiXHutbBM2qz6cXB53dsdxs1bc6KzT1mNOrO7fU4CvO+TWua6H40Xx6NRvx9HPfjkar/3vUaTdXVywl1L6/fKm/bd2/Y8WAAAAAAAAADBgXYGc5pNPejukuNkJBzUb70auJNbtaFUpbOXVQs95gaHmp9Fark+12bhfL1yNb/1CO7z08598GT0pFjpzaXYF2tboqojW61wfnj4f/Vhth7k8veXqYKP3agyyGoQq1+RWT0c8PHUlBqU19EFnTVuNqdi1HE5cHi8VUz0d0ohPVi+xlM/FxiDgiZmJSCvjppvRi8fjs+Xz1u1Wc0vdxbrXdnldr9RdK4pO4PHFCbFleSH+xX/2Z+PL1/9O+eo/Dzhscp/qVxv/Zcz+4EkAAAAAAAAAAIdHd8inTtisiLudAFGxXJGr22sxEovL2ykWoldpaDVwttm4ufLaQo3xqnHSmdWw05MvNnzeHUpqpbux1xbjWnRXMZs/uXN1sPVWf9PO1egGLVeRW+xqZfp4vLfg47bSaigvRW/nYLjcb7HzaqRqkfro+Przu1p5r2hMx2DMRrOYrLYaPV6LxdB3uu6zjhcrxJb9/p9/Vj7/FzH6+cPyR18uT2a9EoWwJ4pvyhvwV+PRKe1DAQAAAAAAAOAwKpojkRorr3oPcBXNL1aPKza2/XwSCzG08nG/OZZNxq3rxP0rnRzNVm0vm82xTpWsaKx+niumLcX75fHlPNJYe4xiodx1OobjVsyOz0Zdo/cm17S3/OarS1FXrnKX0spvWhuiqkKJ8W75GItieZ/c7rRYuhUP356OQViMy53tXlqZ9iIHFlcyXs3F3irs5Zaixx/MdsKO6Wn+uzbElrqCkIuLq59tdW6LuBlH4pNtz23VmjXqBQ9TV+W8rqDkixdiWzH39vU4+tnNaLx6e9M0KuyXnIp99uSvxh/84EcBAAAAAAAAABxOaeit1TaOqfeKXkNDs9HqVEzbGFJ7LRZ6qJK1mR/GILTDXJfL3zRRvc6Bsdazq5vu270GxXK70dH7F2MpbSwkVaS86/nyt12P0Zmp+HrhUs+V0HIFs6V0rRPWaj0911cVteGuwFc02oGoY/fOR6NRjr0cyCq6DyjXIA1djNEH03GkuNBX+G5FuwrbZHvYcq3mx+tXkds4Zm6vurrOi1/P9nxs0VUJbajKSq2vCndmzbjVd8W1zm9YM1a1qPnczsaJz2/Ew7evxMB0teztqgjXiBdZTowe+8Pvl1f6fxNwEFL8vXil+CUBNgAAAAAAAAA45FpdIa2i0Xug6smaNoobQ2xVtapienXsn09GL1K6uHpMjwWccjBp9MHt6nH8wZ048eCPynFud4JDuRBPDoxt1Sq1ew1a5e8avTdVfvm1dQG2TdYmTcbr37kdI3d6qzS3WM5ptSrclZ5bt+4kV5trND6OWLNem53LiWoOOYjWr8XW+dUXaToG4cm666dWsK/ofd+RkRyWu9OphNf1jetej0UauhwnPr8Sg1BV31upFper7y10gnYvdogt+72/uBhzp/+rSMX56sfDfkjxOJrFRMyf/Jvlf0ZPAgAAAAAAAAB4iTVXq3TltpMnPp/Ydvccxoo+Og+2Q1AT1aOIM2vDZ8VkzJ8823NgrNGaLJ/er7Zz+9Gcg5g7WZSP71Z/m0cmqvc7w5ff98a3r+04bvdvqyqYnboag1C14SxW2ntOV/P9+svvduYbxdk1881zyEG2XoN3G7/wg87mVpXtDkra4dppt0HN+yxUIcLWa2Odc5vXLFoX1uSscpDt2P2LsRtVYLBxuWuSU90hvRc/xLZifvxWlSRNxUcBe+s3o9n6YTwe/yQAAAAAAAAAAOZOT5XP7XaXWRq6HaP3r8XozGqLxyy3/hydud0VxpqNgUlTcXzm456rjxXFZOSQU1XE59SFDTmIx9/7pHo/FVe6DprcNqBXtTbt/LaFKsszMCutPdOVmDt5rppvdyWzufG71Xwbrfe6DhqL17/9QdS1pqJYujmwSnL7plyrHFJrPj1bhQi729vmNcvX6/zJ8TUVBBvlees78BfdwbnlKmxffdj98csTYsvyBTM//h+UF8/fUJWNgUvpp9Eq/p3yH8K/Hj85/c8DAAAAAAAAAGBF8+l7a/MqxcWI1G75efzBzMbWn+lKuc9sna+Ix+OzyxW1inZFreJsFOX3rHxvkc7Xa6NZHrtTEZ/58atrwk7Nxrub7pe/M6XV4lOtAbYRXZErre1U2e3Hp2+WO17vvC6Kiaitq6JYq3E9DpsUO7cW3a6t7Ioj8V4UnbFG4s03z0Q/qup7Xa1LU+vS+lapL1eIbcX8qd9oV2VL/0PAQKS/Hz979oN4NP5xAAAAAAAAAAAvj9eit+pUOTDUzqtMrXk/t/ysWmF2xlmIVrpYhbFSGlveZzbqqipqjd+Nh+MfVlW1Viumbd1Gs9EVfsrfOTd+o5evKud/c3V7i1DYmkpc5Ro8OvVhDFqvbT2bje7vnqhVYSxXk+uuKDbITn2vrQuf9Vv5rLFJiK3oPrfl+vcSIJwdXyivm9Vzu1VAcTvfuzfZVX2vHc58dPpmbJjyy6qqynbqPyxX9y+pysYuPCj/BfwrMXfqP4mf/eD/CwAAAAAAAADg+VQ0V1sqxnJ4rBdLXSG2nTIo7bzKhapCWhUqyxXMOo+pqmra11+ObxLw2rmy1k7WVkwbi9dH3tmwT2p+2fXibvRqKW51tovlgFe30fsXV9t9lmvUa9hs5++d7Xq10HNlt1yxrjvU9a1f+E70KsX7ne2iu5XqAOTQWLc684q0eh02N7kOu6uzpUbv57boaoO72bndztjMmfK7rq1+b7q5VaW84XjZzb39f5fPJ+PY/V+NoeJvlSesxsnnJbZQXit/J14p/l7Mnn4SAAAAAAAAAMDz7cjQ3VhM7e1UI6xTNEciLdeRKnospJQrpEUVDto+zLUSGioGEGJrj3Oz/G0Ty9vny+dbaz7vXoOi0e93rq0eltuILqbVIFOjuBvFkYkYvbfNEEPv5JOwMkK572Tno69/drPTijKH0UYftN9PNdeoVe5fLM81PR0rn7/Y8Zj2b5lc/r7Z+GbhVgxaHnflvPc6r7bVVp/NxS+3GLetUWOtqmDjyvVd9F4ZLldgWyrP+0qFwVRe7998dWGr3YXY2lI8OvXfxtHP/udovHK5XPDJgC01fiuaf/ifxeN/+acBAAAAAAAAALwoZjtbOUSUWzmuhKW20+oKXLVqVC/bSa5itbjNuCc+n+hs//Ef3+1prhGfrm5uWm1udvXjVn+tLNd7Fu93wlPVuOl8ROP89gel7u2Jcv+Jzstv/cLtWFjX9jSfryIGM9/ttFuirnzxdI9rXk+Rq+UtB+WKKpi2c7vS7mslF2b66fc3Xi9VpcHlMFprj9cqV95rFV0V2HKA7ctz263Xy9tOdDMrJRtT6y+XN8zvBqz129Faeifmxv6aABsAAAAAAAAAvGByK8fudqBvvnmmtwNzyGpZ0ZjedJccOBt9cLt6HMutNXuwFO9sO25r6KNIQ7erR89z3UH3GhTFRM/HDXdVrksxuCBfL4pOi9SRODb/Vk/HjM2MrGmN+WTh0x6OGVtzrgfVEnW97vadjXS+p2MWm93nf/P1bw5Nr44bNa6XoR92NnsJaZ64f6X8Ed0tRKdi/uTZnQJ/KrFtZv70/1k+/ytx7MGvlBfGr9fu58qLJaXfj2L4V2PurX8UAAAAAAAAAMALrJiKSFeqzTSUq25Nb7v7iZmJSGk1EPTNwuZVs4aHF2JxOQDVKPL+12MnKa2G3VpPNoasclvOtFxNLQ2/v+Ncq/3i3a7xNw8VFcXN8sP83SNV+O7h29Ox87jvd71YG3QqFm9F88hs1NFonS/nsRLgmo5mPi/LnvxkXavMZrnmjcn2d/08/905XLbYPN+p/ZVDd71UVFtsTpTHjHXmlItl7YWluBVDnetjogrPzY7Pbn9Qo6tCXNdadWu3Xs3nprz+0vkYuXOpt0pyXUG6RmPrEFsOBi7FR+1KeyuHlvfS/Kmewn5CbNt5dPK3yuffiuMzF8pV/TVhtpfOg0it/z6OLVyP3/uLiwEAAAAAAAAAvNhy4CqGryy/mojRmfdjbvzGpvvm0M5i+qjzOlec2ioUNDt+N048yFXOchvHkaoa26NTWwfZRqtqbWPLrzYPTBUxVY63HBhKkzH6ow9j7vvbhYzGyvmuBoyKxs1N9yviVjluO0CXhj4qjzu3bYiq3cpysvO61Zha83l7TvWqsx2vqp4tz7WYjcdbnIPsyNDNWErXqrUtiovlOtzqYR1WQ19pi9DXBo3uY3YOIfarCpvNTHeqvrWvsXNb7p8rn6WuTFPzydbtR1NxM4oqdDkSb3z7WizEhdhO99i5Qt83C7c23a+9prcjuubRSvka/zB6pJ1oL+bHP4pjf/j98ib9j9eUjeTFlNIX5T9qfyuWXv8LMX/67wqwAQAAAAAAAMBLIoefchito9wevX+t3UpyWQ6v5Qpsi+lOrAnt7NBeMqXVzxvFtTjx+ZVN96sCbF3tGBdj8/ajPx7PgaKusNbw7Sp0t5l2yOjjznxz/mWrsNPD8emuNWiHk3JFts0cu3c+lqrwUltKN+Px+NYhqr1QtUDtrO3ItuvQPm+rYau8DunJrR2/Y/Te5Jpj5sd3PmY3ijXV5HIr2pkN5yCf0xP3r0cqVsN1rXR92wpxr8SHq9mnYjKO3/94zbW9OvbIhrFji5BmXtOlrnuhGn/pbJ0AWzWboJ6JNBw/evDXy6X72yqzvWBSzESjdS0W3/yN+MnRrwMAAAAAAAAAePnkAM+zdGdDLqSIhWiVj83yIr22TRy9NxXReH/NmLmdZa42liuJNdLEcrW23sY9+tlYNF69vW5O5VhFu/pZUY11plPVa8VOVbI2X4P2uHnO1dzT+bVzLT9vPT03kDabx2cul+Nfab8opmJu/MKOx6xf2/XzzW1fiziz5phmMdFT6G505vbqGhaTW1bn28nxBzOra7rDODk8GcXGAGNe50a57t1rv/L+N1+e3bFFaK6cl4OHa4+frq7B9jibXIfltTR/8uyGsXKwLg3djt1IRXmNj1/VTrSu6WKpfP6N6nHs878WjXIho3EyeI6l34kY/vWYf+sfBQAAAAAAAADwcsuVvY5+dm5DOKxqV7kuOBQ52Jau9Fx1au70ZIze/6NOOKkdFJrIG1UpqtS1by/BuBwY2zjXsShS3j6/yRG9zXdlDYZe+6grALcy7vL81hwxHa2nFwYSYOvX+rVdP9/uUl9V4K6Y7CnA1q5iN7H8amHbdp2DNHfqUhyfWVgN8y3L5zlt2Lu9/jsF2LLc2vboZ2fXXTMTnRO6/jrM1d1+/tXm12EqxmJAhNh249Hbv1k+/2Ycn/1L5Vn5m+VF81eD50j6X6PZ+Lvx+OT+lrEEAAAAAAAAAA63dhhrvGojWQy9G6kKQ61U8cpBodmqdeY3X33YU3CoWw4nHf3xzWg8K8cuznSNu9zeshw3NW72nGfonmsMvV8OksfbWKUrt4OsM9/2uOfi+My70YjJaFWVzMa69sjj3I1UXN/z9pq9qtb2sw+j8crlDWu7Mt+iuBlfL9zoeR0WY7WlZtUudR+DevPjV8vfcyOKVz6IRjER7Zad7XObz2lRTEczpmq3cN3pmlkz9jbXYWPoj6KVq7jtQtH8ovoTDE67ROOlclX/vfLVseAwyn2Qr0cj/cN4ePpeAAAAAAAAAAC8aI7Nv9XZ/vlPvqwdtNvOyJ2RgY631/J8s+dpzgclXzePjn8RB0CIba8cu//vR1H8SrnC/0ZwGPxv0Yz/MUbH/6f4vWIxAAAAAAAAAACAQ0GIba/l6mxD3/obkVq/sq6kInuumCvX/R/Es8V/EH/wZ+cDAAAAAAAAAAA4dITY9tPozL8aqfUflcv+VwTa9swfRSr+frTiH9fu9wsAAAAAAAAAAOw7IbaD8r0HvxzNNBlFMVG+Ohnsxo8jFf9QcA0AAAAAAAAAAJ4/QmyHwejMmYj0r5db/3b5eCfYXorF8sr9nUjF/xKtZ9Px+M/8TgAAAAAAAAAAAM8lIbbDZvSzPxXx+i9FWvp3oyj+pfKdXwzKKzX9fjSLfxzR+j8imr8dj/7MHwQAAAAAAAAAAPDcE2I77P70PzsaR954pzxVfzmK9Ocjtf61KIoj8WL7eflb/2k0G/9X+bt/NxrDn8TciYcBAAAAAAAAAAC8cITYnje/8PiNKL75czE89EsRS38hUuNkVNXa0p+I59PPysvw/42U/p9oFD8q/07Hz78zE3/4p74KAAAAAAAAAADghSfE9kJIRYzOvR2tdDKi+YtRpLfKM/vnIqUT5Ycnyu1GHKjiaTmXR+U8fxqp8bvl34fRGPon0TryT+ONu4/j3r/5NAAAAAAAAAAAgJeSENuL7hd/90jMv348hv7E0WgtHY0UPyjP+qvl47tRpLFopT8ZjfiT0SreqPbPn0W8HpFei9QYLvdpB+BSNMvPlsqtJ+VOX0dKi+39i/Jv65+XWz+OVPxB+Ub5SN+Un8+VY/+TaLz+s3jj68dx721BNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHpQ1Np7bGYkluJMpOZYpKG3yqPHOp+lmI1GLESz+UU0hmZjbvxu7Lc8v4hyjktj0SxGyvmMRJFmq8+Gh2djdnw2Dlqe42Jet+aZLdcwlj4t53u3nO9CHLSxmbFYbE4sz7W9vtnauR6OtT0oG8/p2nWq/jY/PbD7oo72b7kWdTWfXI3HP5gNAAAAAAAAAACoaecQWzu49n6kOB+RJqJ3s+Xw01Es3YiHb0/HXuiE6vL8yrl1B8I2U8RCue/dKIqbMRy39i141f8aTpeTnooj8cm+hsROzExUa1qk8+XfkZ6Oaa/rdDnXD3c919GZ2zXXaaN8rls5ZFc+8nYUd6PV/CReHbo7kLXsPqdFOtPzOlXzyvdF3Iy58Rtx2Jy4fz1S8UHU1Swm4vH4J7Fbx2cul+t5pfcDyvtjbvzCjrsdnRmLoTQTdcydrBfyBQAAAAAAAACgL1uHNKqQTutiucsHPQd0tjZbjvPewKpQDW5u08shmL0JE7WrWuVQzuTu17AKs13d0zDbiftXBnS+p6NoXu07vDiIENu2yrXcTbhycOs0W45z5dCE2UbvTUY0Pop+CLEBAAAAAAAAANCnxqbvjs2cicV0J1JxeQBBnWrEiHK80Zn6bQrXywGipTQzoLlNlPOaitEHM1XbzEFamWeki4NZwzRZnZMTn1+JQcuV1/IaDO585/ajt8vz/dHA13Ugcqiwj/nlfUcfDPq+mIrj9z8+8HWqvr9xOQAAAAAAAAAAYJ9tDLEdu3c+ltLtiB1ac/YlXYzjD+7EyJ36AaDBB4jWjB6LaWYgAbG9nedIpKHLAw3dVe0j9+x85+Dd7eqaOpSW59fLWuZ9Fqt1OhODVhTne57HXskVA/fkGgAAAAAAAAAAgO2tDbHlEM1Q46M9CF+tKuJMvPGdj2sds5cBom5VQGwX1eLaFez2fp7t0N3uQk+51Wlu25mKD2JvjUWj8fGeVJAbjJ3XcvX6G4u90/6OfgKeuzV6/2IV6AMAAAAAAAAAgAOwNsSWQzR7GWBbNRHHcnCmB/sTIOqSLsbo/Y+irhxgW9rPeVahpzt9BdlygK1a0zQR+yUHBA93kG3rc75/VcrG4vVv17/2dvWN5fVTFNqIAgAAAAAAAABwYFZDbKP3JmM/2wk2iss7Vp3a9wDbimKy55Bd1p7nx/sUAOw20ldFtqXIQam9rha3UbvS3ftxOG0erKzWdh+rlOXWoic+n4j9sn/BVQAAAAAAAAAA2FRXJbah/Q4XjcTr396+leX+VcDaqFFci9Ef9Rb0OpCgXcf2VcTWO3H/SqR0Pg5Mur6rNqh7qbFJRbL2Nbi/cthvP+Rr4eCuWwAAAAAAAAAAqLRDbLm9ZL+tJVPMRr+KYmLLz6rKcPtYAWtTw9d23OVwBIF6a8+aw2PpwFtHjtQK3e2vkY1V0FK/FesWon9ndqxSuFuH41oAAAAAAAAAAIDlENtSn60lm8VEzJ8cj+bT8fLV3ahvYuuwTuMwBGwmtm1/eZiCQL20Z12MwxIemxhwW9GFKkzZ/ehXs/FuZ7sKd/Zxb6R0JeZOfre6L1JxJeobiTff3Lt2r/l3tasHAgAAAAAAAADAgWuH2IpmP1WfpuPx+CfV1uMfzMaR4lz048gbYxveOzEzEYemzeE21eB222qyClsV0+Vjqvq7m/DVTu1Zv3fvfN/V9tpyZbG7nbn2F1rskq7EwBQXqzBl96PfAFlRrLZafRL9VUObP3W1+pvvi/nxq1H0UZUtDb8Ve2WpdSW0EQUAAAAAAAAA4JBoh9hafYR10rpjZscX+gphHTny1iZj91ula6GqgtV6bSzmThbVo6oS17qwi4DYxMYWk9GuwtZvu9OUpjpV7ObGz5WPC9Xf/DqKs9Xn/SiKi1tWY2sNfRD9yOuW55ori82dPNuZa95eCYoVfbXOHNt0XQdlJUDWDtz1rugzuNZt/TlIxc2oK+1RyCy36U1Ff9cCAAAAAAAAAADsgeHoVxFn4sTnV+Lh21c671UhrEHoIxyW4m60nr5XhZe6tV9PVY/R+9eqql11tVtMTq95b7E5sZIBrKeYLNfpxpYfz43nCmcX4vjMbBS1q5WNxBsj78ZCrB0/B+4W+6jClsN033x1KRbObh5Sa6/t1Tj62Y1ovHq7vCbGoo40lCvZTceeapZr0ZioccDuQ2xvjFwuz8Glzusc/Mvn9KC1r4PD0f4WAAAAAAAAAACWtVNYR4b6aw2ZQ0ijD24PtKJWu5VozXnE7KYBtvXmTl2KaN2IuopiYuObQ/WrxeUqcXPjvX1/VUUsXY+6Uuv8hveqwF3dcco1nT91YcsAW7e87q8U70V9Z7asHDcojT6qxB2bb1cHfDw+G31JF8v7YiZGZ/qtKLg3luJa9NpGdHetbQEAAAAAAAAAoGcrpcRm+2wJmU1EGrodxx/cqUI7YzO7CyW14p2oqyiu7BhgW3Fk6GLt31qsC1tVv7FmZbN2KOxqrWOONK7Wn+smgbti6N2oq1VM1tk9ZsfvVq1F6xmJN988E3spDb1V95B4dPyLrlf9BTyrsFia6oTZqvazB2j0/sVI6XzP+7eengsAAAAAAAAAANgH7Xais+MLMTpzt3Ywq1sOeuXQzlLksW5GsXQjHr49HXU1ynFSrSMWeq5uluXfGvHd2I2lqB+8KmoHvNpzPT5zvWZb0ZGqklh3ECulevPNrVkfj38SdbXiRgzFlTqHRHP4h7GXLUVTqts+dm1oMBXltZx2E7Qbq+6LxXLreHlfpOaNeHT6ZuyndhvRaz3vnysG5lDo6IMAAAAAAAAAAIC91uhsFVGvSthWUuQqZZNVdbZ+WiqmNBb19Fspq3+pORZ1PVv8NPrxStyKuoqnq6GrdmW8sail6C9kldtv1m1D2YjdBMS2ltvSnpj5OGr/9nXX0yvx4S6qFK5VpPPRaHy879XZFtPtnvftp2IgAAAAAAAAAADswmqI7eH4dES6HoM1tqalYi+qEFwNqZiO/dZPi8qffr/fsN1s1FV0reGTmuvZ1n8wsKh7PmqHFjcbI19jac0jpdu12meuaK0L8OVqeCkNOtQ11q5amHIL3mt7GmY7cf9K1Any1W0jCwAAAAAAAAAAu9RY8+pII4d19qKy2dhqmO1H21feKmpWzkoDqpK1l1IfQbQVVYiq5vGpaw2Ha1ciy21B929NU18hu72TnmysfDd36nq5KL23rO35u6qqhRerSml1Kxb2YmzmTKTics/7t9L1vtrIAgAAAAAAAADALqwNseXAVPPpe7F3LTrHIobvxInPr8SgNA4gxFYcsuDVYVI/sHd41jKlqXj8g9lNP5s7PbkHlQpXjFUhz0HeF7mN7GL6uOf983n7+VfaiAIAAAAAAAAAsO8aG97JIZ65k2cjFVdir6Shy3Hs/sUYhNYBhKD2u/pbYxe/cXif51q3kl6xiyp1g9Z6tn2Ia+7UpfLkXyrnvDdrmu+L3F50EBYjjzPW8/5Feb8vnD38VQ0BAAAAAAAAAHjhNLb8ZH78ajSfjlfVqfbkm4trceLziQ3v167k1RqL/Va3+lsOdo3c6S+Ilitq1W252R0Me9JH4Gqojxakq8bieZTSlS2rsHXLrUWXnp5dvi/2IPSVLu464Dl6b7IcZ7Ln/fNvmRsffLtUAAAAAAAAAADowfC2n7ZDPRfi6GdXo/HK5Yhionalre2koY/K5/E179WtctUozsR+S80vt8v/berNN8+Uv2w66lqK+r+v2RViezw+G6MPopZWK39nf6GmIp2JVGP/Vtqr1rW9ywG2+VO9t9Lsvi+GjkxEalwe6H3RKC7HyJ2pviqjjc2MxWK6XOuYohiL0ZmPNn5Q40QOlWs4OjPbed18crWnUOB+eS1GYjEAAAAAAAAAADiEhnvaayW0kx2feTcaMRkpnY/dG6uqsT18e3r1reJuRKoT3DpTVTmrE/jJQZ+6ZsdnO9tHhu7GYp2kVqnZeLd8no66UrwfdT1Z+HTdGLO1QlaNYrJ8vhR1nZiZKK+LmhXnGrNxkFrpYjw69WH0o31fTFWPoz9+JxrPJgcU9ByJ17/9QSxE78G6FUvVd49FPRO1Ams9jfHaVPk0G3XlKod1ppJ6/Ldi6QDaDgMAAAAAAAAA0JOa5cQitxm9FQ/H36tajUbrQv32n+u0w12riqhbmasd+OlVu1LV7fIxU+vR3Q50dvxuHxXjJmu3FK3CdjXaQmb5fKwP9BXFdNQzEqMz9cNz/QTuUhxUJbbpiKWzfQfY1nv8vU9i/tSFmD/Zvi+i9pqvVRQT8TKqqhzW0Gur3la8E3Xs9t81AAAAAAAAAAB6Vj/EtiJXoZo7PVWFdpq5pWKfoY+NVas+jbqK4mLP1dWW4lrUrVSVg1brg2Gp6Cds91GtI9pzrSlNb3yv+UnUH+d6rYp1o/cv9hW4ezzex9z6Vp7DYiqaxUTMnTwXc9/fmwBdvi/mxs9VQc+UpqI/+98m9zAohmajnpF4Y+TdnceteW0WQmwAAAAAAAAAAPul3U40t/RsDderVNRY+qTTBjRXoYoYjxMzH9dvM1qcWTeju7FUtRSsU7VspKquNjZzbk3bz25jM+U+zet9tUFNmwbDbpSLMBF1FMX5GL3/UXz91aVt25/uZq6txtSG944M3YyldG3ga7qiCrAVAwrc9WW6/P7ZTT/JQblW+RiKT2NuvF5oLYf4ntWsLpfDT3PjN6rtlTa8x2dmo0hXop6Xs/1lvv8Xo6ZybcdmPtnyOj1x/0p5HYxFHa10UBUCAQAAAAAAAABeOu0QWyrGaods0vBUVOGhNXJrxrrBq7VhrtnxhRiduVm7qleurpZDV6P3y2MbNzqBpRxEWop3y88ulu+PRT+Wmjc2vNdfMKxUTMYb35mIN2eul8d+EkditvrNVXCt/A1F63w57gflXOuHmLaqbNZe06lyh4tRz1jVSjUfWyzdiOHhu9VY1Se5LWtzImLo/XLciejHZoG7vhRTneDYYI3Uvy+qCl5r5/JKeV8sxpVgZ/n6Ov5gdpMKjdtZvvdnppev09lyvctzF++U5+N8pD6uz6IxHQAAAAAAAAAA7It2iO3I0N1YTFFPOh9jM1d3rNK1kyIWNnnvRqSYjPrGyoMvVmGt0Qftd2r/rnVyK9GfbtJ2sgrbzFzvo8JWNhYpXa+2ctWpPNeVeaYi+lYUV7b8rPnkwxh6tW6IbVmajDQ0Wc1xzbrmbrR9r+/0PrcS7cds1JXDV7my4UqVwrZ+qqotxMuqKG72Fbjsvk6z3dz63ywc9msTAAAAAAAAAOCF0Vj+O7tpmGx77XaTObCTq3KdmJmIlD6KujZr2/dwfDqimI7DoCiub/lZrrBVHJKwUepqY7mZqrVluh6HRfPphTjs2lXn6reVTEMfxejM+537Yin6aLXax/e+KIq4FQcppalt2/0CAAAAAAAAADBQ7RBbDuukop/QzFikodtVy8mUbleva8+gsfn3FnE1DtpOwbC8bkXrcISxWsXkjvscaVw9FKG7HBKqQnXPgZSrgtU2Vh441bkvUqrbYnfzcOfLogqxHmCIb2BtbgEAAAAAAAAA6EWjs3VQobGvFzavulQFWQ64cljr6bkd9/nx6ZsHPs+UrvTUmrOqLFa8FwcpBwO/+epSPC9ytb2DsNS8ES+11sGsexWwPPRtbgEAAAAAAAAAXiirIbaDaOG5U9u+XDksh54OQhUM67FaWJ7nQVWOSuX3zp/qPYCYz3MqrsTBWKiCgc9Tq8aqSmF5ne6v6fjp91/eSmzZ3Omp/f/3qPy3pvXs4CtAAgAAAAAAAAC8ZIbXvDoSl2Ix7sR+6CUwkgNERz87F41Xb0fRR6vSfuUAW51gWHue7+3/PONufPPlztXi1psfvxrHZyKK8nfun4WIpXPPTRvRbq80LsWzNLFv57b5tP8Wte1WnEXs1uiDVGv/ZjEx8ApmzScXYvjVO+V1PhL7IbUuPZfXJwAAAAAAAADAc66x5tXs+N2ItD+tHnsNjOR9cvWu/arIVjfAtmJlnvtXkW26CrD1W9UsB9n2qyJbde6WzsXcc1pdLIcUXyneiyL2voJcnQqAL7q8DsPFuX1b90e5NTAAAAAAAAAAAPutseGduVPX9z7IVkzWCozsV0CslS72FWBbkec5d/JsuX7XYy+1yvHnTu6+LWcOskXrwh4HBKerc/e8BthW5IBnDlTt5Vr1G6B8ke39ui9U/x5ZdwAAAAAAAACAA9PY9N0cZGs+HR94cCSPl9sOzo3fiLpWAmK5etjgKzNNRyydjUenPoxBmDt1KRrF+T0I3kxX6/fo1OBChnOnp9qV7tJUDNZCFQrMYbsXpbJYDlTt5VoJUm1uZd0HH2It76enZ/v69wgAAAAAAAAAgIFpbPlJDh7NnxwfUKWuharK1Ddfno3H45/EbuTqYUtPz1ZBot3Pqx0Ky0GrQVcK+/H4rQGu3+o8d7t+m6nO9akL7eDirgNa7XP99ZfjAwsFHiYra5XPaxTTsVt5vXOQ6kVcq0HqVDkc9P2kdSsAAAAAAAAAwEEret7z6I/fieLZ+WgUE+WrMz0ckaul3Y2iuBl/vHBj160vt3J85t2I1vnye870MK+Fcr/pqEIsr96MR8e/iP1Sf/2mI6XpaDWm9yS4tp2jn43F0JGJiKH3I1Ke68i2++dQUV7XZkzFk4VPd32uR2dul4NO9H5AMXlg1bTyWg2/9m65Bud7Wqv9ui92a/RBqrV/DoXt53Wa76fGs8ke7/vsbnk/3TyQ+wkAAAAAAAAAgG31HmJbb3TmTDSHvxOxNLb2g+HZKIZm9zUg1u3Y/FuRmmNr3svz+flPvjxUgaHN1q+RQ3bxRXy9MHvo55oNxaeHbq4HbWWtGksj0eoKtOVzm169e2D3xYts5M5IvPYv/HDLNT9s9z4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDL4v8HfY1c68wqomEAAAAASUVORK5CYII=';

                            // doc['header']=(function() {
                            //     return {
                            //         columns: [
                            //             {
                            //                 image: logo,
                            //                 width: 565,
                            //             },
                            //         ],
                            //         margin: 26
                            //     }
                            // });

                            doc['header'] = function(currentPage, pageCount) {
                                if (currentPage === 1) {
                                    return {
                                        columns: [
                                        {
                                            image: logo,
                                            width: 565,
                                        },
                                        ],
                                        margin: 26,
                                    };
                                    } else {
                                    return null; // return null for all subsequent pages to remove the header
                                    }
                            };
                            
                            var now = new Date();
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            doc['footer']=(function(page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: ['Created on: ', { text: jsDate.toString() }]
                                        },
                                        {
                                            alignment: 'right',
                                            text: ['page ', { text: page.toString() },	' of ',	{ text: pages.toString() }]
                                        }
                                    ],
                                    // margin: [25.4, 14]
                                    margin: [25.4, 1, 25.4, 0]
                                }
                            });


                            

                            doc.content[1].table.widths = 
                                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                doc.defaultStyle.alignment = 'center';
                                doc.styles.tableHeader.alignment = 'center';
                            
                            // doc.setMargins = [900, ];
                            doc.pageMargins = [25.4,25.4,25.4,25.4];
                            // doc.pageMargins = [25.4,25.4,25.4,25.4];
                            doc.defaultStyle.fontSize = 7.8;
                            doc.styles.tableHeader.fontSize = 8;
                            doc.styles.tableHeader.textTransform = 'uppercase';
                            // doc.styles.title.fontSize = 40;

                            doc.styles.title = {
                                color: '#001BDE',
                                fontSize: 15,
                                alignment: 'center',
                                bold: true,
                            }  
                            // // Remove spaces around page title
                            // doc.content[0].text = doc.content[0].text.trim();
                            // doc.content[1].margin = [0, 40, 0, 0];

                            
                            

                            // Styling the table: create style object
                            var objLayout = {};
                            // Horizontal line thickness
                            objLayout['hLineWidth'] = function(i) { return .2; };
                            // Vertikal line thickness
                            objLayout['vLineWidth'] = function(i) { return 0; };
                            // Horizontal line color
                            objLayout['hLineColor'] = function(i) { return '#9AAAC7'; };
                            // Vertical line color
                            objLayout['vLineColor'] = function(i) { return '#9AAAC7'; };
                            // Left padding of the cell
                            objLayout['paddingLeft'] = function(i) { return 4; };
                            // Right padding of the cell
                            objLayout['paddingRight'] = function(i) { return 4; };
                            // Inject the object in the document
                            doc.content[1].layout = objLayout;
                        }
                    },



                    
                    { extend: 'print', text: '<i class="ri-printer-line me-2 align-middle"></i>Print' ,
                    // autoPrint: false,
                    footer: true,
                        customize: function ( win ) {
                        $(win.document.body)
                        .css( 'font-size', '5px' )
                        .css('background', '#fff')
                        .css('margin-top', '1.7rem')
                        .css('margin-left', '1.5rem')
                        .css('margin-right', '1.5rem')

                        $(win.document.body).find('h1')
                            .css('font-size', '1.2rem')
                            .css('font-weight', '900')
                            .css('margin-bottom', '1.3rem')
                            .addClass('h1-style')

                        
                        
                        // HEADER
                        $(win.document.body).prepend(`
                        <div class="col rep-header">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col">
                                    <img src="https://i.pinimg.com/originals/aa/58/37/aa583766a0d79119b66a87db5b2b8183.png" alt="Scoops 4 U Logo">
                                    <h1 class="mt-2 mb-4">SCOOPS 4 U</h1>
                                </div>
                                
                                <div class="col scoops">
                                    <h3 class="w-75 mb-0">#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3 class="mb-0">scoops4uteresa@gmail.com</h3>
                                    <h3 class="">09364671062</h3>
                                    <!-- <h3><span><i class="ri-store-fill"></i>&nbsp; </span>#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3><span><i class="ri-mail-fill"></i>&nbsp; </span>scoops4uteresa@gmail.com</h3>
                                    <h3><span><i class="ri-contacts-fill"></i>&nbsp; </span>09364671062</h3> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <hr>
                        </div>


                        `);

                        

                        

                        $(win.document.body).find( 'table' )
                            .addClass( 'compact' )
                            .removeClass('table-hover')
                            .css( 'font-size', '3px' );

                        $(win.document.body).find( '.rep-header' )
                            .addClass( 'printable-area' )
                        }
                    },

                        
                ]
            }
        ],
        

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

        order: [] 
    });


    // for row numbers
    tableRep.on('order.dt search.dt', function () {
        let i = 1;

        tableRep.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableRep.search($(this).val()).draw();
    });    

    $('.btn-place').html(tableRep.buttons().container());
    // $('.btn-print').html(tableRep.button().container());


    $(".btn-filter").click(function() {
  
        // Clear the input values
        $("#min, #max").val("");
        
        // set those null aswell
        minDate.val(null)
        maxDate.val(null)
        
        // search and draw
        // tableRep.search()
        tableRep.draw();
      });

    var minDate, maxDate;
 
// Custom filtering function which will search data in column four between two values
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = minDate.val();
        var max = maxDate.val();
        var date = new Date( data[4] );
 
        if (
            ( min === null && max === null ) ||
            ( min === null && date <= max ) ||
            ( min <= date  && max === null ) ||
            ( min <= date  && date <= max )
        ) {
            return true;
        }
        return false;
    }
);

 // Create date inputs
    minDate = new DateTime($('#min'), {
        format: 'MM/DD/YYYY'
    });
    maxDate = new DateTime($('#max'), {
        format: 'MM/DD/YYYY'
    });

    // Refilter the table
    $('#min, #max').on('change', function () {
        tableRep.draw();
    });


    $('.filter-checkbox').on('change', function(e){
        var searchTerms = []
        $.each($('.filter-checkbox'), function(i,elem){
        if($(elem).prop('checked')){
        searchTerms.push("^" + $(this).val() + "$")
        }
    })
    tableRep.column(4).search(searchTerms.join('|'), true, false, true).draw();
    });

    $('.status-dropdown').on('change', function(e){
        var status = $(this).val();
        $('.status-dropdown').val(status)
        // console.log(status)
        //dataTable.column(6).search('\\s' + status + '\\s', true, false, true).draw();
        // tableRep.column(3).search(status).draw();
        tableRep.column(3).search('^' + status, true, false).draw();

    })






















          // for most tables (reports POS SALES)

        var tableRepPOS = $('#tableRepPOS').DataTable({

            dom: 'lBfrtip',
            // buttons: [
            //     // 'excel', 
            //     { extend: 'excel', text: '<i class="ri-file-excel-2-fill"></i>' },
            //     { extend: 'print', text: '<i class="ri-printer-fill"></i>' },
            // ],
            buttons: [
                {
                    extend: 'collection',
                    text: '<i class="ri-save-fill"></i>',
                    buttons: [
                        { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel', 
    
                        exportOptions: {
                            columns: ':not(:eq(0))' // Exclude column with index 2
                        }
                    
                        },
                        
                        { extend: 'pdf', 
                            text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                            // orientation: 'landscape',
                            // title: function() {
                            //     return document.title;
                            // },
    
                            filename: function() {
                                var now = new Date();
                                var options = { hour: '2-digit', minute:'2-digit', hour12: true };
                                var jsTime = now.toLocaleTimeString([], options).replace(/:/g, '-');
                                
                                var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                                return 'SCOOPS 4 U' + ' - ' + document.title + '' + ' (' + jsDate + ' '+ jsTime + ')';
                            },
                            
                            pageSize: {
                                width: 8.5 * 72,  // convert inches to points (1 inch = 72 points)
                                height: 13 * 72
                            },
                            customize: function (doc) {
    
                                pdfMake.fonts = {
                                    Poppins: {
                                            normal: 'Poppins-Light.ttf',
                                            bold: 'Poppins-Bold.ttf',
                                            italics: 'Poppins-Black.ttf',
                                            bolditalics: 'Poppins-Medium.ttf'
                                    }
                                };
                                doc.defaultStyle.font = 'Poppins';
    
    
                                delete doc.styles.tableBodyOdd.fillColor;
                                doc.content[1].table.body[0].forEach(function(h) {
                                    h.fillColor = '#001BDE';
                                });
                                
                                var logo = 'data:image/png;base64,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';
    
                                // doc['header']=(function() {
                                //     return {
                                //         columns: [
                                //             {
                                //                 image: logo,
                                //                 width: 565,
                                //             },
                                //         ],
                                //         margin: 26
                                //     }
                                // });
    
                                doc['header'] = function(currentPage, pageCount) {
                                    if (currentPage === 1) {
                                        return {
                                            columns: [
                                            {
                                                image: logo,
                                                width: 565,
                                            },
                                            ],
                                            margin: 26,
                                        };
                                        } else {
                                        return null; // return null for all subsequent pages to remove the header
                                        }
                                };
                                
                                var now = new Date();
                                var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                                doc['footer']=(function(page, pages) {
                                    return {
                                        columns: [
                                            {
                                                alignment: 'left',
                                                text: ['Created on: ', { text: jsDate.toString() }]
                                            },
                                            {
                                                alignment: 'right',
                                                text: ['page ', { text: page.toString() },	' of ',	{ text: pages.toString() }]
                                            }
                                        ],
                                        // margin: [25.4, 14]
                                        margin: [25.4, 1, 25.4, 0]
                                    }
                                });
    
    
                                
    
                                doc.content[1].table.widths = 
                                    Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                    doc.defaultStyle.alignment = 'center';
                                    doc.styles.tableHeader.alignment = 'center';
                                
                                // doc.setMargins = [900, ];
                                doc.pageMargins = [25.4,25.4,25.4,25.4];
                                // doc.pageMargins = [25.4,25.4,25.4,25.4];
                                doc.defaultStyle.fontSize = 7.8;
                                doc.styles.tableHeader.fontSize = 8;
                                doc.styles.tableHeader.textTransform = 'uppercase';
                                // doc.styles.title.fontSize = 40;
    
                                doc.styles.title = {
                                    color: '#001BDE',
                                    fontSize: 15,
                                    alignment: 'center',
                                    bold: true,
                                }  
                                // // Remove spaces around page title
                                // doc.content[0].text = doc.content[0].text.trim();
                                // doc.content[1].margin = [0, 40, 0, 0];
    
                                
                                
    
                                // Styling the table: create style object
                                var objLayout = {};
                                // Horizontal line thickness
                                objLayout['hLineWidth'] = function(i) { return .2; };
                                // Vertikal line thickness
                                objLayout['vLineWidth'] = function(i) { return 0; };
                                // Horizontal line color
                                objLayout['hLineColor'] = function(i) { return '#9AAAC7'; };
                                // Vertical line color
                                objLayout['vLineColor'] = function(i) { return '#9AAAC7'; };
                                // Left padding of the cell
                                objLayout['paddingLeft'] = function(i) { return 4; };
                                // Right padding of the cell
                                objLayout['paddingRight'] = function(i) { return 4; };
                                // Inject the object in the document
                                doc.content[1].layout = objLayout;
                            }
                        },
    
    
    
                        
                        { extend: 'print', text: '<i class="ri-printer-line me-2 align-middle"></i>Print' ,
                        // autoPrint: false,
                        footer: true,
                            customize: function ( win ) {
                            $(win.document.body)
                            .css( 'font-size', '5px' )
                            .css('background', '#fff')
                            .css('margin-top', '1.7rem')
                            .css('margin-left', '1.5rem')
                            .css('margin-right', '1.5rem')
    
                            $(win.document.body).find('h1')
                                .css('font-size', '1.2rem')
                                .css('font-weight', '900')
                                .css('margin-bottom', '1.3rem')
                                .addClass('h1-style')
    
                            
                            
                            // HEADER
                            $(win.document.body).prepend(`
                            <div class="col rep-header">
                                <div class="row d-flex justify-content-center align-items-center">
                                    <div class="col">
                                        <img src="https://i.pinimg.com/originals/aa/58/37/aa583766a0d79119b66a87db5b2b8183.png" alt="Scoops 4 U Logo">
                                        <h1 class="mt-2 mb-4">SCOOPS 4 U</h1>
                                    </div>
                                    
                                    <div class="col scoops">
                                        <h3 class="w-75 mb-0">#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                        <h3 class="mb-0">scoops4uteresa@gmail.com</h3>
                                        <h3 class="">09364671062</h3>
                                        <!-- <h3><span><i class="ri-store-fill"></i>&nbsp; </span>#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                        <h3><span><i class="ri-mail-fill"></i>&nbsp; </span>scoops4uteresa@gmail.com</h3>
                                        <h3><span><i class="ri-contacts-fill"></i>&nbsp; </span>09364671062</h3> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-4">
                                <hr>
                            </div>
    
    
                            `);
    
                            
    
                            
    
                            $(win.document.body).find( 'table' )
                                .addClass( 'compact' )
                                .removeClass('table-hover')
                                .css( 'font-size', '3px' );
    
                            $(win.document.body).find( '.rep-header' )
                                .addClass( 'printable-area' )
                            }
                        },
    
                            
                    ]
                }
            ],
    
            "fnDrawCallback": function(oSettings) {
                if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                    $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
                } else {
                    $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
                }
            },
            "lengthChange": true,
    
            initComplete: (settings, json)=>{
                $('.dataTables_length').appendTo('#showEntries');
            },
    
            "oLanguage": {
                // &nbsp; is a blank text ---- used for spacing
                "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
                "oPaginate": {
                    sNext: '<i class="ri-arrow-right-s-line"></i>',
                    sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                    // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                    // sLast: '<i class="ri-arrow-right-s-fill"></i>'
                }
            },
    
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: 0, 
                },
            ],
            order: [[1, 'asc']],
    
            
        });
    
    
        // for row numbers
        tableRepPOS.on('order.dt search.dt', function () {
            let i = 1;
    
            tableRepPOS.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
                this.data(i++);
            });
        }).draw();
        
    
        // for most tables search bar
        $('#tableM').keyup(function(){
            tableRepPOS.search($(this).val()).draw();
        });    
    
        $('.btn-placePOS').html(tableRepPOS.buttons().container());
        // $('.btn-print').html(tableRep.button().container());
    
        
    $(".btn-filterPOS").click(function() {
  
        // Clear the input values
        $("#minPOS, #maxPOS").val("");
        
        // set those null aswell
        minDatePOS.val(null)
        maxDatePOS.val(null)
        
        // search and draw
        // tableRep.search()
        tableRepPOS.draw();
      });

        
        var minDatePOS, maxDatePOS;
     
    // Custom filtering function which will search data in column four between two values
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var minPOS = minDatePOS.val();
            var maxPOS = maxDatePOS.val();
            var datePOS = new Date( data[3] );
     
            if (
                ( minPOS === null && maxPOS === null ) ||
                ( minPOS === null && datePOS <= maxPOS ) ||
                ( minPOS <= datePOS   && maxPOS === null ) ||
                ( minPOS <= datePOS   && datePOS <= maxPOS )
            ) {
                return true;
            }
            return false;
        }
    );
    
     // Create date inputs
        minDatePOS = new DateTime($('#minPOS'), {
            format: 'MMMM D, YYYY'
        });
        maxDatePOS = new DateTime($('#maxPOS'), {
            format: 'MMMM D, YYYY'
        });
    
    
        // Refilter the table
        $('#minPOS, #maxPOS').on('change', function () {
            tableRepPOS.draw();
        });








        
    var tableRepUs = $('#tableRepUs').DataTable({

        dom: 'lBfrtip',

    
        // buttons: [
        //     // 'excel', 
        //     { extend: 'excel', text: '<i class="ri-file-excel-2-fill"></i>' },
        //     { extend: 'print', text: '<i class="ri-printer-fill"></i>' },
        // ],
        buttons: [
            {
                extend: 'collection',
                text: '<i class="ri-save-fill"></i>',
                buttons: [
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel', 

                    exportOptions: {
                        columns: ':not(:eq(0))' // Exclude column with index 2
                    }
                
                    },
                    
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        // orientation: 'landscape',
                        // title: function() {
                        //     return document.title;
                        // },

                        filename: function() {
                            var now = new Date();
                            var options = { hour: '2-digit', minute:'2-digit', hour12: true };
                            var jsTime = now.toLocaleTimeString([], options).replace(/:/g, '-');
                            
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            return 'SCOOPS 4 U' + ' - ' + document.title + '' + ' (' + jsDate + ' '+ jsTime + ')';
                        },
                        
                        pageSize: {
                            width: 8.5 * 72,  // convert inches to points (1 inch = 72 points)
                            height: 13 * 72
                        },
                        customize: function (doc) {

                            pdfMake.fonts = {
                                Poppins: {
                                        normal: 'Poppins-Light.ttf',
                                        bold: 'Poppins-Bold.ttf',
                                        italics: 'Poppins-Black.ttf',
                                        bolditalics: 'Poppins-Medium.ttf'
                                }
                            };
                            doc.defaultStyle.font = 'Poppins';


                            delete doc.styles.tableBodyOdd.fillColor;
                            doc.content[1].table.body[0].forEach(function(h) {
                                h.fillColor = '#001BDE';
                            });
                            
                            var logo = 'data:image/png;base64,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';

                            // doc['header']=(function() {
                            //     return {
                            //         columns: [
                            //             {
                            //                 image: logo,
                            //                 width: 565,
                            //             },
                            //         ],
                            //         margin: 26
                            //     }
                            // });

                            doc['header'] = function(currentPage, pageCount) {
                                if (currentPage === 1) {
                                    return {
                                        columns: [
                                        {
                                            image: logo,
                                            width: 565,
                                        },
                                        ],
                                        margin: 26,
                                    };
                                    } else {
                                    return null; // return null for all subsequent pages to remove the header
                                    }
                            };
                            
                            var now = new Date();
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            doc['footer']=(function(page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: ['Created on: ', { text: jsDate.toString() }]
                                        },
                                        {
                                            alignment: 'right',
                                            text: ['page ', { text: page.toString() },	' of ',	{ text: pages.toString() }]
                                        }
                                    ],
                                    // margin: [25.4, 14]
                                    margin: [25.4, 1, 25.4, 0]
                                }
                            });


                            

                            doc.content[1].table.widths = 
                                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                doc.defaultStyle.alignment = 'center';
                                doc.styles.tableHeader.alignment = 'center';
                            
                            // doc.setMargins = [900, ];
                            doc.pageMargins = [25.4,25.4,25.4,25.4];
                            // doc.pageMargins = [25.4,25.4,25.4,25.4];
                            doc.defaultStyle.fontSize = 7.8;
                            doc.styles.tableHeader.fontSize = 8;
                            doc.styles.tableHeader.textTransform = 'uppercase';
                            // doc.styles.title.fontSize = 40;

                            doc.styles.title = {
                                color: '#001BDE',
                                fontSize: 15,
                                alignment: 'center',
                                bold: true,
                            }  
                            // // Remove spaces around page title
                            // doc.content[0].text = doc.content[0].text.trim();
                            // doc.content[1].margin = [0, 40, 0, 0];

                            
                            

                            // Styling the table: create style object
                            var objLayout = {};
                            // Horizontal line thickness
                            objLayout['hLineWidth'] = function(i) { return .2; };
                            // Vertikal line thickness
                            objLayout['vLineWidth'] = function(i) { return 0; };
                            // Horizontal line color
                            objLayout['hLineColor'] = function(i) { return '#9AAAC7'; };
                            // Vertical line color
                            objLayout['vLineColor'] = function(i) { return '#9AAAC7'; };
                            // Left padding of the cell
                            objLayout['paddingLeft'] = function(i) { return 4; };
                            // Right padding of the cell
                            objLayout['paddingRight'] = function(i) { return 4; };
                            // Inject the object in the document
                            doc.content[1].layout = objLayout;
                        }
                    },



                    
                    { extend: 'print', text: '<i class="ri-printer-line me-2 align-middle"></i>Print' ,
                    // autoPrint: false,
                    footer: true,
                        customize: function ( win ) {
                        $(win.document.body)
                        .css( 'font-size', '5px' )
                        .css('background', '#fff')
                        .css('margin-top', '1.7rem')
                        .css('margin-left', '1.5rem')
                        .css('margin-right', '1.5rem')

                        $(win.document.body).find('h1')
                            .css('font-size', '1.2rem')
                            .css('font-weight', '900')
                            .css('margin-bottom', '1.3rem')
                            .addClass('h1-style')

                        
                        
                        // HEADER
                        $(win.document.body).prepend(`
                        <div class="col rep-header">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col">
                                    <img src="https://i.pinimg.com/originals/aa/58/37/aa583766a0d79119b66a87db5b2b8183.png" alt="Scoops 4 U Logo">
                                    <h1 class="mt-2 mb-4">SCOOPS 4 U</h1>
                                </div>
                                
                                <div class="col scoops">
                                    <h3 class="w-75 mb-0">#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3 class="mb-0">scoops4uteresa@gmail.com</h3>
                                    <h3 class="">09364671062</h3>
                                    <!-- <h3><span><i class="ri-store-fill"></i>&nbsp; </span>#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3><span><i class="ri-mail-fill"></i>&nbsp; </span>scoops4uteresa@gmail.com</h3>
                                    <h3><span><i class="ri-contacts-fill"></i>&nbsp; </span>09364671062</h3> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <hr>
                        </div>


                        `);

                        

                        

                        $(win.document.body).find( 'table' )
                            .addClass( 'compact' )
                            .removeClass('table-hover')
                            .css( 'font-size', '3px' );

                        $(win.document.body).find( '.rep-header' )
                            .addClass( 'printable-area' )
                        }
                    },

                        
                ]
            }
        ],
        

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

        order: [] 
    });


    // for row numbers
    tableRepUs.on('order.dt search.dt', function () {
        let i = 1;

        tableRepUs.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableRepUs.search($(this).val()).draw();
    });    

    $('.btn-placeUs').html(tableRepUs.buttons().container());
    // $('.btn-print').html(tableRepUs.button().container());


    $('.filter-checkbox').on('change', function(e){
        var searchTerms = []
        $.each($('.filter-checkbox'), function(i,elem){
        if($(elem).prop('checked')){
        searchTerms.push("^" + $(this).val() + "$")
        }
    })
    tableRepUs.column(4).search(searchTerms.join('|'), true, false, true).draw();
    });

    $('.status-dropdown').on('change', function(e){
        var status = $(this).val();
        $('.status-dropdown').val(status)
        // console.log(status)
        //dataTable.column(6).search('\\s' + status + '\\s', true, false, true).draw();
        // tableRepUs.column(3).search(status).draw();
        tableRepUs.column(3).search('^' + status, true, false).draw();

    })










          // for most tables (reports ONLINE SALES)

        var tableRepOS = $('#tableRepOS').DataTable({

            dom: 'lBfrtip',
            // buttons: [
            //     // 'excel', 
            //     { extend: 'excel', text: '<i class="ri-file-excel-2-fill"></i>' },
            //     { extend: 'print', text: '<i class="ri-printer-fill"></i>' },
            // ],
        buttons: [
            {
                extend: 'collection',
                text: '<i class="ri-save-fill"></i>',
                buttons: [
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel', 

                    exportOptions: {
                        columns: ':not(:eq(0))' // Exclude column with index 2
                    }
                
                    },
                    
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        // orientation: 'landscape',
                        // title: function() {
                        //     return document.title;
                        // },

                        filename: function() {
                            var now = new Date();
                            var options = { hour: '2-digit', minute:'2-digit', hour12: true };
                            var jsTime = now.toLocaleTimeString([], options).replace(/:/g, '-');
                            
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            return 'SCOOPS 4 U' + ' - ' + document.title + '' + ' (' + jsDate + ' '+ jsTime + ')';
                        },
                        
                        pageSize: {
                            width: 8.5 * 72,  // convert inches to points (1 inch = 72 points)
                            height: 13 * 72
                        },
                        customize: function (doc) {

                            pdfMake.fonts = {
                                Poppins: {
                                        normal: 'Poppins-Light.ttf',
                                        bold: 'Poppins-Bold.ttf',
                                        italics: 'Poppins-Black.ttf',
                                        bolditalics: 'Poppins-Medium.ttf'
                                }
                            };
                            doc.defaultStyle.font = 'Poppins';


                            delete doc.styles.tableBodyOdd.fillColor;
                            doc.content[1].table.body[0].forEach(function(h) {
                                h.fillColor = '#001BDE';
                            });
                            
                            var logo = 'data:image/png;base64,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';

                            // doc['header']=(function() {
                            //     return {
                            //         columns: [
                            //             {
                            //                 image: logo,
                            //                 width: 565,
                            //             },
                            //         ],
                            //         margin: 26
                            //     }
                            // });

                            doc['header'] = function(currentPage, pageCount) {
                                if (currentPage === 1) {
                                    return {
                                        columns: [
                                        {
                                            image: logo,
                                            width: 565,
                                        },
                                        ],
                                        margin: 26,
                                    };
                                    } else {
                                    return null; // return null for all subsequent pages to remove the header
                                    }
                            };
                            
                            var now = new Date();
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            doc['footer']=(function(page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: ['Created on: ', { text: jsDate.toString() }]
                                        },
                                        {
                                            alignment: 'right',
                                            text: ['page ', { text: page.toString() },	' of ',	{ text: pages.toString() }]
                                        }
                                    ],
                                    // margin: [25.4, 14]
                                    margin: [25.4, 1, 25.4, 0]
                                }
                            });


                            

                            doc.content[1].table.widths = 
                                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                doc.defaultStyle.alignment = 'center';
                                doc.styles.tableHeader.alignment = 'center';
                            
                            // doc.setMargins = [900, ];
                            doc.pageMargins = [25.4,25.4,25.4,25.4];
                            // doc.pageMargins = [25.4,25.4,25.4,25.4];
                            doc.defaultStyle.fontSize = 7.8;
                            doc.styles.tableHeader.fontSize = 8;
                            doc.styles.tableHeader.textTransform = 'uppercase';
                            // doc.styles.title.fontSize = 40;

                            doc.styles.title = {
                                color: '#001BDE',
                                fontSize: 15,
                                alignment: 'center',
                                bold: true,
                            }  
                            // // Remove spaces around page title
                            // doc.content[0].text = doc.content[0].text.trim();
                            // doc.content[1].margin = [0, 40, 0, 0];

                            
                            

                            // Styling the table: create style object
                            var objLayout = {};
                            // Horizontal line thickness
                            objLayout['hLineWidth'] = function(i) { return .2; };
                            // Vertikal line thickness
                            objLayout['vLineWidth'] = function(i) { return 0; };
                            // Horizontal line color
                            objLayout['hLineColor'] = function(i) { return '#9AAAC7'; };
                            // Vertical line color
                            objLayout['vLineColor'] = function(i) { return '#9AAAC7'; };
                            // Left padding of the cell
                            objLayout['paddingLeft'] = function(i) { return 4; };
                            // Right padding of the cell
                            objLayout['paddingRight'] = function(i) { return 4; };
                            // Inject the object in the document
                            doc.content[1].layout = objLayout;
                        }
                    },



                    
                    { extend: 'print', text: '<i class="ri-printer-line me-2 align-middle"></i>Print' ,
                    // autoPrint: false,
                    footer: true,
                        customize: function ( win ) {
                        $(win.document.body)
                        .css( 'font-size', '5px' )
                        .css('background', '#fff')
                        .css('margin-top', '1.7rem')
                        .css('margin-left', '1.5rem')
                        .css('margin-right', '1.5rem')

                        $(win.document.body).find('h1')
                            .css('font-size', '1.2rem')
                            .css('font-weight', '900')
                            .css('margin-bottom', '1.3rem')
                            .addClass('h1-style')

                        
                        
                        // HEADER
                        $(win.document.body).prepend(`
                        <div class="col rep-header">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col">
                                    <img src="https://i.pinimg.com/originals/aa/58/37/aa583766a0d79119b66a87db5b2b8183.png" alt="Scoops 4 U Logo">
                                    <h1 class="mt-2 mb-4">SCOOPS 4 U</h1>
                                </div>
                                
                                <div class="col scoops">
                                    <h3 class="w-75 mb-0">#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3 class="mb-0">scoops4uteresa@gmail.com</h3>
                                    <h3 class="">09364671062</h3>
                                    <!-- <h3><span><i class="ri-store-fill"></i>&nbsp; </span>#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3><span><i class="ri-mail-fill"></i>&nbsp; </span>scoops4uteresa@gmail.com</h3>
                                    <h3><span><i class="ri-contacts-fill"></i>&nbsp; </span>09364671062</h3> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <hr>
                        </div>


                        `);

                        

                        

                        $(win.document.body).find( 'table' )
                            .addClass( 'compact' )
                            .removeClass('table-hover')
                            .css( 'font-size', '3px' );

                        $(win.document.body).find( '.rep-header' )
                            .addClass( 'printable-area' )
                        }
                    },

                        
                ]
            }
        ],
    
            "fnDrawCallback": function(oSettings) {
                if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                    $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
                } else {
                    $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
                }
            },
            "lengthChange": true,
    
            initComplete: (settings, json)=>{
                $('.dataTables_length').appendTo('#showEntries');
            },
    
            "oLanguage": {
                // &nbsp; is a blank text ---- used for spacing
                "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
                "oPaginate": {
                    sNext: '<i class="ri-arrow-right-s-line"></i>',
                    sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                    // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                    // sLast: '<i class="ri-arrow-right-s-fill"></i>'
                }
            },
    
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: 0, 
                },
            ],
            // order: [[1, 'asc']],

            order: [] 
            
        });
    
    
        // for row numbers
        tableRepOS.on('order.dt search.dt', function () {
            let i = 1;
    
            tableRepOS.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
                this.data(i++);
            });
        }).draw();
        
    
        // for most tables search bar
        $('#tableM').keyup(function(){
            tableRepOS.search($(this).val()).draw();
        });    
    
        $('.btn-placeOS').html(tableRepOS.buttons().container());
        // $('.btn-print').html(tableRep.button().container());
    
        
    $(".btn-filterOS").click(function() {
  
        // Clear the input values
        $("#minOS, #maxOS").val("");
        
        // set those null aswell
        minDateOS.val(null)
        maxDateOS.val(null)
        
        // search and draw
        // tableRep.search()
        tableRepOS.draw();
      });

        
        var minDateOS, maxDateOS;
     
    // Custom filtering function which will search data in column four between two values
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var minOS = minDateOS.val();
            var maxOS = maxDateOS.val();
            var dateOS = new Date( data[3] );
     
            if (
                ( minOS === null && maxOS === null ) ||
                ( minOS === null && dateOS <= maxOS ) ||
                ( minOS <= dateOS   && maxOS === null ) ||
                ( minOS <= dateOS   && dateOS <= maxOS )
            ) {
                return true;
            }
            return false;
        }
    );
    
     // Create date inputs
        minDateOS = new DateTime($('#minOS'), {
            format: 'MMMM D, YYYY'
        });
        maxDateOS = new DateTime($('#maxOS'), {
            format: 'MMMM D, YYYY'
        });
    
    
        // Refilter the table
        $('#minOS, #maxOS').on('change', function () {
            tableRepOS.draw();
        });
    

    // DELIVERY REP
    var tableDRep = $('#tableDRep').DataTable({

        dom: 'lBfrtip',
        // buttons: [
        //     // 'excel', 
        //     { extend: 'excel', text: '<i class="ri-file-excel-2-fill"></i>' },
        //     { extend: 'print', text: '<i class="ri-printer-fill"></i>' },
        // ],
        buttons: [
            {
                extend: 'collection',
                text: '<i class="ri-save-fill"></i>',
                buttons: [
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel', 

                    exportOptions: {
                        columns: ':not(:eq(0))' // Exclude column with index 2
                    }
                
                    },
                    
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        // orientation: 'landscape',
                        // title: function() {
                        //     return document.title;
                        // },

                        filename: function() {
                            var now = new Date();
                            var options = { hour: '2-digit', minute:'2-digit', hour12: true };
                            var jsTime = now.toLocaleTimeString([], options).replace(/:/g, '-');
                            
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            return 'SCOOPS 4 U' + ' - ' + document.title + '' + ' (' + jsDate + ' '+ jsTime + ')';
                        },
                        
                        pageSize: {
                            width: 8.5 * 72,  // convert inches to points (1 inch = 72 points)
                            height: 13 * 72
                        },
                        customize: function (doc) {

                            pdfMake.fonts = {
                                Poppins: {
                                        normal: 'Poppins-Light.ttf',
                                        bold: 'Poppins-Bold.ttf',
                                        italics: 'Poppins-Black.ttf',
                                        bolditalics: 'Poppins-Medium.ttf'
                                }
                            };
                            doc.defaultStyle.font = 'Poppins';


                            delete doc.styles.tableBodyOdd.fillColor;
                            doc.content[1].table.body[0].forEach(function(h) {
                                h.fillColor = '#001BDE';
                            });
                            
                            var logo = 'data:image/png;base64,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';

                            // doc['header']=(function() {
                            //     return {
                            //         columns: [
                            //             {
                            //                 image: logo,
                            //                 width: 565,
                            //             },
                            //         ],
                            //         margin: 26
                            //     }
                            // });

                            doc['header'] = function(currentPage, pageCount) {
                                if (currentPage === 1) {
                                    return {
                                        columns: [
                                        {
                                            image: logo,
                                            width: 565,
                                        },
                                        ],
                                        margin: 26,
                                    };
                                    } else {
                                    return null; // return null for all subsequent pages to remove the header
                                    }
                            };
                            
                            var now = new Date();
                            var jsDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear();
                            doc['footer']=(function(page, pages) {
                                return {
                                    columns: [
                                        {
                                            alignment: 'left',
                                            text: ['Created on: ', { text: jsDate.toString() }]
                                        },
                                        {
                                            alignment: 'right',
                                            text: ['page ', { text: page.toString() },	' of ',	{ text: pages.toString() }]
                                        }
                                    ],
                                    // margin: [25.4, 14]
                                    margin: [25.4, 1, 25.4, 0]
                                }
                            });


                            

                            doc.content[1].table.widths = 
                                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                doc.defaultStyle.alignment = 'center';
                                doc.styles.tableHeader.alignment = 'center';
                            
                            // doc.setMargins = [900, ];
                            doc.pageMargins = [25.4,25.4,25.4,25.4];
                            // doc.pageMargins = [25.4,25.4,25.4,25.4];
                            doc.defaultStyle.fontSize = 7.8;
                            doc.styles.tableHeader.fontSize = 8;
                            doc.styles.tableHeader.textTransform = 'uppercase';
                            // doc.styles.title.fontSize = 40;

                            doc.styles.title = {
                                color: '#001BDE',
                                fontSize: 15,
                                alignment: 'center',
                                bold: true,
                            }  
                            // // Remove spaces around page title
                            // doc.content[0].text = doc.content[0].text.trim();
                            // doc.content[1].margin = [0, 40, 0, 0];

                            
                            

                            // Styling the table: create style object
                            var objLayout = {};
                            // Horizontal line thickness
                            objLayout['hLineWidth'] = function(i) { return .2; };
                            // Vertikal line thickness
                            objLayout['vLineWidth'] = function(i) { return 0; };
                            // Horizontal line color
                            objLayout['hLineColor'] = function(i) { return '#9AAAC7'; };
                            // Vertical line color
                            objLayout['vLineColor'] = function(i) { return '#9AAAC7'; };
                            // Left padding of the cell
                            objLayout['paddingLeft'] = function(i) { return 4; };
                            // Right padding of the cell
                            objLayout['paddingRight'] = function(i) { return 4; };
                            // Inject the object in the document
                            doc.content[1].layout = objLayout;
                        }
                    },



                    
                    { extend: 'print', text: '<i class="ri-printer-line me-2 align-middle"></i>Print' ,
                    // autoPrint: false,
                    footer: true,
                        customize: function ( win ) {
                        $(win.document.body)
                        .css( 'font-size', '5px' )
                        .css('background', '#fff')
                        .css('margin-top', '1.7rem')
                        .css('margin-left', '1.5rem')
                        .css('margin-right', '1.5rem')

                        $(win.document.body).find('h1')
                            .css('font-size', '1.2rem')
                            .css('font-weight', '900')
                            .css('margin-bottom', '1.3rem')
                            .addClass('h1-style')

                        
                        
                        // HEADER
                        $(win.document.body).prepend(`
                        <div class="col rep-header">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col">
                                    <img src="https://i.pinimg.com/originals/aa/58/37/aa583766a0d79119b66a87db5b2b8183.png" alt="Scoops 4 U Logo">
                                    <h1 class="mt-2 mb-4">SCOOPS 4 U</h1>
                                </div>
                                
                                <div class="col scoops">
                                    <h3 class="w-75 mb-0">#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3 class="mb-0">scoops4uteresa@gmail.com</h3>
                                    <h3 class="">09364671062</h3>
                                    <!-- <h3><span><i class="ri-store-fill"></i>&nbsp; </span>#12 Filipinas Avenue Brgy. Dulumbayan Teresa, Rizal, 1880</h3>
                                    <h3><span><i class="ri-mail-fill"></i>&nbsp; </span>scoops4uteresa@gmail.com</h3>
                                    <h3><span><i class="ri-contacts-fill"></i>&nbsp; </span>09364671062</h3> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <hr>
                        </div>


                        `);

                        

                        

                        $(win.document.body).find( 'table' )
                            .addClass( 'compact' )
                            .removeClass('table-hover')
                            .css( 'font-size', '3px' );

                        $(win.document.body).find( '.rep-header' )
                            .addClass( 'printable-area' )
                        }
                    },

                        
                ]
            }
        ],

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],
        order: [] 
        
    });


    // for row numbers
    tableDRep.on('order.dt search.dt', function () {
        let i = 1;

        tableDRep.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableDRep.search($(this).val()).draw();
    });    

    $('.btn-place1').html(tableDRep.buttons().container());
    // $('.btn-print').html(tableRep.button().container());

    // tableRep.buttons().container().appendTo($('#btnExcel'))

    $(".btn-filterD").click(function() {
  
        // Clear the input values
        $("#minD, #maxD").val("");
        
        // set those null aswell
        minDateD.val(null)
        maxDateD.val(null)
        
        // search and draw
        // tableRep.search()
        tableDRep.draw();
      });

    var minDateD, maxDateD;
 
// Custom filtering function which will search data in column four between two values
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var minD = minDateD.val();
        var maxD = maxDateD.val();
        var dateD = new Date( data[8] );
 
        if (
            ( minD === null && maxD === null ) ||
            ( minD === null && dateD <= maxD ) ||
            ( minD <= dateD   && maxD === null ) ||
            ( minD <= dateD   && dateD <= maxD )
        ) {
            return true;
        }
        return false;
    }
);

 // Create date inputs
    minDateD = new DateTime($('#minD'), {
        format: 'MMMM D, YYYY'
    });
    maxDateD = new DateTime($('#maxD'), {
        format: 'MMMM D, YYYY'
    });

    // Refilter the table
    $('#minD, #maxD').on('change', function () {
        tableDRep.draw();
    });



    // --------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------- start INVENTORY --------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------
    
    // inventory - ADD
    var tableAdd = $('#tableAdd').DataTable({
        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },

        "lengthChange": true,
        "ordering": false,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],
        order: [] 
    });

    // for row numbers
    tableAdd.on('order.dt search.dt', function () {
        let i = 1;

        tableAdd.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableAdd.search($(this).val()).draw();
    });    



    // inventory - VIEW STOCK
    var tableView = $('#tableView').DataTable({
        dom: 'lBfrtip',
        // buttons: [
        //     // 'excel', 
        //     { extend: 'excel', text: '<i class="ri-file-excel-2-fill"></i>' },
        //     { extend: 'print', text: '<i class="ri-printer-fill"></i>' },
        // ],
        buttons: [
            {
                extend: 'collection',
                text: '<i class="ri-save-fill"></i>',
                buttons: [
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel' },
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        // orientation: 'landscape',
                        customize: function (doc) {
                            doc.content[1].table.widths = 
                                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                doc.defaultStyle.alignment = 'center';
                            doc.styles.tableHeader.alignment = 'center';
                            
                        }
                    },
                    { extend: 'print', text: '<i class="ri-printer-line me-2 align-middle"></i>Print' ,
                        customize: function ( win ) {
                            $(win.document.body)
                        .css( 'font-size', '5px' )

                        $(win.document.body).find( 'table' )
                            .addClass( 'compact' )
                            .css( 'font-size', '5px' );
                            }
                        },
                ]
            }
        ],

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.dataTables_length').appendTo('#showEntries');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],
        order: [] 
    });

    // for row numbers
    tableView.on('order.dt search.dt', function () {
        let i = 1;

        tableView.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();

    // for most tables search bar
    $('#tableM').keyup(function(){
        tableView.search($(this).val()).draw();
    });    

    
    $('.btn-placeV').html(tableView.buttons().container());
    // $('.btn-print').html(tableRep.button().container());

    // tableRep.buttons().container().appendTo($('#btnExcel'))

    $(".btn-filterV").click(function() {
  
        // Clear the input values
        $("#minV, #maxV").val("");
        
        // set those null aswell
        minDateV.val(null)
        maxDateV.val(null)
        
        // search and draw
        // tableRep.search()
        tableView.draw();
      });

    var minDateV, maxDateV;
 
    // Custom filtering function which will search data in column four between two values
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var minV = minDateV.val();
            var maxV = maxDateV.val();
            var dateV = new Date( data[4] );
    
            if (
                ( minV === null && maxV === null ) ||
                ( minV === null && dateV <= maxV ) ||
                ( minV <= dateV   && maxV === null ) ||
                ( minV <= dateV   && dateV <= maxV )
            ) {
                return true;
            }
            return false;
        }
    );

    // Create date inputs
        minDateV = new DateTime($('#minV'), {
            format: 'MMMM D, YYYY'
        });
        maxDateV = new DateTime($('#maxV'), {
            format: 'MMMM D, YYYY'
        });

        // Refilter the table
        $('#minV, #maxV').on('change', function () {
            tableView.draw();
        });

    

    // --------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------- end INVENTORY ----------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------
    
    
    
    
    // --------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------- start PRODUCT SETTINGS ----------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------
    
    // FLAVOR
    var tableFlavor = $('#tableFlavor').DataTable({

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.flavor-set .dataTables_length').appendTo('#showEntriesFlavor');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

         // order: [[1, 'asc']],
        order: [] 
    });


    // for row numbers
    tableFlavor.on('order.dt search.dt', function () {
        let i = 1;

        tableFlavor.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableMFlavor').keyup(function(){
        tableFlavor.search($(this).val()).draw();
    });    


    // CATEGORY
    var tableCat = $('#tableCat').DataTable({

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.category-set .dataTables_length').appendTo('#showEntriesCat');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

         // order: [[1, 'asc']],
        order: [] 
    });


    // for row numbers
    tableCat.on('order.dt search.dt', function () {
        let i = 1;

        tableCat.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableMCategory').keyup(function(){
        tableCat.search($(this).val()).draw();
    });    

    // UNIT
    var tableUnit = $('#tableUnit').DataTable({

        "fnDrawCallback": function(oSettings) {
            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
            } else {
                $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
            }
        },
        "lengthChange": true,

        initComplete: (settings, json)=>{
            $('.unit-set .dataTables_length').appendTo('#showEntriesUnit');
        },

        "oLanguage": {
            // &nbsp; is a blank text ---- used for spacing
            "sLengthMenu": "_MENU_ &nbsp;&nbsp;Entries per page",
            "oPaginate": {
                sNext: '<i class="ri-arrow-right-s-line"></i>',
                sPrevious: '<i class="ri-arrow-left-s-line"></i>',
                // sFirst: '<i class="ri-arrow-left-s-fill"></i>',
                // sLast: '<i class="ri-arrow-right-s-fill"></i>'
            }
        },

        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0, 
            },
        ],
        // order: [[1, 'asc']],

         // order: [[1, 'asc']],
        order: [] 
    });


    // for row numbers
    tableUnit.on('order.dt search.dt', function () {
        let i = 1;

        tableUnit.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();
    

    // for most tables search bar
    $('#tableMUnit').keyup(function(){
        tableUnit.search($(this).val()).draw();
    });    
    
    
    
    
    
    
    
    // --------------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------- end PRODUCT SETTINGS ----------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------------------------------

});


















