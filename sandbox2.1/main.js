requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        'jquery-ui': '//code.jquery.com/ui/1.11.4/jquery-ui',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',

        //DataTables core
        'datatables' : 'DataTables/datatables',
        'datatables.net' : 'DataTables/DataTables-1.10.10/js/jquery.dataTables',
        'datatables.net-bs' : 'DataTables/DataTables-1.10.10/js/dataTables.bootstrap',

        //Dependencies
        'datatables.net-autofill' : 'DataTables/AutoFill-2.1.0/js/dataTables.autoFill',
        'datatables.net-editor' : "DataTables/Editor-1.5.2/js/dataTables.editor",
        'datatables-editor-bootstrap' : "DataTables/Editor-1.5.2/js/editor.bootstrap",
        'datatables.net-buttons' : 'DataTables/Buttons-1.1.0/js/dataTables.buttons',
        //'datatables.net-buttons' : 'DataTables/Buttons-1.1.0/js/buttons.bootstrap',

        //Extra modules
        'datatables.net-buttons-bs' : 'DataTables/Buttons-1.1.0/js/buttons.bootstrap',
        'datatables.net-colreorder' : "DataTables/ColReorder-1.3.0/js/dataTables.colReorder",
        'datatables.net-rowreorder' : "DataTables/RowReorder-1.1.0/js/dataTables.rowReorder",
        'datatables.net-scroller' : "DataTables/Scroller-1.4.0/js/dataTables.scroller",
        'datatables.net-select' : "DataTables/Select-1.1.0/js/dataTables.select",

        //some modules are still missing from the full package...
    },
    shim: {
        'jquery' : {
            exports : 'jquery'
        },
        'bootstrap' : {
            deps : [ 'jquery' ],
            exports : 'Bootstrap'
        },
        'datatables' : {
            deps: ['jquery','bootstrap']  
        },
        'script': {
            deps: ['jquery','datatables']
        }
    }
});

requirejs(['script']);