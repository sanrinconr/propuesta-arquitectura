
const {postService} = require('../services');


const getById = async (id) => {
    const result = await postService.getPostById(id);
    return result
  };

const getAll = async (nme) => {
  const result = await postService.getAllPosts();
  return result
};

module.exports = {
  getById,
  getAll,
};
