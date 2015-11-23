define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'sandbox', moduleId: 'app/sandbox/default', nav: true },
                { route: 'import', title:'1. Import', moduleId: 'app/tabs/import', nav: true },
                { route: 'validate', title:'2. Validate', moduleId: 'app/tabs/validate', nav: true },
                { route: 'organize', title:'3. Organize', moduleId: 'app/tabs/organize', nav: true },
                { route: 'preview', title:'4. Preview', moduleId: 'app/tabs/preview', nav: true },
                { route: 'export', title:'5. Export', moduleId: 'app/tabs/export', nav: true },
                { route: 'starterkit', title:'starterkit', moduleId: 'app/samples/starterkit', nav: true },
                { route: 'rainier', title:'rainier', moduleId: 'app/samples/rainier', nav: true },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});