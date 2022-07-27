import { useState } from "react";
import { createTask } from "../services/todolistServices";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const EmptyCard = ({ setTasks }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();
	const [textButtonAdd, setTextButton] = useState("Add");

	return (
		<Card>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label htmlFor="title">Tache :</Form.Label>
					<Form.Control type="text"  name="title" id="title" placeholder="Title of Task" onChange={(e) => setTitle(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label htmlFor="description">Description :</Form.Label>
					<Form.Control type="text" name="description" id="description" placeholder="Description of Task" onChange={(e) => setDescription(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label htmlFor="author">Auteur :</Form.Label>
					<Form.Control type="text" name="author" id="author" placeholder="Auteur of Task" onChange={(e) => setAuthor(e.target.value)}/>
				</Form.Group>

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
					{textButtonAdd}
				</button>
			</Form>
		</Card>
	);
};

export default EmptyCard;
