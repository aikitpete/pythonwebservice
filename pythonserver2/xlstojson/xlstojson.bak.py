import xlrd
from collections import OrderedDict
import simplejson as json
 
# Open the workbook and select the first worksheet
wb = xlrd.open_workbook('../xls/samplexls.xlsx')
sh = wb.sheet_by_index(0)
 
# List to hold dictionaries
dict_list = []

# Iterate through first row 
dict_names = OrderedDict()
row_values = sh.row_values(0)

for colnum in range(0, sh.ncols):
    dict_names[colnum] = row_values[colnum]
 
# Iterate through each row in worksheet and fetch values into dict
for rownum in range(1, sh.nrows):
    dict_values = OrderedDict()
    row_values = sh.row_values(rownum)
    
    for colnum in range(0, sh.ncols):
        dict_values[dict_names[colnum]] = row_values[colnum]
        dict_list.append(dict_values)

# Serialize the headers to JSON
j = json.dumps(dict_names)
 
# Write to file
with open('../json/headers.json', 'w') as f:
    f.write(j)
    
# Serialize the list of values to JSON
j = json.dumps(dict_list)
 
# Write to file
with open('../json/data.json', 'w') as f:
    f.write(j)