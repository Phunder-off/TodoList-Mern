import axios from "axios";
import React, { useState } from "react";

const UpdateCard = ({ id, data, setUpdateCard }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();

	let actionButton = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:3001/todolist/${id}`, { title, description, author });
		setUpdateCard("");
	};

	return (
		<li>
			<form>
				<label htmlFor="title">Tache :</label>
				<input type="text" name="title" id="title" defaultValue={data.title} onChange={(e) => setTitle(e.target.value)} />
				<br />

				<label htmlFor="description">Description :</label>
				<textarea name="description" id="description" cols="30" rows="3" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)}></textarea>

				<br />
				<label htmlFor="author">Auteur :</label>
				<input type="text" name="author" id="author" defaultValue={data.author} onChange={(e) => setAuthor(e.target.value)} />

				<button
					onClick={(e) => {
						actionButton(e);
					}}
				>
					Update
				</button>
			</form>
		</li>
	);
};

export default UpdateCard;
