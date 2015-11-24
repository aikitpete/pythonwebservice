define(['jquery', 'utils'], function($, utils) {

    var controllerTableObject = {
        sampledataURL: 'https://www.petegerhat.com:8000/sampledata.json',
        simpledataURL: 'https://www.petegerhat.com:8000/simpledata.json',
        loadTable: function(urlParam, event,callback) {
            //alert("Loading table");
            console.log("nextStep(): Loading table", urlParam, event, callback);

            /*var editor = new $.fn.dataTable.Editor({
                table: "#example",
                fields: [{
                    label: "Doc.",
                    name: "Doc."
                }, {
                    label: "Order no.",
                    name: "Order no."
                }, {
                    label: "Nothing",
                    name: "Nothing"
                }]
            });*/
            console.log("nextStep(): Editor loaded");
            $.ajax({
                //url: 'http://www.petegerhat.com:8000/simpledata.json',
                url: urlParam,
                type: 'POST',
                contentType: "application/json",
                dataType: "jsonp",
                success: function(json) {
                    console.log("SUCCESS:", json);
                    json.data = controllerTableObject.sanitizeData(json.data);
                    json.columns = controllerTableObject.sanitizeColumns(json.columns);
                    console.log("controllerTable: loadTable()",json.data);
                    console.log("controllerTable: loadTable()",json.columns);
                    event["data"]["tableColumns"] = json.columns;
                    event["data"]["tableRows"] = json.data;

                    callback(event);
                    /*
                    $('#loadanimation').hide();
                    $('#example').DataTable({
                        data: json.data,
                        columns: json.columns,
                        dom: 'Bfrpit',
                        */
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
                    /*
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
                    */
                },
                error: function(exception, textStatus, errorThrown) {
                    //alert("ERROR:" + JSON.stringify(exception) + " STATUS:" + textStatus + " ERRORTHROW:" + errorThrown);
                    console.error("ERROR:", exception, textStatus + ";" + errorThrown);
                    //$('#debugconsole').append("<h1>Response Error</h1>");
                    //$('#debugconsole').append(prettyPrint(exception));
                },
            });

        },
        sanitizeData: function(jsonArray) {
            var newKey;
            jsonArray.forEach(function(item) {
                for (key in item) {
                    newKey = key.replace(/\s/g, '').replace(/\./g, '');
                    if (key != newKey) {
                        item[newKey] = item[key];
                        delete item[key];
                    }
                }
            })
            return jsonArray;
        },
        //remove whitespace and dots from data : <propName> references
        sanitizeColumns: function(jsonArray) {
            var dataProp = [];
            jsonArray.forEach(function(item) {
                dataProp = item['data'].replace(/\s/g, '').replace(/\./g, '');
                item['data'] = dataProp;
            })
            return jsonArray;
        }
    }
    return controllerTableObject;
});


css: { hasErrors: row.has_errors == true }