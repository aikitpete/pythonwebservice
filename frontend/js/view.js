define(['jquery', 'bootstrap', 'viewTab'], function($, bootstrap, viewTabObject) {
    //"use strict";

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
        initialized: false,
        table: null,
        callbacks: $.Callbacks(),
        performUpdate: function(event, callback) {
            viewObject.switchScreen(event, callback)
            if (!this.initialized) {
                viewObject.initialize();
                this.initialized = true;
            }
        },
        initializeUI: function(event) {
            var tab = event.data['tab'];
            var step = event.data['step'];
            var initial = event.data['initial'];
            var first = event.data['first'];
            var screen = event.data['screen'];
            var disabledTabs = event.data['disabledTabs'];
            var tabController = event.data['tabController'];
            var tableColumns = event.data['tableColumns'];

            var tableRows = event.data['tableRows'];

            console.log("viewObject: initializeUI(): start", tab, step, initial, screen, disabledTabs, tabController);
            if (viewObject.table != null) {
                viewObject.table.destroy();
                $('#example').empty();
            }

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
                

                console.log("viewObject: initializeUI: #single-item test", $('#single-item').length);
                if (screen == "marketplace") {
                    console.log("viewObject: initializeUI(): initialize marketplace tab");
                    //$('.nav-tabs #furniture').addClass('active');
                }
                else if (screen == "welcome") {
                    //$('#single-item').slick({
                    //    autoplaySpeed: 1000,
                    //});
                    //$('#mainCarousel').carousel({
                    //    interval: 4000
                    //});
                    $(function() {
                        $('.carousel').carousel({
                            interval: 3000
                        });
                        $('.carousel').carousel('cycle');
                    });
                    //$('.nav-tabs #welcome').addClass('active');
                }
                else if (screen == "workflow" && tab == "import") {
                    $('.loadanimation').clone().appendTo('#tabs-1-right');
                    $('#tabs-1-right .loadanimation').visible();
                    //$('.nav-tabs #import').addClass('active');
                    $('#dbSelect').on("change", function() {
                        $('#form1').invisible();
                        $('#form2').invisible();
                        $('#form2').hide("slow");
                        $('#loadanimation').show();
                        setTimeout(
                            function() {
                                $('#loadanimation').hide();
                                $('#form1').show("slow");
                                $('#form1').visible();
                                $('#form2').visible();

                            }, 2000);
                    });
                    $('#dbLogin').on("click", function() {
                        $('#form1').invisible();
                        $('#form2').invisible();
                        $('#form1').hide("slow");
                        $('#loadanimation').show();
                        setTimeout(
                            function() {
                                $('#loadanimation').hide();
                                $('#form2').show("slow");
                                $('#form1').visible();
                                $('#form2').visible();
                            }, 500);
                    });
                }

                console.log("viewObject: initializeUI(): visible start");
                $('html').visible();
                $('#container').visible();


                console.log("viewObject: initializeUI(): visible end");
            }
            else if (screen == "workflow" && tab == "validate") {//????????
                $('.loadanimation').clone().appendTo('#tabs-2');
                $('#tabs-2 .loadanimation').visible();
            }

            if (typeof tableColumns != "undefined" && typeof tableRows != "undefined") {

                $('#loadanimation').hide();
                viewObject.table = $('#example').DataTable({
                    data: tableRows,
                    columns: tableColumns,
                    dom: 'Bfrpit',

                    /*
                    buttons: [{
                            extend: "create",
                            editor: editor
                        }, {
                            extend: "edit",
                            editor: editor
                        }, {
                            extend: "remove",
                            editor: editor
                        //}, {
                        //    extend: 'print',
                        //    exportOptions: {
                        //        columns: ':visible'
                        //    }
                        },
                        'colvis'
                    ],
                    */

                    columnDefs: [{
                        targets: -1,
                        visible: true
                    }],
                    select: true,
                    //autoFill: true,
                    responsive: true,
                    rowReorder: true,
                    colReorder: true,
                    //fixedHeader: true,
                    //fixedColumns: true,
                    scrollY: 680,
                    deferRender: true,
                    scroller: true
                });
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
            if (event["data"]["updateScreen"] == true) {
                console.log("viewObject: switchScreen(): Invisible start");
                $('#container').invisible();
                console.log("viewObject: switchScteen(): Invisible end");
                $('#tabsarea').load(event.data.screen + '.html', function() {
                    $('#mainheader h2').html(event.data.title);
                    $('.nav-tabs').tab('show');
                    $('.nav-tabs > li').removeClass('active');//NOT NEEDED
                    $('#'+event.data.tab).addClass('active');
                    console.log("viewObject: initializeUI(): onclick");
                    $('.nav-tabs > li').on('click', function(e) {
                        $('.nav-tabs > li').removeClass('active');
                        $(e.currentTarget).addClass('active');
                    });
                    viewObject.switchTab(event, callback);
                    console.log("viewObject :switchScreen(event): end", event);
                });
            }
            else {
                $('.nav-tabs > li').removeClass('active');//NOT NEEDED
                $('#'+event.data.tab).addClass('active');
                viewObject.switchTab(event, callback);
            }
            console.log("viewObject: switchScreen(event): start", event);
        },
        switchTab: function(event, callback) {
            console.log("viewObject: switchTab(event): start", event);


            if (event["data"]["updateTab"] == true) {
                $('#form2').invisible();
                $('#maincontainer').invisible();
                $('#container').visible();
                $('#maincontainer').load('tabs/' + event.data.tab + '.html', function() {
                    callback(event);
                    viewObject.switchStep(event);
                });
            }
            else {
                $('#container').visible();
                viewObject.callbacks.controllerNavigationObject.updateBindings(event);
                viewObject.switchStep(event);
            }
            console.log("viewObject: switchTab(event): end", event);
        },
        switchStep: function(event) {
            if (event["data"]["updateStep"] == true) {
                $('#maincontainer').visible();
                viewObject.initializeUI(event);
            }
            else {
                $('#maincontainer').visible();
            }
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