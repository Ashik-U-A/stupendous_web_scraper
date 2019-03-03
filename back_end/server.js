let express = require("express");
let path = require("path");
let http = require("http");
let https = require("https");
let body_parser = require("body-parser");

let app = express();

app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "..", "front_end")));
app.get("/", (re, rs) => {
  rs.sendFile(path.join(__dirname, "..", "front_end", "main.html"));
});

app.post("/fetch", (re, rs) => {
  var port = re.body.port === "http:" ? http : https;
  var req = port.get(re.body.url, function(res) {
    var output = "";
    console.log(" - " + res.statusCode);
    res.setEncoding("utf8");

    res.on("data", function(chunk) {
      output += chunk;
    });

    res.on("end", function() {
      rs.send(output);
    });
  });
  req.end();
});

let static_content_router = express.Router();
app.use("/fetch_static_content/", static_content_router);

static_content_router.get("*", (re, rs) => {
  var port = re.path.substring(1).split("/")[0] === "http:" ? http : https;
  var req = port.get(re.path.substring(1), function(res) {
    var output = "";
    console.log(" - " + res.statusCode);
    res.setEncoding("utf8");

    res.on("data", function(chunk) {
      output += chunk;
    });

    res.on("end", function() {
      rs.send(output);
    });
  });
  req.end();
});

app.listen(8080, () => {
  console.log("Server Started");
});
