import requests
import json

with open("data.json", "r") as file:
    data = json.loads(file.read())
print(data[0])
# res = requests.post("http://localhost:3000/test", json=data)
res = requests.post("https://g79rt98l62.execute-api.us-east-1.amazonaws.com/test", json=data)
print(res.status_code)
print(res.json())
