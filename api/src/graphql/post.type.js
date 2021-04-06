const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql

const authorType = require("./author.type")

const { authorController } = require('../controllers')

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
      title: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
      author: {
        type: authorType,
        resolve: (source, params) => {
          return authorController.getByName(source.author)
        },
      },
    },
  })

  module.exports = postType