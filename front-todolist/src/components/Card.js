import { useEffect, useState } from "react";
import { deleteTask, updateTask } from "../services/todolistServices";
import UpdateCard from "./UpdateCard";

const Card = ({ id, task, setUpdateCard, setTasks }) => {
	const [done, setDone] = useState(false);
	const [textButtonDelete, setTextButtonDelete] = useState("Delete");

	useEffect(() => {
		setDone(task.done);
	}, [task.done]);

	return (
		<li className="card">
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<h5>{task.author}</h5>
			<input
				type="checkbox"
				defaultChecked={done}
				onClick={(e) => {
					setDone(!done);
					updateTask(id, { done }, setTasks);
				}}
			/>
			<br />
			<button
				onClick={() => {
					deleteTask(id, setTasks, () => setTextButtonDelete(""));
				}}
			>
				{textButtonDelete}
			</button>
			<button
				onClick={() => {
					setUpdateCard(<UpdateCard id={id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />);
				}}
			>
				Update
			</button>
		</li>
	);
};

export default Card;
