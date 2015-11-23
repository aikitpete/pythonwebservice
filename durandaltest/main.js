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
        'durandal/viewEngine': 'lib/Durandal/js/viewEngine' 
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