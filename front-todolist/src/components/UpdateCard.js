import React, { useState } from "react";
import { updateTask } from "../services/todolistServices";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";


const UpdateCard = ({ id, task, setUpdateCard, setTasks }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [author, setAuthor] = useState();
	const [textButtonUpdate, setTextButtonUpdate] = useState("Update");
	const [textButtonCancel, setTextButtonCancel] = useState("Cancel");

	return (
		<Card className="mb-2">
			<Form>
				<Card.Header>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="title">Title :</Form.Label>
						<Form.Control type="text" name="title" id="title" defaultValue={task.title} placeholder="Title of Task" onChange={(e) => setTitle(e.target.value)} />
					</Form.Group>
				</Card.Header>

				<Card.Body>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="title">Description :</Form.Label>
						<Form.Control as="textarea" defaultValue={task.description} placeholder="Description of Task" onChange={(e) => setDescription(e.target.value)} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="author">Author :</Form.Label>
						<Form.Control type="text" name="author" id="author" defaultValue={task.author} onChange={(e) => setAuthor(e.target.value)} />
					</Form.Group>
					<ButtonGroup className="w-100">
						<Button
							variant="outline-success"
							type="button"
							onClick={(e) => {
								setTextButtonUpdate("loading ...");
								updateTask(id, { title, description, author }, setTasks, () => {
									setTextButtonUpdate("Update");
									setUpdateCard("");
								});
							}}
						>
							{textButtonUpdate}
						</Button>
						<Button
							variant="outline-danger"
							type="button"
							onClick={(e) => {
								setTextButtonCancel("loading ...");
								setUpdateCard("");
								setTextButtonCancel("Cancel");
							}}
						>
							{textButtonCancel}
						</Button>
					</ButtonGroup>
				</Card.Body>
			</Form>
		</Card>
	);
};

export default UpdateCard;
