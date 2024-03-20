const express = require("express");
const routes = express.Router();
const db = require("../db/index");

routes.get("/restaurants", async (req, res, next) => {
  try {
    console.log("ahmad is here");

    const result = await db.query("SELECT * FROM restaurant");

    return res.json({
      status: "success",
      data: result.rows, // Accessing rows directly
      length: result.rows.length,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
});

routes.get("/restaurants/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await db.query(`SELECT * FROM restaurant where id=${id}`);

    const result2 = await db.query(
      `SELECT * FROM review where restaurant_id=${id}`
    );
    res.json({
      status: "sucess",
      data: result.rows[0],
      review: result2.rows,
    });

    console.log(result);
  } catch (error) {}
});

routes.post("/restaurants", async (req, res, next) => {
  try {
    const { name, location, price_range } = req.body;
    const result = await db.query(
      `INSERT INTO restaurant(name, location, price_range) VALUES($1, $2, $3) returning *`,
      [name, location, price_range]
    );
    console.log(result.rows[0]);
    res.json({
      status: "sucess",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});
//add reviews

routes.put("/restaurants/:id", async (req, res, next) => {
  try {
    const { name, location, price_range } = req.body;
    const id = req.params.id;
    const result = await db.query(
      "UPDATE restaurant SET name=$1 ,location=$2 , price_range = $3 where id=$4 returning *",
      [name, location, price_range, id]
    );
    res.json({ status: "sucess", data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
});

routes.delete("/restaurants/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await db.query("DELETE FROM restaurant WHERE id=$1 ", [id]);
    const result2 = await db.query("SELECT * FROM restaurant");
    console.log(result.rows);
    console.log(result2);

    res.json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
});

routes.get("/restaurants/:id/reviews", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await db.query(
      `SELECT * FROM review where restaurant_id=${id}`
    );
    res.json({
      status: "sucess",
      data: result.rows,
    });

    console.log(result);
  } catch (error) {}
});

routes.post("/restaurants/:id/Addreviews", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, rating, content } = req.body;
    const result = await db.query(
      `INSERT INTO review(name, restaurant_id,rating, content) VALUES($1, $2, $3,$4) returning *`,
      [name, id, rating, content]
    );
    console.log(result.rows[0]);
    res.json({
      status: "sucess",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
