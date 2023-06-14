
const db = require('../../data/db-config')



const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars')
  .where('id', id)
  .first()
}

const create = (post) => {
  // DO YOUR MAGIC
  return db('cars')
  .insert(post)
  .then(ids => {
    return getById(ids[0]);
  })
}

module.exports = {
  getAll,
  getById,
  create
}