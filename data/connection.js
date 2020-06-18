const knex = require("knex");

const knexfile = require("../knexfile");

const dbEnv = process.env.DB_ENV || 'development';

console.log("knexfile", knexfile);

module.exports = knex(knexfile[dbEnv]);

