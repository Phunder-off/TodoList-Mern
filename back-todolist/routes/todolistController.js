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
		done: req.body.done,
	});

	newRecord.save((err, docs) => {
		err ? console.log(`Error creating new data ! ${err}`) : res.send(docs);
	});
});

router.delete("/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`ID unknow : ${req.params.id}`);
	TodoModel.findByIdAndRemove(req.params.id, (err, docs) => (err ? console.log(`Delete error : ${err}`) : res.send(docs)));
});

router.put("/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`ID unknow : ${req.params.id}`);

	const updateRecord = {
		author: req.body.author,
		title: req.body.title,
		description: req.body.description,
		done: req.body.done,
	};

	TodoModel.findByIdAndUpdate(req.params.id, { $set: updateRecord }, { new: true }, (err, docs) => {
		err ? console.log(`Update error ${err}`) : res.send(docs);
	});
});

router.patch("/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`ID unknow : ${req.params.id}`);

	const updateRecord = {
		done: req.body.done,
	};

	TodoModel.findByIdAndUpdate(req.params.id, { $set: updateRecord }, { new: true }, (err, docs) => {
		err ? console.log(`Update error ${err}`) : res.send(docs);
	});
});

module.exports = router;
