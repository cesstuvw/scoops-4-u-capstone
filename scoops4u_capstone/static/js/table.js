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

    // Hide pending order
    if ($("#tableOrder > tbody > tr").length == null || $("#tableOrder > tbody > tr").length == 0){
        $("#tableOrder").addClass("d-none");
        $("#ordersID").addClass("d-none");
        $(".empty-screen").removeClass("d-none");
        
    }
    else{
        $(".empty-screen").addClass("d-none");
        $("#tableOrder").removeClass("d-none");
        $("#ordersID").removeClass("d-none");
    };


    // Hide user table if empty
    if ($("#tableMain > tbody > tr").length == null || $("#tableMain > tbody > tr").length == 0){
        $("#tableMain").addClass("d-none");
        $("#resID").addClass("d-none");
        $(".empty-screen1").removeClass("d-none");
        
    }
    else{
        $(".empty-screen1").addClass("d-none");
        $("#tableMain").removeClass("d-none");
        $("#resID").removeClass("d-none");
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
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel' },
                    
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        orientation: 'landscape',
                        customize: function (doc) {
                            doc.content[1].table.widths = 
                                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                                doc.defaultStyle.alignment = 'center';
                            doc.styles.tableHeader.alignment = 'center';
                            
                            doc.pageMargins = [10,10,10,10];
                            doc.defaultStyle.fontSize = 8;
                            doc.styles.tableHeader.fontSize = 7;
                            doc.styles.title.fontSize = 9;
                            // Remove spaces around page title
                            doc.content[0].text = doc.content[0].text.trim();
                            doc['footer']=(function(page, pages) {
                                return {
                                    columns: [
                                        'This is your left footer column',
                                        {
                                            // This is the right column
                                            alignment: 'right',
                                            text: ['page ', { text: page.toString() },  ' of ', { text: pages.toString() }]
                                        }
                                    ],
                                    margin: [10, 0]
                                }
                            });

                            // Styling the table: create style object
                            var objLayout = {};
                            // Horizontal line thickness
                            objLayout['hLineWidth'] = function(i) { return .5; };
                            // Vertikal line thickness
                            objLayout['vLineWidth'] = function(i) { return .5; };
                            // Horizontal line color
                            objLayout['hLineColor'] = function(i) { return '#aaa'; };
                            // Vertical line color
                            objLayout['vLineColor'] = function(i) { return '#aaa'; };
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

                        
                        

                        <div class="col rep-footer w-100">
                            <div class="row">
                                <div class="col text-start">
                                    <p>&copy; 2023 SCOOPS 4 U</p>
                                </div>
                                <div class="col text-end pe-5">
                                    <p>Teresa, Rizal</p>
                                </div>
                            </div>
                        </div>
                        `);

                        

                        

                        $(win.document.body).find( 'table' )
                            .addClass( 'compact' )
                            .removeClass('table-hover')
                            // .css( 'font-size', '5px' );

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
            ( min <= date   && max === null ) ||
            ( min <= date   && date <= max )
        ) {
            return true;
        }
        return false;
    }
);

 // Create date inputs
    minDate = new DateTime($('#min'), {
        format: 'MMMM D, YYYY'
    });
    maxDate = new DateTime($('#max'), {
        format: 'MMMM D, YYYY'
    });

    // Refilter the table
    $('#min, #max').on('change', function () {
        tableRep.draw();
    });




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
                    { extend: 'excel', text: '<i class="ri-file-excel-2-line me-2 align-middle"></i>Excel' },
                    { extend: 'pdf', 
                        text: '<i class="ri-file-pdf-line me-2 align-middle"></i>PDF',
                        orientation: 'landscape',
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


















