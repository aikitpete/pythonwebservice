define(['jquery', 'viewObject', 'utils','controllerTableObject','controllerNavigationObject'], function($, viewObject, utils, controllerTableObject, controllerNavigationObject) {
    //,colreorder,rowreorder,scroller,select
    //,'datatables.net-colreorder','datatables.net-rowreorder','datatables.net-scroller','datatables.net-select'

    //$(function() {
    console.log("Start initializing controller");

    $.fn.exists = function() {
        return this.length !== 0;
    }

    var controllerObject = {
        updateEvent: function(event) {
            console.log("controllerObject: navigateTo(): After update logic", event, event["data"]["updateScreen"]);
            
            event = controllerObject.updateLogic(event);

            event = controllerObject.updateScreen(event);
            event = controllerObject.updateTab(event);
            event = controllerObject.updateStep(event);

            viewObject.performUpdate(event, controllerObject.updateBindings,controllerTableObject);

            controllerObject.saveState(event);
        },
        updateLogic: function(event) {
            console.log("controlObject: updateLogic(event): start", event);
            if (event.data.screen == "workflow") {
                if (event.data.advance == true) {
                    controllerNavigationObject.advanceStep();
                }
                if (controllerObject.currentTab=="validate") {
                    controllerObject.loadTable(controllerObject.sampledataURL, event);
                } else if (controllerObject.currentTab=="organize") {
                    controllerObject.loadTable(controllerObject.simpledataURL, event);
                }
            }
            else if (event.data.screen == "welcome") {

            }
            else if (event.data.screen == "marketplace") {

            }
            console.log("controlObject: updateLogic(event): end", event);
            return event;
        },
        updateScreen: function(event) {
            console.log("controllerObject: updateScreen(event): start", event);
            if (event["data"]["screen"] == "workflow") {
                event["data"]["title"] = "My data";
                controllerObject.currentTabs = controllerObject.workflowTabs;
            }
            else if (event["data"]["screen"] == "welcome") {
                event["data"]["title"] = "Welcome";
                controllerObject.currentTabs = controllerObject.welcomeTabs;
            }
            else if (event["data"]["screen"] == "marketplace") {
                event["data"]["title"] = "Data market";
                controllerObject.currentTabs = controllerObject.marketplaceTabs;
            }
            console.log("controllerObject: updateScreen(event): (this.currentScreen != event.data.screen)", this.currentScreen, event.data.screen);
            if (this.currentScreen != event.data.screen) {
                console.log("controllerObject: updateScreen(event): (this.currentScreen != event.data.screen) true");
                event["data"]["updateScreen"] = true;
                controllerObject.allowedTabs = controllerObject.currentTabs.length;
            }
            else {
                console.log("controllerObject: updateScreen(event): (this.currentScreen != event.data.screen) false");
                event["data"]["updateScreen"] = false;
            }
            console.log("controllerObject: updateScreen(param): end", event);
            return event;
        },
        updateTab: function(event) {
            console.log("controllerObject: updateTab(event): start", event, event["data"]["updateScreen"]);
            if (typeof event["data"]["tab"] != 'undefined') {
                return event;
            }
            console.log("controllerObject: updateTab(event): event[data][updateScreen]", event["data"]["updateScreen"]);
            if (event["data"]["updateScreen"] == true) {
                
                if (event["data"]["screen"] == "workflow") {

                    event["data"]["tab"] = "import";
                }
                else if (event["data"]["screen"] == "welcome") {
                    //event["data"]["disabledTabs"] = [];
                    event["data"]["tab"] = "welcome";
                }
                else if (event["data"]["screen"] == "marketplace") {
                    //event["data"]["disabledTabs"] = [];
                    event["data"]["tab"] = "furniture";
                }
            } else {
                
                console.log("controllerObject: updateTab(event): event[data][tab]", controllerObject.currentTab);
                event["data"]["tab"] = controllerObject.currentTab;
            }
            if (event.data.tab == "organize") {
                controllerTableObject.loadTable(controllerTableObject.sampledataURL);
            } else if (event.data.tab == "validate") {
                controllerTableObject.loadTable(controllerTableObject.simpledataURL);
            }
            event["data"]["disabledTabs"] = controllerObject.currentTabs.slice(controllerObject.allowedTabs, controllerObject.currentTabs.length - 1);
            
            //if (this.currentTab!=event.data.tab) {
            event["data"]["updateTab"] = true;
            //} else {
            //    event["data"]["updateTab"] = false;
            //}
            console.log("controllerObject: updateTab(event): end", event);
            return event;
        },
        updateStep: function(event) {
            console.log("controllerObject: updateStep(param): start", event);
            if (event["data"]["screen"] == "workflow") {
                event["data"]["step"] = 0;
            }
            else if (event["data"]["screen"] == "welcome") {
                event["data"]["step"] = null;
            }
            else if (event["data"]["screen"] == "marketplace") {
                event["data"]["step"] = null;
            }
            //if (this.currentStep!=event.data.step) {
            event["data"]["updateStep"] = true;
            //} else {
            //    event["data"]["updateStep"] = false;
            //}
            console.log("controllerObject: updateStep(event): end", event);
            return event;
        },
        updateBindings: function(event) {
            if (event.data.screen == "workflow" && event.data.tab == "import") {
                console.log("controllerObject: updateBindings(event): dbTable");
                if ($('#dbTable').length == 0) {
                    console.error("dbTable does not exist");
                }
                $('#dbTable').on("click", {
                    screen: "workflow",
                    tab: "validate",
                    allowed: true,
                    disabledTabs: ["organize", "preview", "export"],
                    updateTab: true,
                    advance: true,
                }, controllerObject.navigateTo);
            }
        },
        saveState: function(event) {
            console.log("controllerObject: saveState(event): start", event);
            this.currentScreen = event.data.screen;
            this.currentTab = event.data.tab;
            this.currentStep = event.data.step;
            console.log("controllerObject: saveState(event): end", event);
        },
        nextStep: function() {
            controllerNavigationObject.nextStep();
        },
        previousStep: function() {
            controllerNavigationObject.previousStep();
        },
        advanceStep: function() {
            controllerNavigationObject.advanceStep();
        },
        navigateTo: function(screen) {
            controllerNavigationObject.navigateTo(screen);
        }
    }
    var event = {};
    event["data"] = {};
    event["data"]["screen"] = "welcome";
    event["data"]["initial"] = true;
    event["data"]["first"] = true;
    controllerObject.updateEvent();
    console.log("Controller: controllerObject initialized");
    return controllerObject;
    //});
});