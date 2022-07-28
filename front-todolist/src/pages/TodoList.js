import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import TaskCard from "../components/Card";
import EmptyCard from "../components/EmptyCard";
import { getTasks } from "../services/todolistServices";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [updateCard, setUpdateCard] = useState();

	useEffect(() => {
		getTasks(setTasks);
	}, []);

	return (
		<>
			<header>
				<Navigation />
			</header>
			<main className="pt-5">
				<Container className="h-100">
					<Row>
						<Col xs="12" md="4">
							{updateCard}
							<EmptyCard setTasks={setTasks} />
						</Col>
						<Col>
							{tasks
								.filter((task) => task.done === false)
								.map((task) => (
									<TaskCard key={task._id} id={task._id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />
								))}
						</Col>
						<Col>
							{tasks
								.filter((task) => task.done === true)
								.map((task) => (
									<TaskCard key={task._id} id={task._id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />
								))}
						</Col>
					</Row>
				</Container>
			</main>
		</>
	);
};

export default TodoList;
