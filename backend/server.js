const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

app.get("/", (req, res) => {
  con.query("SELECT * FROM image", (err, result) => {
    const newarr = [];
    if (err) {
      console.error(err);
    } else {
      for (i of result) {
        const image = i.ima.toString("base64");
        newarr.push({ sno: i.sno, img: image });
        return res.json(newarr);
      }

      //return res.json(result)
    }
  });
});

// app.get("/contact", (req, res) => {
//   const sql = "SELECT * FROM contact";
//   con.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.get("/offer", (req, res) => {
  const sql = "SELECT * FROM offer";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/boys_color", (req, res) => {
  const sql = "SELECT * FROM boys_color";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/blog", (req, res) => {
  const sql = "SELECT * FROM blog";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/contact", (req, res) => {
  const values = [
    req.body.Fname,
    req.body.Lname,
    req.body.email,
    req.body.number,
    req.body.message,
    req.body.place,
  ];
  const sql =
    "INSERT INTO contact (`Fname`,`Lname`, `email`,`number`,`message`,`place`) VALUES (?)";

  con.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(`${err}`);
    }
    console.log(data);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("serverisrunning");
});
