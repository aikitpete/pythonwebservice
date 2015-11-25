import xlrd
from collections import OrderedDict
import simplejson as json

# Open the workbook and select the first worksheet
#wb = xlrd.open_workbook('../xls/simpledata.xls')
#wb = xlrd.open_workbook('../xls/samplexls.xlsx')
wb = xlrd.open_workbook('../xls/smalldata.xls')
sh = wb.sheet_by_index(0)

col_names = OrderedDict()

# List to hold dictionaries
names_list = []

# Read the first row 
row_values = sh.row_values(0)

for colnum in range(0, sh.ncols):
    dict_names = OrderedDict()
    col_names[colnum] = row_values[colnum]
    dict_names['data'] = row_values[colnum]
    dict_names['title'] = row_values[colnum]
    names_list.append(dict_names)

# List to hold dictionaries
values_list = []
 
# Iterate through each row in worksheet and fetch values into dict
for rownum in range(1, sh.nrows):
    dict_values = OrderedDict()
    row_values = sh.row_values(rownum)
    
    for colnum in range(0, sh.ncols):
        dict_values[col_names[colnum]] = row_values[colnum]
    
    values_list.append(dict_values)

sampledata = OrderedDict()
sampledata['columns'] = names_list
sampledata['data'] = values_list

# Serialize the list of values to JSON
j = json.dumps(sampledata, indent=4, sort_keys=True) 
 
# Write to file
#with open('../json/simpledata.json', 'w') as f:
with open('../json/smalldata.json', 'w') as f:
    f.write(j)