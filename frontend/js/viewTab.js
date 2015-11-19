define(['jquery','viewTabStep'], function($,viewTabStep) {
    var viewTabObject = {
        switchTab: function(tab,step) {
            console.log("viewTab: switchTab:",tab,step);
            if (step!=null) {
                viewTabStep.switchTabStep(step);
            }
        }
    }
    console.log("viewTab created");
    return viewTabObject;
});