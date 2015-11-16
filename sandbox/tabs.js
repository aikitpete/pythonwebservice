define(['jquery'], function($) {
    var tabs = {
        switchTab: function(tab) {
            console.log("switch tab");
            var $tabs = $("#tabs").tabs();
            $tabs.tabs("option", "active", tab);
        }
    }
    console.log("tabs created");
    return tabs;
});