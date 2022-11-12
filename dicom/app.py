from flask import Flask
from src.dicom import jsondata
app = Flask(__name__)

@app.route("/")
def home():
  return "Chainsaw servers"

@app.route("/data", methods=['GET'])
def datas():
  return jsondata

# @app.route("/raw", methods=['GET'])
# def datas():
#   return rawdata

if __name__ == "__main__":
  app.run()