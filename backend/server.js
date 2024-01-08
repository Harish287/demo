const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
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

app.get("/boys", (req, res) => {
  const sql = "SELECT * FROM boys";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
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

app.get("/booknow", (req, res) => {
  con.query("select * from booknow", (err, result) => {
    if (err) {
      console.error(err);
    } else {
      return res.json(result);
    }
  });
});

app.listen(8081, () => {
  console.log("serverisrunning");
});
