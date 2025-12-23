const mongoose = require("mongoose");
const { Schema } = mongoose;
const TeacherSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        role:{
            type: String,
            required: true,
            default: "teacher"
        }
    },
    { timestamps: true } 
);

const Teacher = mongoose.models.teacher||mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
