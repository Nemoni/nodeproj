const express = require("express");
const cors = require('cors');
const app = express();

// 设置允许跨域访问的源
app.use(
  cors({
    origin: "http://192.168.1.121:8080",
  })
);

app.get("/api/message", (req, res) => {
  res.send("Hello, World!");
  console.log("received /api/message");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
