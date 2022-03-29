from flask import Flask,render_template
import json
import requests

app=Flask(__name__)

# Index 
@app.route("/")
def index():
	return "Hello SAI!"

# API
@app.route("/view_data",methods=["GET"])
def view_data():
    return render_template("view.html")


@app.route("/home",methods=["GET"])
def home():
	try:
		response_API = requests.get('https://restcountries.com/v3.1/all')
		print(response_API.status_code)
	except Exception as e:
		raise e


if __name__ == '__main__':
	app.run(debug=True)