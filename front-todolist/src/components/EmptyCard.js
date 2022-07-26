import axios from "axios";
import { useState } from "react";

const EmptyCard = () => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();

	let actionButton = (e) => {
		e.preventDefault();
		axios.post(`http://localhost:3001/todolist/`, { title, description, author });
	};

	return (
		<li>
			<form>
				<label htmlFor="title">Tache :</label>
				<input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
				<br />

				<label htmlFor="description">Description :</label>
				<input type="text" name="description" id="description"  onChange={(e) => setDescription(e.target.value)} />

				<br />
				<label htmlFor="author">Auteur :</label>
				<input type="text" name="author" id="author" onChange={(e) => setAuthor(e.target.value)} />

				<button
					onClick={(e) => {
						actionButton(e);
					}}
				>
					Add
				</button>
			</form>
		</li>
	);
};

export default EmptyCard;
