from flask import Flask, request, render_template
import requests

app = Flask(__name__) 

# sample html page
welcome_page = """
<h1>Welcome to the Flask App</h1>
<p> This is a sample page </p>
"""


@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/aboutus/<name>')
def aboutus(name):
    return render_template('aboutus.html', user=name)

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

@app.route('/repos/', defaults={'username': None})
@app.route('/repos')
def repos(username=None):
    username = request.args.get('username')
    if username:
        r = requests.get(f'https://api.github.com/users/{username}/repos')
        return render_template('repos.html', username=username, repos=r.json())
    else:
        return render_template('repos.html')