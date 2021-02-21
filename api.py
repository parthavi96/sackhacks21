import os
import pickle
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import numpy as np
app = Flask(__name__)
CORS(app)
api = Api(app)
# Require a parser to parse our POST request.
parser = reqparse.RequestParser()
parser.add_argument("Offense_Code")     
parser.add_argument("Offense_Ext")
parser.add_argument("Description")   
parser.add_argument("Beat")    
parser.add_argument("Occurence_Date") 
parser.add_argument("Police_District-1")
parser.add_argument("Police_District-2")
parser.add_argument("Police_District-3")
parser.add_argument("Police_District-4")
parser.add_argument("Police_District-5")
parser.add_argument("Police_District-6")
parser.add_argument("Police_District-UI")
# Unpickle our model so we can use it!
if os.path.isfile("sac_crime_cat_best_hyper.pkl"):
    model = pickle.load(open("sac_crime_cat_best_hyper.pkl", "rb"))
else:
    raise FileNotFoundError
class Predict(Resource):
    def post(self):
        args = parser.parse_args()
    # Sklearn is VERY PICKY on how you put your values in...
        X = (
          np.array(
            [
              args["Offense_Code"],
              args["Offense_Ext"],
              args["Description"],
              args["Beat"],
              args["Grid"],
              args["Occurence_Date"],
              args["Police_District-1"],
                args["Police_District-2"],
                args["Police_District-3"],
                args["Police_District-4"],
                args["Police_District-5"],
                args["Police_District-6"],
                args["Police_District-UI"]
            ]
          ).astype(np.int32).reshape(1, -1)
        )
        _y = model.predict(X)[0]
        return {"class": _y}
api.add_resource(Predict, "/predict")
if __name__ == "__main__":
    app.run(debug=True,port=6000)