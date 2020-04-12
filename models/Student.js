const mongoose = require('mongoose');


const StudentSchema = mongoose.Schema({
    //These are the properties of the students

    studentId: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    yearJoined: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Students', StudentSchema);