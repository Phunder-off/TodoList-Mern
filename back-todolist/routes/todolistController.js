const express = require("express");
const { TodoModel } = require("../models/TodoModel.js");
const ObjectId = require("mongoose").Types.ObjectId;

const router = express.Router();

router.get("/", (req, res) => {
	TodoModel.find((err, docs) => {
		err ? console.log(`Error to get data : ${err}`) : res.send(docs);
	});
});

router.post("/", (req, res) => {
	const newRecord = new TodoModel({
		author: req.body.author,
		title: req.body.title,
		description: req.body.description,
		do: req.body.do,
	});

	newRecord.save((err, docs) => {
		!err ? res.send(docs) : console.log(`Error creating new data ! ${err}`);
	});
});

module.exports = router;
