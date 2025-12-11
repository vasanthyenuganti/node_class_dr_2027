const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express()

app.use("/api/user", userRoutes);

// initial route
app.get("/", (req, res) => {
    res.send("Server Running");
})

app.listen(4000, () => {
    console.log("Server started");
})