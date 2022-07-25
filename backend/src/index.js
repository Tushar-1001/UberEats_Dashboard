require('dotenv').config()
// require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/route");
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());


app.use("/", route);

// console.log(process.env.USERNAME , '--------******************---------')
// console.log(PORT , '----------------------------------------------------')

mongoose
  .connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT || 3005 , function () {
  console.log("Express app running on port " + (process.env.PORT || 3005));
});
