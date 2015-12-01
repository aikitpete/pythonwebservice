define(['jquery', 'jquery-ui', 'bootstrap', 'knockout', 'durandal/app', 'plugins/router', 'viewTabStep', 'controllerTable', 'columnsModal', 'testsModal', 'plugins/dialog', 'datatables'], function($, jqueryui, bootstrap, ko, app, router, viewTabStepObject, controllerTableObject, columnsModal, testsModal, dialog) {

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

    var vm = {

        validationOptions: ko.observableArray([
            "Check value types",
            "Check missing values",
            "Check missing categories",
            "Check misinputted values",
            "Learn from past imports",
        ]),
        validation: ko.observable(),
        viewOptions: ko.observable(),

        bindingComplete: function() {
            vm.viewOptions.subscribe(function(newViewOptions) {
                $("#view-selector #large-data").button("toggle");
                var event = {};
                event["data"] = {};
                var dataURL;
                if (newViewOptions == "large-data") {
                    dataURL = "https://appprototype-petegerhat.c9users.io:8080/data/sampledata.json?model=Product";
                } else if (newViewOptions == "medium-data") {
                    dataURL = "https://appprototype-petegerhat.c9users.io:8080/data/sampledata.json?model=Simplemodel";
                } else if (newViewOptions == "small-data") {
                    dataURL = "https://appprototype-petegerhat.c9users.io:8080/data/sampledata.json?model=Samplemodel";
                }
                controllerTableObject.loadTable(dataURL, event, this.afterDisplayTable);

            }, vm);
            vm.viewOptions("large-data");
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
            dialog.close(vm, vm.input());
        },

        afterDisplayTable: function(event) {
            if (vm.table != null) {
                vm.table.destroy();
                $('#example').empty();
            }

            var tableColumns = event.data['tableColumns'];
            var tableRows = event.data['tableRows'];

            vm.table = $('#example').DataTable({
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
                scrollY: 580,
                deferRender: true,
                scroller: true
            });
        },

        attached: function() {
            
        },

        doneValidating: function() {
            router.navigate('organize');
        }

    };

    return vm;
});