const Student = require("./Students")
const University = require("./University")
const Course = require("./Courses")
const StudentCourse = require("./StudentCourse")

University.hasMany(Student, {
    foreignKey: "student_id"
})
Student.belongsTo(University, {
    foreignKey: "student_id"
})

University.hasMany(Course, {
    foreignKey: "course_id"
})
Course.belongsTo(University, {
    foreignKey: "course_id"
})

Course.belongsToMany(Student, {
    foreignKey: "student_id",
    through: StudentCourse
})
Student.belongsToMany(Course, {
    foreignKey: "course_id",
    through: StudentCourse
})

module.exports = {Student, University, Course, StudentCourse}

