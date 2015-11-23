define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'1. Import', moduleId: 'app/home', nav: true },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});