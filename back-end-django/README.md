# Django REST API & Next.js Frontend

This project consists of a Django-based REST API that provides endpoints to manage racks and devices in a data center, along with a Next.js frontend to interact with the API.

## Features

- Create, retrieve, update, and delete racks and devices.
- Pagination of rack lists.
- Integration with PostgreSQL database.
- Use of Django Rest Framework for API development.
- Frontend built with Next.js to interact with the API.

## Prerequisites

- Python 3.x
- PostgreSQL
- Node.js
- Yarn (recommended for Next.js projects)

## Installation

1. Clone the repository:
   git clone https://github.com/marie-sheela-joseph/data-center.git

2. Set up a virtual environment and install Python dependencies:
   cd back-end-django
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt

3. Set up PostgreSQL:
   Create a PostgreSQL database and configure its settings in settings.py.

4. Run database migrations:
   python manage.py migrate

5. Start the development server:
   python manage.py runserver
