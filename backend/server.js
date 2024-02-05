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

// app.get("/academy_count", (req, res) => {
//   const sql = "SELECT * FROM contact";
//   con.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

//****************************************boys***********************************//

app.get("/boys_color", (req, res) => {
  const sql = "SELECT * FROM boys_color";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/boys_facials", (req, res) => {
  const sql = "SELECT * FROM boys_facials";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/boys_hair_teatment", (req, res) => {
  const sql = "SELECT * FROM boys_hair_teatment";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/boys", (req, res) => {
  const sql = "SELECT * FROM boys";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//***************************************womens haircut************************************************//

app.get("/hair", (req, res) => {
  const sql = "SELECT * FROM hair";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/facials", (req, res) => {
  const sql = "SELECT * FROM facials";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/main_hair", (req, res) => {
  const sql = "SELECT * FROM main_hair";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/style", (req, res) => {
  const sql = "SELECT * FROM style";
  con.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/texture", (req, res) => {
  const sql = "SELECT * FROM texture";
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

app.post("/academy_count", (req, res) => {
  const values = [
    req.body.fname,
    req.body.number,
    req.body.email,
    req.body.course,
    req.body.message,
  ];
  const sql =
    "INSERT INTO academy_contact (`fname`,`number`, `email`,`course`,`message`) VALUES (?)";

  con.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(`error ${err}`);
    }
    console.log(data);
    return res.json(data);
  });
});

app.post("/enquire", (req, res) => {
  const values = [req.body.name, req.body.phone, req.body.email];
  const sql = "INSERT INTO enduire (`name`,`phone`,`email`) VALUES (?)";

  con.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(`error ${err}`);
    }
    console.log(data);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("serverisrunning");
});
