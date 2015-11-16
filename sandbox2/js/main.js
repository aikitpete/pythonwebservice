requirejs.config({
    //appDir: "../",
    baseUrl: "lib",
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
        //'datatables': 'https://cdn.datatables.net/s/bs-3.3.5/jszip-2.5.0,pdfmake-0.1.18,dt-1.10.10,af-2.1.0,b-1.1.0,b-colvis-1.1.0,b-flash-1.1.0,b-html5-1.1.0,b-print-1.1.0,cr-1.3.0,fc-3.2.0,fh-3.1.0,kt-2.1.0,r-2.0.0,rr-1.1.0,sc-1.4.0,se-1.1.0/datatables.min',
        //'datatables': 'DataTables/DataTables-1.10.10/js/dataTables.bootstrap',
        'datatables.net': 'DataTables/datatables',
        //'datatables': 'datatables.net',
        //'datatables': 'datatables',
        'script': '../js/script'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'datatables.net': {
    		deps: ['bootstrap','jquery']
        },
        'script': {
            deps: ['jquery','datatables.net']
        }
    }
});

requirejs(['script']);