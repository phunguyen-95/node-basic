const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const path = require("path");

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.use(morgan("tiny"));
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "public")));
// eslint-disable-next-line no-undef
app.use("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // eslint-disable-next-line no-undef
  const htmlLocation = path.join(__dirname, "views/index.ejs");

  res.render("index", { nav: ["Books", "Authors"], title: "Library" });
  // res.sendfile(htmlLocation);
});

app.listen(port, () => {
  console.log(`listent on port ${chalk.green(port)}`);
});
