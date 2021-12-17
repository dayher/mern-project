const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record")); // agregar este directorio y establecer las rutas

// setting routes

if(process.env.MODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname,'client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,"client","build","index.html"));
    });
}
else
{
    app.get("/", (req, res)=>{
        res.send("Api running");
    });
}

// get driver connection
const connectDB  = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    connectDB();
    console.log(`Server is running on port: ${port}`);
});