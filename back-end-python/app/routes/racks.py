from flask import request, jsonify, Blueprint
from app.models import Rack
from app.database import collection
from bson.objectid import ObjectId

racks_bp = Blueprint('racks', __name__)

@racks_bp.route('/racks', methods=['GET'])
def get_racks():
    try:
        data = list(collection.find({}))
        for doc in data:
            doc['_id'] = str(doc['_id'])
            for device in doc["devices"]:
                device['_id'] = str(device['_id'])
        return jsonify({"racks": data}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@racks_bp.route('/racks', methods=['POST'])
def create_rack():
    try:
        data = request.json
        inserted_id = collection.insert_one(data['rack']).inserted_id
        response = {
            'message': 'Data added successfully',
            'inserted_id': str(inserted_id)
        }
        return jsonify(response), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@racks_bp.route('/racks/<string:rack_id>', methods=['PATCH'])
def update_rack(rack_id):
    try:
        data = request.json
        rack_data = data['rack']
        rack_id = ObjectId(rack_id)
        collection.update_one({'_id': rack_id}, {'$set': rack_data})
        response = {
            'message': 'Data updated successfully'
        }
        return jsonify(response), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@racks_bp.route('/racks/<string:rack_id>', methods=['DELETE'])
def delete_rack(rack_id):
    try:
        rack_id = ObjectId(rack_id)
        result = collection.delete_one({'_id': rack_id})
        if result.deleted_count == 1:
            response = {
                'message': 'Data deleted successfully'
            }
            return jsonify(response), 200
        else:
            return jsonify({'message': 'Rack not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
