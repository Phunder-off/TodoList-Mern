import React, { useState } from "react";
import axios from "axios";

const EmptyCard = ({ action, info }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();

	if (action = "update") {
		
	}

	let action = (e) => {
		e.preventDefault();

		if (action == "update") {
			axios.put("http://localhost:3001/todolist/", { title, description, author });
		} else if (action == "add") {
			axios.post("http://localhost:3001/todolist/", { title, description, author });
		}
	};

	return (
		<li>
			<form>
				<label htmlFor="title">Tache :</label>
				<input type="text" name="title" id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
				<br />

				<label htmlFor="description">Description :</label>
				<input type="text" name="description" id="description" defaultValue={description} onChange={(e) => setDescription(e.target.value)} />

				<br />
				<label htmlFor="author">Auteur :</label>
				<input type="text" name="author" id="author" defaultValue={author} onChange={(e) => setAuthor(e.target.value)} />

				<button
					onClick={(e) => {
						action(e);
					}}
				>
					Ajouter
				</button>
			</form>
		</li>
	);
};

export default AddCard;
