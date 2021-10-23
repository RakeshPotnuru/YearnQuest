const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

const homeRoutes = require("./routes/home-routes");
const userRoutes = require("./routes/user-routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// connect to mongodb using ODM mongoose
connectDB();

app.use("/", homeRoutes);
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
