define(['vTab'], function(vTab) {
    "use strict";

    //$(function() {
    console.log("Start initializing view");
    console.log("0");
    console.log("viewTab test", vTab === undefined);

    jQuery.fn.visible = function() {
        return this.css('visibility', 'visible');
    };

    jQuery.fn.invisible = function() {
        return this.css('visibility', 'hidden');
    };

    var viewObject = {
        currentScreen: null,
        initializeUI: function(params) {
            var tab = params.data['tab'];
            var step = params.data['step'];
            var initial = params.data['initial'];
            var screen = params.data['screen'];
            var disabledTabs = params.data['disabledTabs'];
            var tabController = params.data['tabController'];
            console.log("ViewObject: Initializing step:", tab, step, initial, screen, disabledTabs, tabController);

            if (initial) {

                $('#tabs').tabs({
                    disabled: disabledTabs
                });
                $('input:text, input:password, input[type=submit], button')
                    .button()
                    .css({
                        'font': 'inherit',
                        'color': 'inherit',
                        'text-align': 'left',
                        'outline': 'none',
                        'cursor': 'text'
                    });
                var $tabs = $('#tabs');
                $tabs.tabs();
                console.log("viewObject: initializeUI: #single-item test", $('#single-item').length);
                if (screen = "Welcome") {
                    $('#single-item').slick({
                        autoplaySpeed: 1000,
                    });
                } else if (screen=="Workflow" && tab==0) {
                    $('.loadanimation').clone().appendTo('#tabs-1-right');
                    $('#tabs-1-right .loadanimation').visible();
                } else if (screen=="Workflow" && tab==1) {
                    $('.loadanimation').clone().appendTo('#tabs-2');
                    $('#tabs-2 .loadanimation').visible();
                }
                $('html').visible();
            }

            console.log("1");
            console.log("viewTab test", vTab === undefined);
            console.log("2");
            console.log("tabController test", tabController === undefined);

            //viewTab.switchTab(0,0);  
            //this.viewTabObject.switchTab(tab,step);  
            vTab.switchTab(tab, step);
            //switchTab.call(tab,step);
            //tabController.switchTab(tab,step);
        },
        switchScreenCallback: function(params) {
            console.log("ViewObject: SwitchScreenCallback", params);
            viewObject.initializeUI(params);
        },
        switchScreen: function(event) {
            if (event.data.screen == this.currentScreen) {
                return;
            }
            console.log("view: switchScreen", event);
            $('html').invisible();
            $('#maincontainer').load(event.data.screen + '.html');
            $('#mainheader h2').html(event.data.screen);
            callWhenReady('#' + event.data.screen, viewObject.switchScreenCallback, viewObject, event);
            this.currentScreen = event.data.screen;
        },
        initialize: function() {

            $("#previous").button();
            $("#next").button();
            var event = {};
            event["data"] = {};
            event["data"]["screen"] = "Welcome";
            event["data"]["visibleTabs"] = [0];
            event["data"]["step"] = null;
            event["data"]["tab"] = 0;
            event["data"]["initial"] = true;
            event["data"]["tabController"] = vTab;
            viewObject.switchScreen(event);
            $('.slide-out-div').tabSlideOut({
                tabHandle: '.handle', //class of the element that will become your tab
                pathToTabImage: 'imgs/contact_tab.gif', //path to the image for the tab //Optionally can be set using css
                imageHeight: '122px', //height of tab image           //Optionally can be set using css
                imageWidth: '40px', //width of tab image            //Optionally can be set using css
                tabLocation: 'right', //side of screen where tab lives, top, right, bottom, or left
                speed: 300, //speed of animation
                action: 'click', //options: 'click' or 'hover', action to trigger animation
                topPos: '250px', //position from the top/ use if tabLocation is left or right
                rightPos: '20px', //position from left/ use if tabLocation is bottom or top
                fixedPosition: true //options: true makes it stick(fixed position) on scroll
            });
        }
    }

    viewObject.initialize();
    console.log("View: viewObject initialized");
    return viewObject;
    //});
});