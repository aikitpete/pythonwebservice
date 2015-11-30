define(['jquery', 'knockout', 'durandal/app', 'plugins/router', 'viewTabStep','controllerTable', 'columnsModal', 'testsModal', 'plugins/dialog', 'datatables'], function($, ko, app, router, viewTabStepObject, controllerTableObject,columnsModal, testsModal, dialog) {



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

        validationOptions: ko.observableArray([
            "Check value types",
            "Check missing values",
            "Check missing categories",
            "Check misinputted values",
            "Learn from past imports",
            ]),
        validation: ko.observable(),

        activate: function() {

        },
        
        selectTests: function(item) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            item.viewUrl = 'app/widgets/selecttests';
            app.showDialog(item);
            //app.showDialog();
        },
        
        selectColumns: function(item) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            item.viewUrl = 'app/widgets/selectcolumns';
            app.showDialog(item);
            //app.showDialog();
        },
        
        closeDialog: function() {
            dialog.close(this, this.input());  
        },
        
        afterDisplayTable: function(event) {
            if (this.table != null) {
                this.table.destroy();
                $('#example').empty();
            }
            
            var tableColumns = event.data['tableColumns'];
            var tableRows = event.data['tableRows'];
            
            this.table = $('#example').DataTable({
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
        },
        
        attached: function() {
            var event = {};
            event["data"] = {};
            controllerTableObject.loadTable(controllerTableObject.simpledataURL, event, this.afterDisplayTable);
        },
        
        doneValidating: function() {
            router.navigate('organize');
        }
        
    };
});