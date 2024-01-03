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

app.get("/", (req, res) => {
  con.query("SELECT * FROM image", (err, result) => {
    const newarr = [];
    if (err) {
      console.error(err);
    } else {
      for (i of result) {
        const image = i.img.toString("base64");
        newarr.push({ sno: i.sno, img: image });
        return res.json(newarr);
      }

      //return res.json(result)
    }
  });
});

app.listen(8081, () => {
  console.log("serverisrunning");
});
