const express = require("express");

const bookRouter = express.Router();

const books = [
  {
    isbn: 0,
    title: "Eloquent JavaScript, Second Edition",
    subtitle: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    gerne: "Fantasty",
  },
  {
    isbn: 2,
    title: "Learning JavaScript Design Patterns",
    subtitle: "A JavaScript and jQuery Developer's Guide",
    author: "Addy Osmani",
    gerne: "Fantasty",
  },
  {
    isbn: 3,
    title: "Speaking JavaScript",
    subtitle: "An In-Depth Guide for Programmers",
    author: "Axel Rauschmayer",
    gerne: "Fantasty",
  },
  {
    isbn: 1,
    title: "Programming JavaScript Applications",
    subtitle:
      "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
    author: "Eric Elliott",
    gerne: "Fantasty",
  },
];

bookRouter.route("/").get((req, res) => {
  res.render("books", {
    title: "Books",
    nav: [
      { link: "/authors", title: "Auhtors" },
      { link: "/books", title: "Books" },
    ],
    books,
  });
});

bookRouter.route("/:id").get((req, res) => {
  const id = req.params.id;

  res.render("singleBook", {
    title: "Single book",
    nav: [
      { link: "/authors", title: "Auhtors" },
      { link: "/books", title: "Books" },
    ],
    books: books[id],
  });
});

module.exports = bookRouter;
