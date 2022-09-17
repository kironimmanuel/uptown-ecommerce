// Node.js land 🌄
// Setup Netlify lambda functions (only limited requests!)

// A blazingly fast API 🔥
const books = [
  { id: 1, title: "harry potter", author_: " J.K Rowling" },
  { id: 2, title: "the hobbit", author: "J. R. R. Tolkien" },
];
// Replace domain if need be
// http://localhost:8888/.netlify/functions/myFunction
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    // body: JSON.stringify(books),
    body: "My Netlify Serverless Function",
  };
};
