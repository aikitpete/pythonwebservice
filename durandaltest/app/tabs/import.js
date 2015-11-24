define(['jquery', 'knockout', 'durandal/app', 'plugins/router', 'viewTabStep'], function($, ko, app, router, viewTabStepObject) {



    //$(function() {

    /*
    if (typeof jQuery == 'undefined') {
        console.log("jQuery is not loaded");
    }
    else {
        console.log("jQuery is loaded");
    }

    $.fn.visible = function() {
        return this.css('visibility', 'visible');
    };

    $.fn.invisible = function() {
        return this.css('visibility', 'hidden');
    };

    $.fn.exists = function() {
        return this.length !== 0;
    }
    */

    //});



    return {

        databaseOptions: ko.observableArray([
            "MySQL database format", 
            "PostgreSQL database format",
            "SAP database format",
            "Oracle database format",
            "MongoDB database format",
            "Amazon SimpleDB database format",
            "Microsoft SQL Server database format",
            "IBM DB2 database format",
            "Excel format (XLS)",
            "CSV format",
            "OpenOffice format",
            "Teradata database format",
            "Informix database format",
            "MariaDB database format",
            "Other format"
            ]),
        database: ko.observable(),
        logged: ko.observable(false),

        activate: function() {

        },
        
        attached: function() {
            
        },
        
        initiateImport: function() {
            
            // $('#form1').invisible();
            // $('#form2').invisible();
            // $('#loadanimation').show();
            // $('#loadanimation').hide();
            // $('#form1').hide("slow");
            // $('#form2').hide("slow");
        },

        change: function(element, valueAccessor) {

            // console.log("A", $('#form1').exists());
            // $('#form1').invisible();
            // $('#form2').invisible();
            // $('#form2').hide("slow");
            // $('#loadanimation').show();
            // setTimeout(
            //     function() {
            //         $('#loadanimation').hide();
            //         $('#form1').show("slow");
            //         $('#form1').visible();
            //         $('#form2').visible();

            //     }, 2000);
        },
        selectLogin: function() {
            this.logged(true);
            // alert("B");
            // $('#form1').invisible();
            // $('#form2').invisible();
            // $('#form1').hide("slow");
            // $('#loadanimation').show();
            // setTimeout(
            //     function() {
            //         $('#loadanimation').hide();
            //         $('#form2').show("slow");
            //         $('#form1').visible();
            //         $('#form2').visible();
            //     }, 500);
        },
        selectTable: function() {
            router.navigate('validate');
        }
        
    };
});