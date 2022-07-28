const mongoose = require('mongoose');

const db = "mongodb+srv://todolist:nQdMiZn7KvJKrOD7@cluster0.oolc2.mongodb.net/test"

mongoose.connect(
    db,
    { useNewUrlParser : true, useUnifiedTopology: true },
    (err) => {
        !err ? console.log("Mongodb Connected") : console.log(`Connection error : ${err}`);
    }
);