import pandas
import json

excel_data_df = pandas.read_excel('./OMI_data.xlsx')
json_str = excel_data_df.to_json(orient='records')
json_dict = json.loads(json_str)
with open('data.json', 'w') as f:
    json.dump(json_dict, f)