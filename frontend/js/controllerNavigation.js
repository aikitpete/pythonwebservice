define(['jquery','utils'], function($, utils) {   
    var controllerNavigationObject = {
        screen: {
            "welcome": ["welcome"],
            "marketplace": ["furniture", "fashion", "household", "other"],
            "workflow": ["import", "validate", "organize", "preview", "export"],
        },
        currentScreen: null,
        currentTab: null,
        currentTabs: null,
        currentStep: null,
        workflowStep: 0,
        allowedTabs: 0,
        
        first: true,
        initial: false,
        
        updateScreen:false,
        
        navigateTo: function(event) {
            if (controllerNavigationObject.currentScreen!=null) {
                controllerNavigationObject.first=false;
            } 
            if (controllerNavigationObject.currentScreen != event.data.screen) {
                controllerNavigationObject.initial = true;
            } else {
                controllerNavigationObject.initial = false;
            }
            
            controllerNavigationObject.currentTabs = controllerNavigationObject.screen[event.data.screen];
            
            console.log("controllerNavigationObject: navigateTo(event):",controllerNavigationObject.currentScreen, event.data.screen);
            if (controllerNavigationObject.currentScreen != event.data.screen) {
                console.log("controllerObject: navigateTo(event): (this.currentScreen != event.data.screen) true");
                controllerNavigationObject.updateScreen = true;
                controllerNavigationObject.allowedTabs = controllerNavigationObject.currentTabs.length;
            }
            else {
                console.log("controllerObject: navigateTo(event): (this.currentScreen != event.data.screen) false");
                controllerNavigationObject.updateScreen = false;
            }
            
            controllerNavigationObject.currentScreen = event.data.screen;
            if (event.data.tab != null) {
                controllerNavigationObject.currentTab = event.data.tab;
            } else {
                controllerNavigationObject.currentTab = controllerNavigationObject.screen[event.data.screen][0];
            }
            if (controllerNavigationObject.updateScreen == true && typeof event.data.step=="undefined") {
                controllerNavigationObject.currentStep=0;
            }
            
            //alert(controllerNavigationObject.currentTabs);
            return event;
        },
        previousStep: function(event) {
            console.log("previous step");
            if (controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) == 0) {
                return null;
            }
            controllerNavigationObject.currentTab = controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) - 1];
            controllerNavigationObject.updateScreen = false;
            return event;
        },
        nextStep: function(event) {

            console.log("next step");
            //Check index out of bounds
            if (controllerNavigationObject.currentTab == controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.length - 1]) {
                return null;
            }
            console.log("controllerNavigationObject: nextStep():",controllerNavigationObject.currentTab,controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab), controllerNavigationObject.allowedTabs);
            //Check maximum allowed tabs
            if (controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) == controllerNavigationObject.allowedTabs) {
                return null;
            }
            console.log("controllerNavigationObject: nextStep(): update",controllerNavigationObject.currentTab,controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab), controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) + 1]);
            controllerNavigationObject.currentTab = controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) + 1];
            controllerNavigationObject.updateScreen = false;
            controllerNavigationObject.updateTab = true;

            return event;
        },
        advanceStep: function(event) {
            console.log("controllerNavigationObject: advanceStep():",event);
            if (controllerNavigationObject.currentTab == controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.length - 1]) {
                return null;
            }
            if (controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) == controllerNavigationObject.allowedTabs + 1) {
                return null;
            }
            controllerNavigationObject.currentTab = controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) + 1];
            controllerNavigationObject.updateScreen = false;
            controllerNavigationObject.updateTab = true;
            return event;
        },
    }
    return controllerNavigationObject;
});