define(['jquery', 'viewObject', 'utils', 'controllerTableObject', 'controllerNavigationObject'], function($, viewObject, utils, controllerTableObject, controllerNavigationObject) {
    //,colreorder,rowreorder,scroller,select
    //,'datatables.net-colreorder','datatables.net-rowreorder','datatables.net-scroller','datatables.net-select'

    //$(function() {
    console.log("Start initializing controller");

    $.fn.exists = function() {
        return this.length !== 0;
    }

    var controllerObject = {
        updateEvent: function(event) {
            console.log("controllerObject: navigateTo(): start");

            if (!event) {
                console.log("controller: updateEvent(event): nothing to update");
                return;
            }

            event = controllerObject.updateLogic(event);

            event = controllerObject.updateScreen(event);
            event = controllerObject.updateTab(event);
            event = controllerObject.updateStep(event);

            if (event.data.tab == "organize") {
                controllerTableObject.loadTable(controllerTableObject.simpledataURL, event, controllerObject.updateEventCallback);
            }
            else if (event.data.tab == "validate") {
                controllerTableObject.loadTable(controllerTableObject.sampledataURL, event, controllerObject.updateEventCallback);
            }
            else {
                controllerObject.updateEventCallback(event);
            }

        },
        updateEventCallback: function(event) {
            viewObject.performUpdate(event, controllerObject.updateBindings, controllerTableObject);

            controllerObject.saveState(event);
        },
        updateLogic: function(event) {
            console.log("controlObject: updateLogic(event): start", event);
            if (event.data.screen == "workflow") {
                if (event.data.advance == true) {
                    controllerNavigationObject.advanceStep();
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
            event["data"]["initial"] = controllerNavigationObject.initial;
            if (event["data"]["screen"] == "workflow") {
                event["data"]["title"] = "My data";
                //controllerNavigationObject.currentTabs = controllerNavigationObject.workflowTabs;
            }
            else if (event["data"]["screen"] == "welcome") {
                event["data"]["title"] = "Welcome";
                //controllerNavigationObject.currentTabs = controllerNavigationObject.welcomeTabs;
            }
            else if (event["data"]["screen"] == "marketplace") {
                event["data"]["title"] = "Data market";
                //controllerNavigationObject.currentTabs = controllerNavigationObject.marketplaceTabs;
            } else {//alert("SCREEN UPDATED");
                event["data"]["screen"] = controllerNavigationObject.currentScreen;
            }
            //alert(event["data"]["screen"]);
            console.log("controllerObject: updateScreen(event): (this.currentScreen != event.data.screen)", this.currentScreen, event.data.screen);

            event["data"]["updateScreen"] = controllerNavigationObject.updateScreen;
            console.log("controllerObject: updateScreen(param): end", event);
            return event;
        },
        updateTab: function(event) {
            console.log("controllerObject: updateTab(event): start", event, event["data"]["updateScreen"]);
            //if (typeof event["data"]["tab"] != 'undefined') {//?????
            //    return event;
            //}
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
                
            }
            else {
                

                console.log("controllerObject: updateTab(event): event[data][tab]", controllerNavigationObject.currentTab);
                event["data"]["tab"] = controllerNavigationObject.currentTab;
            }
            event["data"]["disabledTabs"] = controllerNavigationObject.currentTabs.slice(controllerNavigationObject.allowedTabs, controllerNavigationObject.currentTabs.length - 1);

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
                $('#dbTable').on("click", {}, controllerObject.advanceStep);
            }
            $('#import').on("click", {screen:"workflow",tab:"import"}, controllerObject.navigateTo);
            $('#validate').on("click", {screen:"workflow",tab:"validate"}, controllerObject.navigateTo);
            $('#organize').on("click", {screen:"workflow",tab:"organize"}, controllerObject.navigateTo);
            $('#preview').on("click", {screen:"workflow",tab:"preview"}, controllerObject.navigateTo);
            $('#export').on("click", {screen:"workflow",tab:"export"}, controllerObject.navigateTo);
            $('#furniture').on("click", {screen:"marketplace",tab:"furniture"}, controllerObject.navigateTo);
            $('#fashion').on("click", {screen:"marketplace",tab:"fashion"}, controllerObject.navigateTo);
            $('#household').on("click", {screen:"marketplace",tab:"household"}, controllerObject.navigateTo);
            $('#other').on("click", {screen:"marketplace",tab:"other"}, controllerObject.navigateTo);
        },
        saveState: function(event) {
            console.log("controllerObject: saveState(event): start", event);
            this.currentScreen = event.data.screen;
            this.currentTab = event.data.tab;
            this.currentStep = event.data.step;
            console.log("controllerObject: saveState(event): end", event);
        },
        nextStep: function(event) {
            event = controllerNavigationObject.nextStep(event);
            controllerObject.updateEvent(event);
        },
        previousStep: function(event) {
            event = controllerNavigationObject.previousStep(event);
            controllerObject.updateEvent(event);
        },
        advanceStep: function(event) {
            event = controllerNavigationObject.advanceStep(event);
            controllerObject.updateEvent(event);
        },
        navigateTo: function(event) {
            event = controllerNavigationObject.navigateTo(event);
            controllerObject.updateEvent(event);
        }
    }
    var event = {};
    event["data"] = {};
    event["data"]["screen"] = "welcome";
    controllerObject.navigateTo(event);
    console.log("Controller: controllerObject initialized");
    return controllerObject;
    //});
});