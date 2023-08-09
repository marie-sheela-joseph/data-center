from flask import Flask

app = Flask(__name__)
app.config.from_object('app.config')

from app.routes import racks
app.register_blueprint(racks.racks_bp)

@app.route('/')
def hello():
    return '<h1>Hello, Flask!</h1>'