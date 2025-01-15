const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv =  require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/dbConnection');

const app = express();

connectDB();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server is running on port" , PORT);
})