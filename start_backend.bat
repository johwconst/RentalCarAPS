cd /python-emb
python -m pip install -r ./requeriments.txt

python ./manage.py migrate
python ./manage.py runserver 0.0.0.0:8000
