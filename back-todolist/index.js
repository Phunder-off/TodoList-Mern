const bodyParser = require("body-parser");
const express = require("express");
const app = express();

require("./models/dbConfig");

const todolistRoutes = require("./routes/todolistController");

app.use(bodyParser.json());
app.use("/todolist", todolistRoutes);

app.listen(3001, () => {
	console.log("Server started on port : 3001");
});
