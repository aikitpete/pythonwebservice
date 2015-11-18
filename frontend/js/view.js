define(['jquery', 'bootstrap', 'vTab'], function($, bootstrap, vTab) {
    "use strict";

    //$(function() {
    console.log("Start initializing view");
    console.log("0");
    console.log("viewTab test", vTab === undefined);

    $.fn.visible = function() {
        return this.css('visibility', 'visible');
    };

    $.fn.invisible = function() {
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
            console.log("viewObject: initializeUI(): start", tab, step, initial, screen, disabledTabs, tabController);
            console.log("viewObject: initializeUI(): content validations",$('#maincontainer .nav-tabs'), $('#maincontainer .nav-tabs > li'), $('.nav-tabs #furniture'));
            if (initial) {


                $('input:text, input:password, input[type=submit], button')
                    .button()
                    .css({
                        'font': 'inherit',
                        'color': 'inherit',
                        'text-align': 'left',
                        'outline': 'none',
                        'cursor': 'text'
                    });
                //var $tabs = $('#tabs');
                //$tabs.tabs();
                $('#maincontainer .nav-tabs').tab('show');
                $('#maincontainer .nav-tabs > li').on('click', function(e) {
                    console.log("viewObject: initializeUI(): onclick",e,this);
                    $('#maincontainer .nav-tabs > li').removeClass('active');
                    $(e.currentTarget).addClass('active');
                });

                console.log("viewObject: initializeUI: #single-item test", $('#single-item').length);
                if (screen == "marketplace") {
                    console.log("viewObject: initializeUI(): initialize marketplace tab");
                    $('.nav-tabs #furniture').addClass('active');
                } else if (screen == "welcome") {
                    //$('#single-item').slick({
                    //    autoplaySpeed: 1000,
                    //});
                    $('.carousel').carousel({
                        interval: 4000
                    });
                    $('#maincontainer .nav-tabs #welcome').addClass('active');
                }
                else if (screen == "workflow" && tab == 0) {
                    $('.loadanimation').clone().appendTo('#tabs-1-right');
                    $('#tabs-1-right .loadanimation').visible();
                    $('#maincontainer .nav-tabs #import').addClass('active');
                }
                else if (screen == "workflow" && tab == 1) {
                    $('.loadanimation').clone().appendTo('#tabs-2');
                    $('#tabs-2 .loadanimation').visible();
                }
                console.log("viewObject: initializeUI(): visible start");
                $('html').visible();
                console.log("viewObject: initializeUI(): visible end");
            }

            console.log("viewTab test", vTab === undefined);
            console.log("tabController test", tabController === undefined);

            //viewTab.switchTab(0,0);  
            //this.viewTabObject.switchTab(tab,step);  
            vTab.switchTab(tab, step);
            //switchTab.call(tab,step);
            //tabController.switchTab(tab,step);



            console.log("viewObject: initializeUI(): end");
        },
        switchScreenCallback: function(params) {
            console.log("viewObject: switchScreenCallback(): start", params);
            viewObject.initializeUI(params);
        },
        switchScreen: function(event) {
            console.log("viewObject :switchScreen(event): start", event);
            if (event.data.screen == this.currentScreen) {
                return;
            }
            console.log("viewObject: switchScreen(): Invisible start");
            $('html').invisible();
            console.log("viewObject: switchScteen(): Invisible end");
            $('#maincontainer').load(event.data.screen + '.html');
            $('#mainheader h2').html(event.data.title);
            callWhenReady('#' + event.data.screen, viewObject.switchScreenCallback, viewObject, event);
            this.currentScreen = event.data.screen;
            console.log("viewObject :switchScreen(event): end", event);
        },
        initialize: function() {
            console.log("viewObject: initialize(): start");
            //$("#previous").button();
            //$("#next").button();
            var event = {};
            event["data"] = {};
            event["data"]["screen"] = "welcome";
            event["data"]["title"] = "Welcome";
            event["data"]["visibleTabs"] = [0];
            event["data"]["step"] = null;
            event["data"]["tab"] = 0;
            event["data"]["initial"] = true;
            event["data"]["tabController"] = vTab;

            $('#mainmenu .navbar-nav > li').on('click', function(e) {
                $('#mainmenu .navbar-nav > li').removeClass('active');
                $(this).addClass('active');
            });

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
            console.log("viewObject: initialize(): end");
        }
    }

    viewObject.initialize();
    console.log("View: viewObject initialized");
    return viewObject;
    //});
});