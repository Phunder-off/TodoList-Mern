import { useEffect, useState } from "react";
import { deleteTask, updateTask } from "../services/todolistServices";
import UpdateCard from "./UpdateCard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TaskCard = ({ id, task, setUpdateCard, setTasks }) => {
	const [done, setDone] = useState(false);
	const [textButtonDelete, setTextButtonDelete] = useState("Delete");
	const [textButtonDone, setTextButtonDone] = useState("Done");

	useEffect(() => {
		setDone(task.done);
	}, [task.done]);

	return (
		<Card className="mb-2">
			<Card.Header as="h5" className="text-center">
				{task.title}
			</Card.Header>

			<Card.Body>
				<Card.Text>{task.description}</Card.Text>
				<Card.Text as="h6">{task.author}</Card.Text>

				<ToggleButton
					className="w-100 mb-2"
					id={id}
					type="checkbox"
					variant="outline-primary"
					checked={done}
					value="1"
					onChange={(e) => {
						setDone(e.currentTarget.checked);
						updateTask(id, { done : e.currentTarget.checked }, setTasks, () => {setTextButtonDone("Done")});
					}}
				>
					{textButtonDone}
				</ToggleButton>

				<ButtonGroup className="w-100">
					<Button
						variant="outline-danger"
						onClick={() => {
							setTextButtonDelete("Loading ...");
							deleteTask(id, setTasks, () => setTextButtonDelete("Delete"));
						}}
					>
						{textButtonDelete}
					</Button>

					<Button
						variant="outline-success"
						onClick={() => {
							setUpdateCard(<UpdateCard id={id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />);
						}}
					>
						Update
					</Button>
				</ButtonGroup>
			</Card.Body>
		</Card>
	);
};

export default TaskCard;
