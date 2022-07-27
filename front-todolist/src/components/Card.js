import { useEffect, useState } from "react";
import { deleteTask, updateTask } from "../services/todolistServices";
import UpdateCard from "./UpdateCard";

const Card = ({ id, task, setUpdateCard, setTasks }) => {
	const [done, setDone] = useState(false);
	const [textButton, setTextButton] = useState("Add");

	useEffect(() => {
		setDone(task.done);
	}, [task.done]);

	let updateDone = (id) => {
		setDone(!done);
		updateTask(id, { done }, setTasks);
	};

	return (
		<li className="card">
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<h5>{task.author}</h5>
			<input type="checkbox" defaultChecked={done} onClick={(e) => updateDone(id)} />
			<br />
			<button
				onClick={() => {
					deleteTask(id, setTasks, );
				}}
			>
				{textButton}
			</button>
			<button onClick={() => setUpdateCard(<UpdateCard id={id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />)}>Update</button>
		</li>
	);
};

export default Card;
