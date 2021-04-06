
const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql

const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  },
})

module.exports = authorType