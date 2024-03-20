const { query } = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: "710788",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
