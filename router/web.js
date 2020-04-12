const express = require('express');

const router = express.Router();
const Student = require('../models/Student')



router.get('/api/v1/students', async (req, res) =>{
    try {
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        res.json({ message: err})
    }
});

router.post('/api/v1/students', async (req, res) => {
    const student = new Student({
        studentId: req.body.studentId,
        name: req.body.name,
        course: req.body.course,
        yearJoined: req.body.yearJoined,
        email: req.body.email,
        dob: req.body.dob
    });
    try { 
        const studentSaved = await student.save();
        res.json(studentSaved);
    }catch(err){
        res.json({ message: err})
    }

    console.log('====================================');
    console.log(`Successfully added ${student.studentId} - ${student.name} to the database`);
    console.log('====================================');
});


router.get('/api/v1/students/:studentId', async (req, res)=> {
    try {
        const thisStudent = await Student.findOne({studentId: req.params.studentId});
        res.json(thisStudent);
    } catch (err) {
        res.json({ message: err});
    }
});

router.patch('/api/v1/students/:studentId', async (req,res)=> {
    try {
        const updatedStudent = await Student.updateOne(
            {studentId: req.params.studentId},
            { $set: 
                {
                studentId: req.body.studentId,
                name: req.body.name,
                course: req.body.course,
                yearJoined: req.body.yearJoined,
                email: req.body.email,
                dob: req.body.dob
                }
            });
            res.send(updatedStudent);
    } catch (err) {
        
    }
})

router.delete('/api/v1/students/:studentId', async (req,res)=>{
    try {
        const removedStudent = await Student.remove({studentId: req.params.studentId});
        res.send(removedStudent)
    } catch (err) {
        res.json({ message: err});
    }
});


module.exports = router;