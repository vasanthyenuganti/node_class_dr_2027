const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
    res.send('<h1> Server Running</h1>');
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})