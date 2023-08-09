from flask import Flask
from flask_cors import CORS
from app.routes import racks

app = Flask(__name__)
app.config.from_object('app.config')
CORS(app)
app.register_blueprint(racks.racks_bp)

@app.route('/')
def hello():
    return '<h1>Hello, Flask!</h1>'