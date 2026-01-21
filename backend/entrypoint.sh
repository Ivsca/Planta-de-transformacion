#!/bin/sh
set -e

python wait_for_db.py
python manage.py migrate

echo "Starting Django server..."
python manage.py runserver 0.0.0.0:8000 --noreload
