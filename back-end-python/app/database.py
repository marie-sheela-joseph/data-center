from pymongo import MongoClient

client = MongoClient("mongodb+srv://sheela:pjtPMcuvP8fWiz8Q@cluster1.ctektmw.mongodb.net/?retryWrites=true&w=majority", tls=True, tlsAllowInvalidCertificates=True)
db = client["test"]
collection = db["rackpostmodals"]
