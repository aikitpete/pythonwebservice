requirejs.config({
    appDir: "../",
    baseUrl: "lib",
    paths: {
        //'text': 'require/text',
        //'durandal': 'durandal/js',
        //'plugins': 'durandal/js/plugins',
        //'transitions': 'durandal/js/transitions',
        //'knockout': '//knockoutjs.com/downloads/knockout-3.3.0',
        
        //'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery',
        ////'jquery-ui': '//code.jquery.com/ui/1.11.4/jquery-ui',
        //'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap',
        
        ////'slick': '//cdn.jsdelivr.net/jquery.slick/1.5.7/slick.min',
        ////'prettyprint': 'prettyprint.js?a=b',
        ////'tabslideout': 'tabslideout.1.3.js?a=b',
        //'sugar': '//sugarjs.com/release/current/sugar.min',
        'viewObject': '../js/view',
        'controllerObject': '../js/controller',
        'handler': '../js/handler',
        'utils': '../js/utils',
        'script': '../js/script',
        'vTab': '../js/vTab',
        'vStep': '../js/vStep'
    },
    shim: {
       /*'jquery' : {
            deps: [],
            exports: '$'
        },
        'bootstrap' : {
            deps: ['jquery']
        },*/
        'jquery-ui': {
            deps: []
        },
        'controllerObject': {
            deps: ['viewObject','utils'],
            exports: 'controllerObject'
        },
        'viewObject': {
<<<<<<< HEAD
            deps: ['jquery-ui','tabslideout','bootstrap','utils','vTab'],
            exports: 'viewObject'
        },
        'vTab': {
            deps: ['jquery-ui','tabslideout','bootstrap','utils','vStep'],
            exports: 'vTab'
        },
        'vStep': {
            deps: ['jquery-ui','tabslideout','bootstrap','utils'],
=======
            deps: ['utils','vTab'],
            exports: 'viewObject'
        },
        'vTab': {
            deps: ['utils','vStep'],
            exports: 'vTab'
        },
        'vStep': {
            deps: ['utils'],
>>>>>>> origin/master
            exports: 'vStep'
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