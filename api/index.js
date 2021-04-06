const app = require('./src/app');

let server;
  server = app.listen(process.env.PORT || 3001, () => {
    console.log(`Si se quiere, entrar y probar con:
    {
      posts {
        title
        description
        author {
          name
          age
        }
      }
      post(id:0) {
        title
        description
      }
  }`)
  console.log(`Link: http://localhost:3001/graphql`)

});