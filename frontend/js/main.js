requirejs.config({
    appDir: "../",
    baseUrl: "lib",
    paths: {
        //'text': 'require/text',
        //'durandal': 'durandal/js',
        //'plugins': 'durandal/js/plugins',
        //'transitions': 'durandal/js/transitions',
        //'knockout': '//knockoutjs.com/downloads/knockout-3.3.0',
        
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery',
        'jquery-ui': '//code.jquery.com/ui/1.11.4/jquery-ui',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap',
        
        //'datatables': 'https://cdn.datatables.net/s/bs/dt-1.10.10,cr-1.3.0,rr-1.1.0,sc-1.4.0,se-1.1.0/datatables',
        
        //'datatables' : 'DataTables/datatables',
        //'datatables.net' : 'DataTables/DataTables-1.10.10/js/jquery.dataTables',
        'datatables.net-bs' : 'DataTables/DataTables-1.10.10/js/dataTables.bootstrap',
        
        //STACKOVERFLOW
        'datatables.net' : 'DataTables/DataTables-1.10.10/js/jquery.dataTables',
        'datatables' : 'DataTables/DataTables-1.10.10/js/dataTables.bootstrap',
        
        
        'datatables.net-autofill' : 'DataTables/AutoFill-2.1.0/js/dataTables.autoFill',
        'datatables.net-editor' : "DataTables/Editor-1.5.2/js/dataTables.editor",
        'datatables-editor-bootstrap' : "DataTables/Editor-1.5.2/js/editor.bootstrap",
        //'datatables.net-buttons' : 'DataTables/Buttons-1.1.0/js/dataTables.buttons',
        'datatables.net-buttons' : 'DataTables/Buttons-1.1.0/js/buttons.bootstrap',
        
        //'datatables.net-buttons-bs' : 'DataTables/Buttons-1.1.0/js/buttons.bootstrap',
        'datatables.net-colreorder' : "DataTables/ColReorder-1.3.0/js/dataTables.colReorder",
        'datatables.net-rowreorder' : "DataTables/RowReorder-1.1.0/js/dataTables.rowReorder",
        'datatables.net-scroller' : "DataTables/Scroller-1.4.0/js/dataTables.scroller",
        'datatables.net-select' : "DataTables/Select-1.1.0/js/dataTables.select",
        
        
        
        
        'slick': '//cdn.jsdelivr.net/jquery.slick/1.5.7/slick.min',
        'prettyprint': 'prettyprint.js?a=b',
        'tabslideout': 'tabslideout.1.3.js?a=b',
        //'sugar': '//sugarjs.com/release/current/sugar.min',
        'viewObject': '../js/view',
        'controllerObject': '../js/controller',
        'controllerNavigationObject': '../js/controllerNavigation',
        'controllerTableObject': '../js/controllerTable',
        'handler': '../js/handler',
        'utils': '../js/utils',
        'script': '../js/script',
        'viewTab': '../js/viewTab',
        'viewTabStep': '../js/viewTabStep'
    },
    shim: {
        'jquery' : {
            deps: [],
            exports: '$'
        },
        'bootstrap' : {
            deps: ['jquery']
        },
        'datatables' : {
           deps: ['jquery','bootstrap','datatables.net-colreorder','datatables.net-rowreorder','datatables.net-scroller','datatables.net-select']  
        },
        'datatables.net-editor' : {
            deps: ['jquery','bootstrap','datatables',],//,'datatables-editor-bootstrap','datatables.net-buttons','datatables.net-editor'
        },
        /*'datatables.net' : {
            deps: [ 'jquery', 'datatables' ],
        },
        'datatables.net-bs' : {
            deps: [ 'datatables.net' ],
        },
        'datatables.net-editor' : {
            deps: [ 'datatables.net-bs', 'datatables.net-buttons', 'datatables-buttons-bootstrap', 'datatables-colreorder', 'datatables-rowreorder', 'datatables-scroller', 'datatables-select'],
        },
        'datatables-editor-bootstrap' : {
            deps: [ 'datatables.net-editor' ],
        },*/
        'tabslideout': {
            deps: []
        },
        'jquery-ui': {
            deps: []
        },
        'controllerObject': {
            deps: ['viewObject','utils','datatables.net-editor'],
            exports: 'controllerObject'
        },
        'controllerNavigationObject': {
            deps: ['jquery','utils'],
            exports: 'controllerNavigationObject'
        },
        'controllerTableObject': {
            deps: ['jquery','utils'],
            exports: 'controllerTableObject'
        },
        'viewObject': {
            deps: ['jquery-ui','tabslideout','slick','utils','viewTab'],
            exports: 'viewObject'
        },
        'viewTab': {
            deps: ['jquery-ui','tabslideout','slick','utils','viewTabStep'],
            exports: 'viewTabObject'
        },
        'viewTabStep': {
            deps: ['jquery-ui','tabslideout','slick','utils'],
            exports: 'viewStepObject'
        }
    }
});

/* 
define(function (require) {
   var system = require('durandal/system'),
       app = require('durandal/app');
 
   system.debug(true);
 
   app.title = 'Durandal Starter Kit';
 
   app.configurePlugins({
     router:true,
     dialog: true
   });
 
   app.start().then(function() {
     app.setRoot('shell');
   });
});
*/

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['script']);