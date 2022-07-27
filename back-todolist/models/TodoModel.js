const mongoose = require("mongoose");

const TodoModel = mongoose.model(
	"express-api",
	{
		author: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
        description: {
			type: String,
			required: true,
		},
        done: {
			type: Boolean,
            default: false,
		},
	},
	"todolist"
);

module.exports = { TodoModel };