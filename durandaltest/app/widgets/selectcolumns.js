define(['plugins/dialog', 'knockout'], function(dialog, ko) {

    function Column(title, data) {
        this.title = title;
        this.data = data;
    };

    var listOfColumns = [
        new Column('Column1', 'column1'),
        new Column('Column2', 'column2'),
        new Column('Column3', 'column3')
    ];

    var CustomModal = {
        
        ok: ko.observable(),
        cancel: ko.observable(),
        input: ko.observable(''),
        columns: ko.observableArray(listOfColumns),
        checkedColumns: ko.observableArray(),

        // okfunction: function() {
        //     dialog.close(this, this.input());
        // },

        // canDeactivate: function() {
        //     //return dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
        // },

        show: function() {
            return dialog.show(new CustomModal());
        },
    }

    return CustomModal;
});