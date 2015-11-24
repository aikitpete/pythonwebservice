define(['jquery', 'knockout', 'durandal/app', 'plugins/router', 'viewTabStep','controllerTable', 'datatables.net-editor'], function($, ko, app, router, viewTabStepObject, controllerTableObject) {



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
            controllerTableObject.loadTable(controllerTableObject.sampledataURL, event, this.afterDisplayTable);
        },
        
        doneValidating: function() {
            router.navigate('organize');
        }
        
    };
});