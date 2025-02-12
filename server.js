//index.js

const express = require('express');

const User = require('./models/user')
var path = require('path');

const mongoose=require('mongoose');
const dotenv=require("dotenv")
const bodyParser=require('body-parser')
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, 'public')));

app.post("/post-feedback", (req, res) => {
    console.log(req.body,"dfsf")
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        console.log(err)
        res.status(400).send("unable to save to database");
      });
  });

  app.get(
    "/",
    (req, res, next) => {
        console.log("hello");
        next();
    },
(req,res,next)=>{
    console.log("heeyy");
    next();
    
},
    (req, res) => {
        res.send(
            `<div>
                <h2>Welcome to GeeksforGeeks</h2>
                <h5>Tutorial on Middleware</h5>
            </div>`
        );
    }
);

const PORT = process.env.PORT || 5000;



var mongoUrl = process.env.mongo_url

async function connectToDatabase() {
    try {
        // Connect to MongoDB using the provided connection string
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

connectToDatabase();

// Define the user schema and model 
// after establishing the connection



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});