from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import json
from bson.objectid import ObjectId

app = Flask(__name__)
cors = CORS(app) 

client = MongoClient("mongodb+srv://sheela:pjtPMcuvP8fWiz8Q@cluster1.ctektmw.mongodb.net/?retryWrites=true&w=majority", tls=True, tlsAllowInvalidCertificates=True)

db = client["test"]
collection = db["rackpostmodals"]

@app.route('/racks', methods=['GET'])
def get_data():        
    data = list(collection.find({}))    
    for doc in data:
        doc['_id'] = str(doc['_id'])  
        for device in doc["devices"]:
            device['_id'] = str(device['_id']) 
    
    json_data = json.dumps(data, default=str, indent=2)
    print(json_data)    
    return jsonify({"racks": json.loads(json_data)}), 200

# @app.route('/racks', methods=['POST'])
# def add_data():
#     try:
#         data = request.json        
#         inserted_id = collection.insert_one(data['rack']).inserted_id

#         response = {
#             'message': 'Data added successfully',
#             'inserted_id': str(inserted_id)
#         }
#         return jsonify(response), 201
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    
# @app.route('/racks/<string:rack_id>', methods=['PATCH'])
# def update_data(rack_id):
#     try:
#         data = request.json
#         rack_data = data['rack']        
#         rack_id = ObjectId(rack_id)        
#         collection.update_one({'_id': rack_id}, {'$set': rack_data})
#         response = {
#             'message': 'Data updated successfully'
#         }
#         return jsonify(response), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    
# @app.route('/racks/<string:rack_id>', methods=['DELETE'])
# def delete_data(rack_id):
#     try:        
#         rack_id = ObjectId(rack_id)
#         result = collection.delete_one({'_id': rack_id})
#         if result.deleted_count == 1:
#             response = {
#                 'message': 'Data deleted successfully'
#             }
#             return jsonify(response), 200
#         else:
#             return jsonify({'message': 'Rack not found'}), 404
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
