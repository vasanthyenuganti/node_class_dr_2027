const express = require("express");
const connectToDB = require("./configs/db");
const taskRoute = require("./routes/taskRoutes");
const app = express();

app.use(express.json());
app.use("/api/task", taskRoute);

app.get("/", (req, res) => {
    res.send("Sever is Started");
})

app.listen(7000, async () => {
    console.log("Server is working");

    // connec to DB
    connectToDB()

})
