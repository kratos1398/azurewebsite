from flask import Flask, request, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    query = request.form['query']
    # Vulnerable part: directly using the input in a command
    output = os.popen(query).read()
    return render_template('results.html', query=query, output=output)

if __name__ == '__main__':
    app.run(debug=True)
