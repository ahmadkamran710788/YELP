const { query } = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGHOST,
  host: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
