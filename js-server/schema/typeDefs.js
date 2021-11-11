const {gql} = require("apollo-server-express")

const typeDefs = gql(`
type Courses{
    id: ID!
    title: String!
    instructor: String!
    
}
type Student{
    id:ID!
    first_name: String!
    last_name: String!
    password: String!
    email: String!
}
type University{
    id: ID!
    name: String!
    student_id: ID!
    course_id: ID!
}


type Query{
    university: University

}




`)

module.exports = typeDefs