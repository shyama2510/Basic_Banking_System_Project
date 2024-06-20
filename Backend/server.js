const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
// const dotenv = require("dotenv").config();
// console.log(process.env.MONGOURI)
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
app.use(cors(corsOptions));

try {
  mongoose.connect("mongodb://localhost:27017/shyama");
  console.log("Connected to database");
} catch {
  console.log("ERROR");
}

app.use(express.json({ extended: false }));

app.use("/api/customers", require("./routes/customer"));
app.use("/api/transaction", require("./routes/transaction"));

// app.use(express.static(path.join(__dirname, "client", "build")));

// app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
app.get("/" , async(req,res)=>{
    res.send("Hello Welocme");
})

const PORT = process.env.PORT||5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
