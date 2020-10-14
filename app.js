const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const path = require("path");
const bookRouter = require('./routes/bookRoutes')

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.use(morgan("tiny"));
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "public")));
// eslint-disable-next-line no-undef
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use('/books', bookRouter);

app.get("/", (req, res) => {
  res.render("index", {
    nav: [
      { link: "/authors", title: "Auhtors" },
      { link: "/books", title: "Books" },
    ],
    title: "Library",
  });
});

app.listen(port, () => {
  console.log(`listent on port ${chalk.green(port)}`);
});
