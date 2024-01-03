import { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "vitismanXD2019",
  port: 5432,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// const is_auth = false;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render(__dirname + "/views/main.ejs");
// });

app.get("/", (req, res) => {
  const data = {
    title: "TITLE",
    year: new Date().getFullYear(),
  };
  res.render(__dirname + "/views/index.ejs", {
    data,
  });
});
// app.get("/login", (req, res) => {
//   res.render(__dirname + "/views/login.ejs");
// });

// app.post("/login", (req, res) => {
//   db.connect();
//   //check user exist...
//   if (is_auth) res.redirect(__dirname + "/views/secrets.ejs");
// });

// app.get("/register", (req, res) => {
//   res.render(__dirname + "/views/register.ejs");
// });

// app.post("/register", (req, res) => {
//   //create new user ...
//   if (is_auth) res.render(__dirname + "/views/secrets.ejs");
// });

// app.get("/submit", (req, res) => {
//   if (is_auth) res.render(__dirname + "/views/submit.ejs");
// });

// app.post("/submit", (req, res) => {
//   // POST TO secret to DB...
//   try {
//   } catch (error) {}
//   res.redirect(__dirname + "/views/secrets.ejs");
// });

// app.get("/logout", (req, res) => {
//   //reset all keys and auth to false
//   res.redirect("/");
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
