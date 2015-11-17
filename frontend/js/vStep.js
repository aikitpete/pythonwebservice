define([ 'tabslideout', 'slick', 'utils'], function() {
    var vStep = {
        switchTabStep: function(step) {
            console.log("viewTabStep: switchTabStep:",step);
            if (step == 0) {
                //Import step 1
                console.log("View: initializeUI: Create selectmenu object");
                $("#dbSelect").selectmenu();
                $('#form1').invisible();
                $('#form2').invisible();
                $('#loadanimation').show();
                $('#loadanimation').hide();
                $('#form1').hide("slow");
                $('#form2').hide("slow");
            }
            else if (step == 1) {
                $('#dbLogin').button();
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
            }
            else if (step == 2) {
                $('#dbTable').button();
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
            }
        }
    }
    return vStep;
});