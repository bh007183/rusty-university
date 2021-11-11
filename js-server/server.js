const express = require("express")
const PORT = process.env.PORT || 8080
const { ApolloServer } = require('apollo-server-express');
const sequelize = require("./connection")
const typeDefs = require("./schema/typeDefs")
const resolvers = require("./schema/resolvers")



async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  ;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context,
  });
  await server.start();
  server.applyMiddleware({ app });


sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, function(){
        console.log("http://localhost:8080")
        console.log("http://localhost:8080/graphql")
    })
})

}
startApolloServer(typeDefs, resolvers)
