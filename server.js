const express = require("express");

const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

const app = express();
const homeRoutes = require("./routes/home-routes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

// connect to mongodb using ODM mongoose
connectDB();

// Home page
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
