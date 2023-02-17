const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Parse request
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
const cityRoutes = require("./routes/cityRoutes");
app.use('/api', cityRoutes)


// Connect to DB
url = `mongodb+srv://root:root@mongoji.nf5scze.mongodb.net/WAD_YANEZJOSE_EXAMEN_P2?retryWrites=true&w=majority`;
const database = mongoose.connection;
mongoose.connect(url);
database.on("error",  console.error.bind(console, "Error connecting to MongoDB"));
database.once('connected', () => {console.log("Succesfuly connected to MongoDB Database 'WAD_YANEZJOSE_EXAMEN_P2'")});

// Listen App
app.use(express.json)
app.listen(3019, () => {
    console.log("Server running!")
})