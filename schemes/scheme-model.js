const db = require('../data/connection');

module.exports = {
  find,
  findById,
  findSteps,
//   addSteps,
  add,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
  .where('id', id)
  .first()
}

function findSteps(id) {
  return db('steps')
    .where('steps.scheme_id', id)
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
}

// function addSteps(step) {
//     return db("steps")
//     .insert(step)
//     .then((ids) => {
//       return findById(ids[0])
//     })
//   }


function add(scheme) {
  return db('schemes')
  .insert(scheme)
    .then((id) => {
      return findById(id[0])
    })
}

function update(changes, id) {
  return db('schemes')
  .where('id', id)
  .first()
  .update(changes)
    .then(() => {
      return findById(id)
    })
}

async function remove(id) {
  return await findById(id)
    .then(scheme => {
      return db('schemes')
      .where({id})
      .first()
      .del()
        .then(scheme => {
          return scheme
        })
    })
}