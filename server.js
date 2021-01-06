var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burgers: data });
  });
});

app.post("/api/burgers", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES ?", [req.body.burger_name], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

app.put("/api/burgers/:id", function(req, res) {
  connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [req.body.burger_name, req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

app.delete("/api/burgers/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
