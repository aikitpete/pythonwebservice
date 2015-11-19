define(['jquery','utils'], function($, utils) {   
    var controllerNavigationObject = {
        welcomeTabs: ["welcome"],
        marketplaceTabs: ["furniture", "fashion", "household", "other"],
        workflowTabs: ["import", "validate", "organize", "preview", "export"],

        currentScreen: null,
        currentTab: null,
        currentTabs: null,
        currentStep: null,
        workflowStep: 0,
        allowedTabs: 0,

        previousStep: function() {
            console.log("previous step");
            if (controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) == 0) {
                return;
            }
            controllerNavigationObject.currentTab = controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) - 1];
        },
        nextStep: function() {

            console.log("next step");
            if (controllerNavigationObject.currentTab == controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.length - 1]) {
                return;
            }
            if (controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) == controllerNavigationObject.allowedTabs + 1) {
                return;
            }
            controllerNavigationObject.currentTab = controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) + 1];
        },
        advanceStep: function() {
            console.log("next step");
            if (controllerNavigationObject.currentTab == controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.length - 1]) {
                return;
            }
            if (controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) == controllerNavigationObject.allowedTabs + 1) {
                return;
            }
            controllerNavigationObject.currentTab = controllerNavigationObject.currentTabs[controllerNavigationObject.currentTabs.indexOf(controllerNavigationObject.currentTab) + 1];
        },
    }
    return controllerNavigationObject;
});