require("dotenv").config();
const express = require("express");
const routes = require("./routes/mainroutes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`we live ${port}`);
});
