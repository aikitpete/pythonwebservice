requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        'jqueryui': '//code.jquery.com/ui/1.11.4/jquery-ui',
        'viewObject': 'view',
        'script': 'script',
        'tabs': 'tabs',
    },
    shim: {
        jqueryui: {
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        },
        viewObject: {
            deps: ['jquery', 'tabs'],
            exports: 'viewObject'
        },
        tabs: {
            deps: ['jquery', 'jqueryui'],
            exports: 'tabs'
        },
        script: {
            deps: ['viewObject']
        }
    }
});
requirejs(['script']);