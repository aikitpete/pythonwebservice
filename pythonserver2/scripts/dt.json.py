import json, ast
def func():
    jsonString = \
        """
        {
            "columns": [
                { "data" : "DT_RowId", "title" : "Id" },
                { "data" : "supplier", "title" : "supplier" },
                { "data" : "color", "title" : "color" }
            ],
            "data": [
                { "DT_RowId" : "row_3", "supplier" : "small", "color" : "red" },
                { "DT_RowId" : "row_3", "supplier" : "medium", "color" : "blue" },
                { "DT_RowId" : "row_3", "supplier" : "medium", "color" : "blue" },
                { "DT_RowId" : "row_11", "supplier" : "large", "color" : "blue" }
            ]
        }
        """
    
    print(jsonString), #end="", flush=True)
func()