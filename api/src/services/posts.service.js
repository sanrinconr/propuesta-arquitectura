//Simulation of db
const posts = [
    {
        title: 'First post',
        description: 'Content of the first post',
        author: 'Flavio',
    },
    {
        title: 'Second post',
        description: 'Content of the second post',
        author: 'Roger',
    },

]
//Aqui se deberian utilizar los modelos y pedirle a sequelize lo que toque
const getAllPosts = async () => {
	return posts
};

const getPostById = async (id)=>{
    return posts[id]
}


module.exports = {
	getAllPosts,
    getPostById
};