define(['jquery-ui','vStep'], function(jqueryui,vStep) {
    var vTab = {
        switchTab: function(tab,step) {
            console.log("vTab: switchTab:",tab,step);
            if (step!=null) {
                vStep.switchTabStep(step);
            }
        }
    }
    console.log("viewTab created");
    return vTab;
});