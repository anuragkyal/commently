__author__ = 'soumyakanti'

from flask import Flask
from pymongo import MongoClient
import json
from crossdomain import crossdomain

app = Flask(__name__)

db = MongoClient("mongodb://admin:admin@ds031657.mongolab.com:31657/icsas")["icsas"]
comments = db.comments


@app.route('/')
@crossdomain(origin='*')
def hello_world():
    return 'Hello World!'

@app.route('/geturl/<string:url>')
@crossdomain(origin='*')
def get_comments_url(url):
    comments_pointer = comments.find({"url": url})
    comments_array = []
    for comment in comments_pointer:
        comments_array.append({
            "comment": comment["comment"],
            "user": comment["user"],
            "para": comment["para"]
        })
    return json.dumps(comments_array)

if __name__ == '__main__':
    app.run()
