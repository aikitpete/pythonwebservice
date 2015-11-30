define(['jquery', 'jquery-ui', 'bootstrap', 'knockout', 'durandal/app', 'plugins/router', 'viewTabStep', 'controllerTable', 'columnsModal', 'testsModal', 'plugins/dialog', 'datatables'], function($, jqueryui, bootstrap, ko, app, router, viewTabStepObject, controllerTableObject, columnsModal, testsModal, dialog) {



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

    // ko.bindingHandlers.radio = {
    //     init: function(element, valueAccessor, allBindings, data, context) {
    //         var $buttons, $element, observable;
    //         observable = valueAccessor();
    //         if (!ko.isWriteableObservable(observable)) {
    //             throw "You must pass an observable or writeable computed";
    //         }
    //         $element = $(element);
    //         if ($element.hasClass("btn")) {
    //             $buttons = $element;
    //         }
    //         else {
    //             $buttons = $(".btn", $element);
    //         }
    //         var elementBindings = allBindings();
    //         $buttons.each(function() {
    //             var $btn, btn, radioValue;
    //             btn = this;
    //             $btn = $(btn);
    //             radioValue = $btn.attr("id");
    //             $btn.on("click", function(event) {
    //                 observable(ko.utils.unwrapObservable(radioValue));
    //                 alert("Hello there!");
    //                 alert(radioValue);
    //             });
    //             return ko.computed({
    //                 disposeWhenNodeIsRemoved: btn,
    //                 read: function() {
    //                     $btn.toggleClass("active", observable() === ko.utils.unwrapObservable(radioValue));
    //                 }
    //             });
    //         });
    //     }
    // };

    var viewOptions = ko.observable();

    ko.bindingHandlers.radio = {
        init: function(element, valueAccessor, allBindings, data, context) {
            var $buttons, $element, observable;
            observable = valueAccessor();
            if (!ko.isWriteableObservable(observable)) {
                throw "You must pass an observable or writeable computed";
            }
            $element = $(element);
            if ($element.hasClass("btn")) {
                $buttons = $element;
            }
            else {
                $buttons = $(".btn", $element);
            }
            var elementBindings = allBindings();
            $buttons.each(function() {
                var $btn, btn, radioValue;
                btn = this;
                $btn = $(btn);
                radioValue = $btn.attr("id");
                $btn.on("click", function() {
                    observable(ko.utils.unwrapObservable(radioValue));
                });
                return ko.computed({
                    disposeWhenNodeIsRemoved: btn,
                    read: function() {
                        $btn.toggleClass("active", observable() === ko.utils.unwrapObservable(radioValue));
                    }
                });
            });
        }
    };

    return {

        validationOptions: ko.observableArray([
            "Check value types",
            "Check missing values",
            "Check missing categories",
            "Check misinputted values",
            "Learn from past imports",
        ]),
        validation: ko.observable(),
        viewOptions: viewOptions,

        bindingComplete: function() {
            alert("start");
            console.log("validate: this:", this);
            console.log("validate: viewOptions:", this.viewOptions);
            this.viewOptions.subscribe(function(newViewOptions) {
                alert("Hello there!");
                alert(newViewOptions);
            }, this);
            ko.utils.unwrapObservable("large-data")
            alert("end");
        },

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
                scrollY: 880,
                deferRender: true,
                scroller: true
            });
        },

        attached: function() {
            // $("#view-selector #large-data").button("toggle");
            // var event = {};
            // event["data"] = {};
            // controllerTableObject.loadTable(controllerTableObject.simpledataURL, event, this.afterDisplayTable);

        },

        doneValidating: function() {
            router.navigate('organize');
        }

    };
});