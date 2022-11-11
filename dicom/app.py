from flask import Flask
from src.dicom import jsondata
app = Flask(__name__)

@app.route("/")
def home():
  return "Hello World!"

@app.route("/data", methods=['GET'])
def datas():
  return jsondata

if __name__ == "__main__":
  app.run()