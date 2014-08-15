__author__ = 'soumyakanti'

from flask import Flask, request, send_from_directory
from pymongo import MongoClient
import json
import urllib
from crossdomain import crossdomain

app = Flask(__name__)

db = MongoClient("mongodb://admin:admin@ds031657.mongolab.com:31657/icsas")["icsas"]
comments = db.comments


@app.route('/')
@crossdomain(origin='*')
def hello_world():
    return 'Hello World!'

@app.route('/getComments', methods=['POST', 'OPTIONS'])
@crossdomain(origin='*')
def get_comments_url():
    if request.method == 'POST':
        comments_pointer = comments.find({"url": urllib.unquote(request.form['url']).decode('utf-8')})
        comments_array = []
        for comment in comments_pointer:
            comments_array.append({
                "comment": comment["comment"],
                "user": comment["user"],
                "para": comment["para"]
            })
        return json.dumps(comments_array)
    else:
        return json.dumps([])

@app.route('/postComments', methods=['POST', 'OPTIONS'])
@crossdomain(origin='*')
def post_comment():
    if request.method == 'POST':
        comments.insert({
            "comment": request.form['comment'],
            "user": request.form['user'],
            "para": request.form['para'],
            "url": urllib.unquote(request.form['url']).decode('utf-8')
        })
        return 'SUCCESS'
    else:
        return 'FAILURE'

@app.route('/scripts/<path:filename>')
def send_scripts(filename):
    return send_from_directory('scripts', filename)

@app.route('/images/<path:filename>')
def send_images(filename):
    return send_from_directory('images', filename)

@app.route('/styles/<path:filename>')
def send_styles(filename):
    return send_from_directory('styles', filename)

if __name__ == '__main__':
    app.run()
