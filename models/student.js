const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema ( {
    name : {
        type : String,
        required : true 
    },
    age : {
        type : Number,
        required : true 
    },
    marks : {
        type : Number, 
        maxlength : 99 
    }
});

const Student = mongoose.model("Student" , studentSchema);
// Student =====> Database me =====> students ===> matlab ==>
//  automatically s chota and plural
module.exports = Student;