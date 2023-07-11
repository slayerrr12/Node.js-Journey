const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/admin",adminRoutes);
app.use(userRoutes);

//this is a ccatch all routeDefinedAthte end




app.use((req, res, next) => {
  res.status(404).send("<h1>page not found </h1>");
});

app.listen(3000);
