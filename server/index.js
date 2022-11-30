const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const route = require("./View/Routes");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(route);

mongoose.connect(`mongodb+srv://Amit:${
    process.env.REACT_APP_ACCESS_KEY
}@rampraveshthekedar.1amjyvv.mongodb.net/blogData?retryWrites=true&w=majorityy`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected Successfully.")
}).catch(() => {
    console.log("DB Connection Failed.")
});

app.listen(3001, () => {
    console.log("Server started at port 3001");
});
