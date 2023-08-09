# Python REST API with Flask

This project is a Python REST API built using the Flask framework. It provides endpoints to manage racks and devices in a data center.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- List all racks and devices
- Add new racks with devices
- Update existing racks and devices
- Delete racks

## Technologies

- Flask
- MongoDB
- Flask-CORS

## Project Structure

- `app/`: Contains the main application logic
  - `__init__.py`: Initializes the Flask app and configures it.
  - `routes/`: Defines route blueprints
    - `__init__.py`: Initializes the `racks_bp` blueprint
    - `racks.py`: Contains route definitions for racks
  - `models.py`: Defines data models
  - `database.py`: Handles MongoDB connections
  - `config.py`: Stores configuration settings
- `run.py`: Starts the Flask development server
- `requirements.txt`: Lists required packages
- `.gitignore`: Specifies ignored files for version control

## Setup

1. Clone the repository:  
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Install dependencies:  
   pip install -r requirements.txt

3. Configure MongoDB:
   Update app/database.py with your MongoDB connection details.

4. Run the application:
   python run.py

### API Endpoints

    GET /racks: Get a list of all racks and devices.
    POST /racks: Add a new rack with devices.
    PATCH /racks/<rack_id>: Update an existing rack's data.
    DELETE /racks/<rack_id>: Delete a rack.
