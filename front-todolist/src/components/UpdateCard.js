import React, { useState } from "react";
import { updateTask } from "../services/todolistServices";

const UpdateCard = ({ id, task, setUpdateCard, setTasks}) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();
	const [textButton, setTextButton] = useState("Update");

	return (
		<li>
			<form>
				<label htmlFor="title">Tache :</label>
				<input type="text" name="title" id="title" defaultValue={task.title} onChange={(e) => setTitle(e.target.value)} />
				<br />

				<label htmlFor="description">Description :</label>
				<textarea name="description" id="description" cols="30" rows="3" defaultValue={task.description} onChange={(e) => setDescription(e.target.value)}></textarea>

				<br />
				<label htmlFor="author">Auteur :</label>
				<input type="text" name="author" id="author" defaultValue={task.author} onChange={(e) => setAuthor(e.target.value)} />

				<button
					onClick={(e) => {
						setTextButton("loading ...");
						updateTask(id, { title, description, author }, setTasks, () => setTextButton("Update"));
						setUpdateCard("");
					}}
				>
					{textButton}
				</button>
			</form>
		</li>
	);
};

export default UpdateCard;
