const express = require("express");
const connectDB = require("../server/config/config");
require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const path = require("path");

//config dotenv
dotenv.config();
//connect DB
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/orders", require("./routes/orderRoute"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("<h1>Hello From Node Server vai nodemon</h1>");
    });
  }

const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log("Server on running port 8081");
});
