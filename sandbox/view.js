define(['jquery', 'jqueryui', 'tabs'], function($, tabs) {
    console.log("tabs test 1", tabs === undefined); // returns true
    function callWhenReady(selector, callback, scope, params) {
        if ($(selector).closest('body').length) {
            callback.call(scope, params);
        }
        else {
            setTimeout(function() {
                callWhenReady(selector, callback, scope, params);
            }, 1);
        }
    }
    var viewObject = {
        ///*
        switchScreenCallback: function(event) {
            console.log("ViewObject: SwitchScreenCallback", event);
            console.log("tabs test 2", tabs === undefined); // returns true
            console.log("tabs test 3", event.data.tabs === undefined); // returns true
            console.log("tabs: switchTab: pre-test", event.data.tab);
            tabs.switchTab(event.data.tab);
            //event.data.tabs.switchTab(event.data.tab);
        },
        //*/
        switchScreen: function(event) {
            console.log("viewObject: switchScreen",'#' + event.data.screen, viewObject.switchScreenCallback, viewObject, event);
            ///*
            $('#maincontainer').load(event.data.screen + '.html');
            callWhenReady('#' + event.data.screen, viewObject.switchScreenCallback, viewObject, event);
            //*/
        }
    }
    console.log("viewObject created");
    return viewObject;
});