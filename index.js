// https://www.coderrocketfuel.com/article/create-and-connect-to-a-mongodb-atlas-database-with-node-js

mongoose = require("mongoose")

const mongoString = ""

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})