const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require ("Path");
const Student = require("./models/student.js");

//Url encoded Data or json Data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Mongoose Connection
main()
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/school');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Index Route
app.get("/students" , async (req , res) => {
    let students = await Student.find();
    console.log(students);
    res.send("Root is working");
});

//Check Server
app.get("/" , (req , res) => {
    res.send("Root is working");
});

//Port 9080
const port = 9080;
app.listen( port, () => {
    console.log(`listing port on ${port}`);
});