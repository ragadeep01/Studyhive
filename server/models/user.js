const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // Add role field
  points: { type: Number, default: 0 },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "student" }], // Adjusted reference
  challengesWon: { type: Number, default: 0 },
  courseOngoing: { type: String, default: null },
  phoneNo: { type: String, required: true },
  dailyStreak: { type: Number, default: 0 }
}, { timestamps: true });

const Student = mongoose.models.student || mongoose.model("student", StudentSchema);

module.exports = Student;
