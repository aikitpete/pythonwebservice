define(['jquery', 'bootstrap', 'viewTab'], function($, bootstrap, viewTabObject) {
    "use strict";

    //$(function() {
    console.log("Start initializing view");
    console.log("viewTab test", viewTabObject === undefined);

    $.fn.visible = function() {
        return this.css('visibility', 'visible');
    };

    $.fn.invisible = function() {
        return this.css('visibility', 'hidden');
    };

    var viewObject = {
        initializeUI: function(event) {
            var tab = event.data['tab'];
            var step = event.data['step'];
            var initial = event.data['initial'];
            var screen = event.data['screen'];
            var disabledTabs = event.data['disabledTabs'];
            var tabController = event.data['tabController'];
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
                    //$('#mainCarousel').carousel({
                    //    interval: 4000
                    //});
                    $(function () {
                        $('.carousel').carousel({
                        interval: 3000
                    });
                    $('.carousel').carousel('cycle');
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

            console.log("viewObject: initializeUI(): viewTab test", viewTabObject === undefined);
            console.log("viewObject: initializeUI(): tabController test", tabController === undefined);

            //viewTab.switchTab(0,0);  
            //this.viewTabObject.switchTab(tab,step);  
            viewTabObject.switchTab(tab, step);
            //switchTab.call(tab,step);
            //tabController.switchTab(tab,step);



            console.log("viewObject: initializeUI(): end");
        },
        switchScreen: function(event, callback) {
            console.log("viewObject :switchScreen(event): start", event);
            console.log("viewObject: switchScreen(): Invisible start");
            $('html').invisible();
            console.log("viewObject: switchScteen(): Invisible end");
            $('#maincontainer').load(event.data.screen + '.html', function() {
                if (typeof callback != 'undefined') {
                    callback.updateLogic(event);
                    $('#mainheader h2').html(event.data.title);
                    console.log("viewObject :switchScreen(event): end", event);
                } else {
                    console.error("viewObject: switchScreen: Undefined callback",event.data.screen);
                }
            });
        },
        switchTab: function(event, callback) {
            $('#maincontainer').invisible();
            $('#maincontainer').load('tabs/'+event.data.tab + '.html', function() {
                if (typeof callback != 'undefined') {
                    callback.updateLogic(event);
                } else {
                    console.error("viewObject: switchTab: Undefined callback",event.data.tab);
                }
            });
        },
        switchStep: function(event, callback) {
            initializeUI(event);
        },
        initialize: function() {
            console.log("viewObject: initialize(): start");

            $('#mainmenu .navbar-nav > li').on('click', function(e) {
                $('#mainmenu .navbar-nav > li').removeClass('active');
                $(this).addClass('active');
            });
            
            console.log("viewObject: initialize(): tabslideout initialized");
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
    console.log("View: viewObject initialized");
    return viewObject;
    //});
});