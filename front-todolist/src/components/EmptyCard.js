import { useState } from "react";
import { createTask } from "../services/todolistServices";

const EmptyCard = ({ setTasks }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();
	const [textButton, setTextButton] = useState("Add");

	return (
		<li>
			<form>
				<label htmlFor="title">Tache :</label>
				<input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
				<br />

				<label htmlFor="description">Description :</label>
				<input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} />

				<br />
				<label htmlFor="author">Auteur :</label>
				<input type="text" name="author" id="author" onChange={(e) => setAuthor(e.target.value)} />

				<button
					type="button"
					onClick={(e) => {
						if (title == null || description == null || author == null) {
							return;
						}
						setTextButton("loading ...");
						createTask({ title, description, author }, setTasks, () => setTextButton("Add"));
					}}
				>
					{textButton}
				</button>
			</form>
		</li>
	);
};

export default EmptyCard;
