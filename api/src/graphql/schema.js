const graphql = require('graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = graphql

const queryType = require("./query.type")
const schema = new GraphQLSchema({
  query: queryType,
})

module.exports = schema