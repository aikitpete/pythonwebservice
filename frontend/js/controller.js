define(['jquery','viewObject','utils'], 
function($,viewObject,utils) {
    //,colreorder,rowreorder,scroller,select
    //,'datatables.net-colreorder','datatables.net-rowreorder','datatables.net-scroller','datatables.net-select'
    
    //$(function() {
        console.log("Start initializing controller");

        $.fn.exists = function () {
            return this.length !== 0;
        }

        var controllerObject = {
            currentScreen: null,
            workflowStep: 0,
            minTabs: 0,
            maxTabs: 3,
            currentTab: 0,
            activeTab: 0,
            allowedTabs: 0,
            initialized: false,

            previousStep: function() {
                console.log("previous step");
                if (controllerObject.currentTab == controllerObject.minTabs) {
                    return;
                }
                controllerObject.currentTab--;
                $('#tabs').tabs("option", "active", controllerObject.currentTab);
            },
            nextStep: function() {

                console.log("next step");
                if (controllerObject.currentTab == controllerObject.maxTabs) {
                    return;
                }
                if (controllerObject.currentTab == controllerObject.allowedTabs) {
                    return;
                }
                controllerObject.currentTab++;
                if (controllerObject.currentTab > controllerObject.activeTab) {
                    controllerObject.activeTab = controllerObject.currentTab;
                }
                controllerObject.allowedTabs++;
                if (controllerObject.currentTab == 0) {
                    var event = {};
                    event["data"] = {};
                    event["data"]["screen"] = "workflow";
                    event["data"]["title"] = "My data";
                    event["data"]["disabledTabs"] = [2,3];
                    event["data"]["step"] = null;
                    event["data"]["tab"] = 1;
                    event["data"]["initial"] = false;
                    viewObject.initializeUI(event);
                    }
                else if (controllerObject.currentTab == 1) {
                    var event = {};
                    event["data"] = {};
                    event["data"]["screen"] = "workflow";
                    event["data"]["title"] = "My data";
                    event["data"]["disabledTabs"] = [2,3];
                    event["data"]["step"] = null;
                    event["data"]["tab"] = 2;
                    event["data"]["initial"] = false;
                    viewObject.initializeUI(event);
                    console.log("nextStep(): Loading table", controllerObject.currentTab);
                    /*var editor = new $.fn.dataTable.Editor({
                        table: "#example",
                        fields: [{
                            label: "Doc.",
                            name: "Doc."
                        }, {
                            label: "Order no.",
                            name: "Order no."
                        }, {
                            label: "Nothing",
                            name: "Nothing"
                        }]
                    });*/
                    console.log("nextStep(): Editor loaded", controllerObject.currentTab);
                    $.ajax({
                        //url: 'http://www.petegerhat.com:8000/simpledata.json',
                        url: 'https://www.petegerhat.com:8000/sampledata.json',
                        type: 'GET',
                        contentType: "application/json",
                        dataType: "jsonp",
                        success: function(json) {
                            console.log("SUCCESS:", json);
                            json.data = sanitizeData(json.data);
                            json.columns = sanitizeColumns(json.columns);
                            $('#loadanimation').hide();
                            $('#example').DataTable({
                                data: json.data,
                                columns: json.columns,
                                dom: 'Bfrpit',
                                /*buttons: [{
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
                                ],*/
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
                        },
                        error: function(exception, textStatus, errorThrown) {
                            //alert("ERROR:" + JSON.stringify(exception) + " STATUS:" + textStatus + " ERRORTHROW:" + errorThrown);
                            console.error("ERROR:", exception, textStatus + ";" + errorThrown);
                            //$('#debugconsole').append("<h1>Response Error</h1>");
                            //$('#debugconsole').append(prettyPrint(exception));
                        },
                    });

                }
                else if (controllerObject.currentTab == 2) {
                    var event = {};
                    event["data"] = {};
                    event["data"]["screen"] = "workflow";
                    event["data"]["title"] = "My data";
                    event["data"]["visibleTabs"] = [0];
                    event["data"]["step"] = 2;
                    viewObject.initializeUI(event);

                    console.log("nextStep(): Loading table", controllerObject.currentTab);
                    $('#example').DataTable().destroy();
                    $('#example').empty();
                    /*var editor = new $.fn.dataTable.Editor({
                        //ajax: "../php/join.php",
                        table: "#example",
                        fields: [{
                            label: "Supplier:",
                            name: "supplier"
                        }, {
                            label: "Color:",
                            name: "color"
                        }]
                    });*/
                    console.log("nextStep(): Editor loaded", controllerObject.currentTab);
                    $.ajax({
                        url: 'http://www.petegerhat.com:8000/smalldata.json',
                        type: 'GET',
                        contentType: "application/json",
                        dataType: "jsonp",
                        success: function(json) {
                            console.log("SUCCESS:", json);
                            json.data = sanitizeData(json.data);
                            json.columns = sanitizeColumns(json.columns);
                            $('#loadanimation').hide();
                            $('#example').DataTable({
                                data: json.data,
                                columns: json.columns,
                                dom: 'Bfrtip',
                                /*buttons: [{
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
                                ],*/
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
                        },
                        error: function(exception, textStatus, errorThrown) {
                            //alert("ERROR:" + JSON.stringify(exception) + " STATUS:" + textStatus + " ERRORTHROW:" + errorThrown);
                            console.error("ERROR:", exception, textStatus + ";" + errorThrown);
                            //$('#debugconsole').append("<h1>Response Error</h1>");
                            //$('#debugconsole').append(prettyPrint(exception));
                        },
                    });
                }
                else if (controllerObject.currentTab == 3) {
                    console.error("Controller: nextStep: No event initialization");
                    viewObject.initializeUI(3);
                    $('#example').DataTable().destroy();
                    $('#example').empty();
                }
                $('#tabs').tabs('enable', controllerObject.currentTab).tabs("option", "active", controllerObject.currentTab);
            },
            nextWorkflowStep: function() {

                console.log("nextWorkflowStep(): IMPORT STEP", controllerObject.workflowStep);

                if (controllerObject.workflowStep == 0) {//REMOVE?
                    //callWhenReady('#dbSelect', function() {
                        console.log("Controller: navigateTo: Create dbselect selectmenuchange event");
                        if ($('#dbSelect').exists()) {
                            $('#dbSelect').on("change",{},controllerObject.dbSelectChanged);
                        } else {
                            console.error('#dbSelect does not exist')
                        }
                        
                    //}, controllerObject, null);
                }
                else if (controllerObject.workflowStep == 1) {
                    //callWhenReady('#dbLogin', function() {
                        console.log("Controller: navigateTo: Create dblogin click event");
                        if (!$('#dbLogin').exists()) {
                            console.error('#dbLogin does not exist')
                        }
                        $('#dbLogin').on("click",{},controllerObject.dbLoginClicked);
                    //}, controllerObject, null);
                }
                else if (controllerObject.workflowStep == 2) {
                    //callWhenReady('#dbTable', function() {
                        console.log("Controller: navigateTo: Create dbtable click event");
                        if (!$('#dbTable').exists()) {
                            console.error('#dbTable does not exist')
                        }
                        $('#dbTable').on("click",{},controllerObject.dbTableClicked);
                    //}, controllerObject, null);
                }
                else if (controllerObject.workflowStep == 3) {
                    controllerObject.allowedTabs++;
                    controllerObject.nextStep();
                }

                controllerObject.workflowStep++;

            },
            navigateTo: function(params) {
                console.log("controllerObject: navigateTo",params);
                var event = {};
                if (params["data"]["screen"]=="workflow") {
                    event["data"] = {};
                    event["data"]["screen"] = "workflow";
                    event["data"]["title"] = "My data";
                    event["data"]["disabledTabs"] = [1,2,3];
                    event["data"]["tab"] = 0;
                    event["data"]["step"] = 0;
                    event["data"]["initial"] = true;
                } else if (params["data"]["screen"]=="welcome") {
                    event["data"] = {};
                    event["data"]["screen"] = "welcome";
                    event["data"]["title"] = "Welcome";
                    event["data"]["disabledTabs"] = [];
                    event["data"]["tab"] = 0;
                    event["data"]["step"] = null;
                    event["data"]["initial"] = true;
                } else if (params["data"]["screen"]=="marketplace") {
                    event["data"] = {};
                    event["data"]["screen"] = "marketplace";
                    event["data"]["title"] = "Data market";
                    event["data"]["disabledTabs"] = [];
                    event["data"]["tab"] = 0;
                    event["data"]["step"] = null;
                    event["data"]["initial"] = true;
                }
                if (this.currentScreen!=event.data.screen) {
                    viewObject.switchScreen(event, controllerObject);
                } else {
                    updateLogic(event);
                }
                
            },
            updateLogic: function(event) {
                console.log("controlObject: updateLogic(event): start",event);
                this.currentScreen=event.data.screen;
                if (this.currentScreen=="workflow") {
                    console.log("controlObject: updateLogic(event): nextWorkflowStep call start");
                    controllerObject.nextWorkflowStep();
                    console.log("controlObject: updateLogic(event): nextWorkflowStep call end");
                } else if (this.currentScreen=="welcome") {
                    if (!this.initialized) {
                        viewObject.initialize();
                        this.initialized=true;
                    }
                } else if (this.currentScreen=="marketplace") {

                }
                console.log("controlObject: updateLogic(event): initializeUI call");
                viewObject.initializeUI(event);
                console.log("controlObject: updateLogic(event): end");
            },
            dbSelectChanged: function() {
                console.log("dbSelect changed");
                var event = {};
                event["data"] = {};
                event["data"]["screen"] = "workflow";
                event["data"]["title"] = "My data";
                event["data"]["disabledTabs"] = [1,2,3];
                event["data"]["step"] = 1;
                event["data"]["tab"] = 0;
                event["data"]["initial"] = false;
                viewObject.initializeUI(event);
                controllerObject.nextWorkflowStep();
            },
            dbLoginClicked: function() {
                var event = {};
                event["data"] = {};
                event["data"]["screen"] = "workflow";
                event["data"]["title"] = "My data";
                event["data"]["disabledTabs"] = [1,2,3];
                event["data"]["step"] = 2;
                event["data"]["tab"] = 0;
                event["data"]["initial"] = false;
                viewObject.initializeUI(event);
                controllerObject.nextWorkflowStep();
            },
            dbTableClicked: function() {
                var event = {};
                event["data"] = {};
                event["data"]["screen"] = "workflow";
                event["data"]["title"] = "My data";
                event["data"]["disabledTabs"] = [2,3];
                event["data"]["tab"] = 1;
                event["data"]["initial"] = false;
                viewObject.initializeUI(event);
                controllerObject.nextWorkflowStep();
            },
        }
        var event = {};
        event["data"] = {};
        event["data"]["screen"] = "welcome";
        controllerObject.navigateTo(event);
        console.log("Controller: controllerObject initialized");
        return controllerObject;
    //});
});