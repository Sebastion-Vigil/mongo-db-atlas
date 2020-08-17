// https://www.coderrocketfuel.com/article/create-and-connect-to-a-mongodb-atlas-database-with-node-js

mongoose = require("mongoose")

const mongoString = "mongodb+srv://SeanValdivia:thisismypassword@cluster0.ibmhq.mongodb.net/testdb?retryWrites=true&w=majority"

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})