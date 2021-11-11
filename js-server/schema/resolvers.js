const {Student, University, Course, StudentCourse} = require("../models")

const resolvers = {
    Query: {
        university: async function(parent, args, context){
            return {id: 1, name: "Burkley"}

        }
    }
}
module.exports = resolvers