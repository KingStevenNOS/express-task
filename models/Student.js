const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//Declare a schema for the MongoDB Database
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
StudentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Students', StudentSchema);