const express = require("express");
const { MongoClient } = require("mongodb");
const adminRouter = express.Router();

function router(nav) {
  adminRouter.route("/").get(async (req, res) => {
    const url = "mongodb://localhost:27017";
    const dbName = "local";
    const fetchBooks = async () => {
      let client;
      let books = [];
      try {
        client = await MongoClient.connect(url);
        const db = client.db("local");
        const response = await db.collection("books").find().toArray();
        books = response
      } catch (e) {
        console.error(e);
      }
      return books;
    };

   const book = await  fetchBooks();
    res.send(JSON.stringify(book));
  });
  return adminRouter;
}

module.exports = router;
