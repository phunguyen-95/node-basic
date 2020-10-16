const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const path = require("path");
const MongoClient = require('mongodb').MongoClient;

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.use(morgan("tiny"));
// eslint-disable-next-line no-undef
app.use(express.static("public"));
// eslint-disable-next-line no-undef
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, function(err, client) {
//   console.log(chalk.green("Connected successfully to server"));
 
//   const db = client.db('local');
//   collection = db.collection('books');
// const books = collection
//   .find({ subtitle: "An In-Depth Guide for Programmers" })
//   .toArray((err, res) => {
//     if (err) {
//       console.log(chalk.red(err));
//     }
//     if (res) {
//       // console.log(chalk.blue(JSON.stringify(res)));
//       return Promise.resolve(res);
//     }
//   });

// console.log('books', books)
//   client.close();
// });

const nav = [
  { link: "/authors", title: "Auhtors" },
  { link: "/books", title: "Books" },
];
const bookRouter = require('./routes/bookRoutes')(nav)
const adminRouter = require('./routes/adminRouter')('')


app.use('/books', bookRouter);
app.use('/admin', adminRouter);

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
