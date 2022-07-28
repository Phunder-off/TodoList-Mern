import { useState } from "react";
import { createTask } from "../services/todolistServices";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EmptyCard = ({ setTasks }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();
	const [textButtonAdd, setTextButton] = useState("Add");

	return (
		<Card className="mb-2">
			<Card.Header as="h4" className="text-center">Add Task</Card.Header>
			<Card.Body>

				<Form className="p-2">
					<Form.Group className="mb-3">
						<Form.Label htmlFor="title">Title :</Form.Label>
						<Form.Control type="text" name="title" id="title" placeholder="Title of Task" onChange={(e) => setTitle(e.target.value)} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="description">Description :</Form.Label>
						<Form.Control as="textarea" name="description" id="description" placeholder="Description of Task" onChange={(e) => setDescription(e.target.value)} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="author">Author :</Form.Label>
						<Form.Control type="text" name="author" id="author" placeholder="Auteur of Task" onChange={(e) => setAuthor(e.target.value)} />
					</Form.Group>

					<Button
						className="w-100"
						variant="primary"
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
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default EmptyCard;
