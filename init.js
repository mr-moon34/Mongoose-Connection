const mongoose = require("mongoose");
const Student = require("./models/student.js");

// Mongoose Connection
main()
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/school');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Json Dummy Data
let allStudents = [
    {
       name: "moon",
       age:23,
       marks:90,
    },
    {
        name: "john",
        age:20,
        marks:80,
     },
     {
        name: "ali",
        age:25,
        marks:50,
     },
     {
        name: "hamza",
        age:15,
        marks:80,
     },
];

// Inserting data into the collection
Student.insertMany(allStudents)
    .then(() => {
        console.log("Data inserted successfully");
       
    })
    .catch((err) => {
        console.error("Error inserting data:", err.message); // Log error message
        console.error("Error details:", err); // Full error details
        
    });
