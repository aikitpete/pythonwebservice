requirejs.config({
    baseUrl: '.',
    paths: {
        'durandal/app': 'lib/Durandal/js/app',
        'durandal/system': 'lib/Durandal/js/system',
        durandal : 'lib/Durandal/js',
        plugins : 'lib/Durandal/js/plugins',
        transitions : 'lib/Durandal/js/transitions',
        knockout: 'lib/knockout-3.4.0',
        jquery: 'https://code.jquery.com/jquery-1.11.3.min',
        req: 'https://requirejs.org/docs/release/2.1.21/minified/require',
        shell: 'app/shell',
        text: 'lib/require/text',
        'durandal/composition': 'lib/Durandal/js/composition', 
        'durandal/activator': 'lib/Durandal/js/activator', 
        'durandal/viewEngine': 'lib/Durandal/js/viewEngine',
        'plugins/router': 'lib/Durandal/js/plugins/router',
        'durandal/events': 'lib/Durandal/js/events', 
        'plugins/history': 'lib/Durandal/js/plugins/history',
        'plugins/http': 'lib/Durandal/js/plugins/http',
        'plugins/http': 'lib/Durandal/js/plugins/dialog',
        
        'durandal/viewEngine': 'lib/Durandal/js/viewEngine',
        'transitions/entrance': 'lib/Durandal/js/transitions/entrance',
        'bootstrap' :  '//netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
        
        'slick': '//cdn.jsdelivr.net/jquery.slick/1.5.7/slick.min',
        'prettyprint': 'lib/prettyprint.js?a=b',
        'tabslideout': 'lib/tabslideout.1.3.js?a=b',
        'jquery-ui': 'lib/jquery-ui.js?a=b',
        'utils': 'app/js/utils',
        'columnsModal': 'app/widgets/selectcolumns',
        'testsModal': 'app/widgets/selecttests',
        
        //'datatables': 'https://cdn.datatables.net/s/bs/dt-1.10.10,cr-1.3.0,rr-1.1.0,sc-1.4.0,se-1.1.0/datatables',
        
        //'datatables' : 'lib/DataTables/datatables',
        //'datatables.net' : 'lib/DataTables/DataTables-1.10.10/js/jquery.dataTables',
        'datatables.net-bs' : 'lib/DataTables/DataTables-1.10.10/js/dataTables.bootstrap',
        
        //STACKOVERFLOW
        'datatables.net' : 'lib/DataTables/DataTables-1.10.10/js/jquery.dataTables',
        'datatables' : 'lib/DataTables/DataTables-1.10.10/js/dataTables.bootstrap',
        
        
        'datatables.net-autofill' : 'lib/DataTables/AutoFill-2.1.0/js/dataTables.autoFill',
        'datatables.net-editor' : "lib/DataTables/Editor-1.5.2/js/dataTables.editor",
        'datatables-editor-bootstrap' : "lib/DataTables/Editor-1.5.2/js/editor.bootstrap",
        //'datatables.net-buttons' : 'lib/DataTables/Buttons-1.1.0/js/dataTables.buttons',
        'datatables.net-buttons' : 'lib/DataTables/Buttons-1.1.0/js/buttons.bootstrap',
        
        //'datatables.net-buttons-bs' : 'lib/DataTables/Buttons-1.1.0/js/buttons.bootstrap',
        'datatables.net-colreorder' : "lib/DataTables/ColReorder-1.3.0/js/dataTables.colReorder",
        'datatables.net-rowreorder' : "lib/DataTables/RowReorder-1.1.0/js/dataTables.rowReorder",
        'datatables.net-scroller' : "lib/DataTables/Scroller-1.4.0/js/dataTables.scroller",
        'datatables.net-select' : "lib/DataTables/Select-1.1.0/js/dataTables.select",
        
        'viewTabStep': 'app/js/viewTabStep',
        'controllerTable': 'app/js/controllerTable'
    },
    shim: {
        'jquery' : {
            deps: [],
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'durandal/app': {
            deps: ['bootstrap']
        },
        
        'datatables' : {
           deps: ['jquery','bootstrap','datatables.net-colreorder','datatables.net-rowreorder','datatables.net-scroller','datatables.net-select']  
        },
        'datatables.net-editor' : {
            deps: ['jquery','bootstrap','datatables',],//,'datatables-editor-bootstrap','datatables.net-buttons','datatables.net-editor'
        },
        'tabslideout': {
            deps: ['jquery','bootstrap']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'viewTabStep': {
            deps: ['jquery-ui','tabslideout','slick','utils'],
            exports: 'viewStepObject'
        },
    }
});

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