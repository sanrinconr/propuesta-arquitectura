const postType = require("./post.type")
const graphql = require('graphql')
const {postsController} = require("../controllers")
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
  } = graphql

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      post: {
        type: postType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: (source, { id }) => {
          return postsController.getById(id)
        },
      },
      posts: {
        type: new GraphQLList(postType),
        resolve: () => {
          return postsController.getAll()
        },
      },
    },
  })

module.exports = queryType