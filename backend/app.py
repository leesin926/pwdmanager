from flask import Flask, request, jsonify
from flask_cors import *
from models import db

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///passwords.db'
db.init_app(app)

with app.app_context():
    db.create_all()

from models import User, Password


@app.route('/register', methods=['POST'])
def register():
    data = request.json
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully!'})


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password == data['password']:
        return jsonify({'message': 'Login successful!', 'user_id': user.id})
    return jsonify({'message': 'Invalid credentials!'}), 401


@app.route('/passwords', methods=['POST'])
def add_password():
    data = request.json
    new_password = Password(user_id=data['user_id'], site=data['site'], password=data['password'])
    db.session.add(new_password)
    db.session.commit()
    return jsonify({'message': 'Password added successfully!'})


@app.route('/passwords/<int:user_id>', methods=['GET'])
def get_passwords(user_id):
    passwords = Password.query.filter_by(user_id=user_id).all()
    return jsonify([{'site': p.site, 'password': p.password} for p in passwords])


if __name__ == '__main__':
    app.run(debug=True)
