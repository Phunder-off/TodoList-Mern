import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import EmptyCard from "../components/EmptyCard";
import { getTasks } from "../services/todolistServices";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [updateCard, setUpdateCard] = useState();

	useEffect(() => {
		getTasks(setTasks);
	}, []);

	return (
		<>
			<Navigation />
			<ul>
				<EmptyCard setTasks={setTasks} />
				{updateCard}
				{tasks
					.filter((task) => task.done === false)
					.map((task) => (
						<Card key={task._id} id={task._id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />
					))}
			</ul>
			<ul>
				{tasks
					.filter((task) => task.done === true)
					.map((task) => (
						<Card key={task._id} id={task._id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />
					))}
			</ul>
		</>
	);
};

export default TodoList;
