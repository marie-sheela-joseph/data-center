from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app) 

client = MongoClient("mongodb+srv://sheela:pjtPMcuvP8fWiz8Q@cluster1.ctektmw.mongodb.net/?retryWrites=true&w=majority", tls=True, tlsAllowInvalidCertificates=True)

db = client["test"]
collection = db["rackpostmodals"]

@app.route('/racks', methods=['GET'])
def home():        
    data = list(collection.find({}))
    
    for doc in data:
        doc['_id'] = str(doc['_id'])  
        for device in doc["devices"]:
            device['_id'] = str(device['_id']) 
    
    json_data = json.dumps(data, default=str, indent=2)
    print(json_data)    
    return jsonify({"racks": json.loads(json_data)}), 200

if __name__ == '__main__':
    app.run(debug=True)
