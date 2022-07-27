import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
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
			<Navigation />
			<Container>
				<Row>
					<Col>
					<EmptyCard setTasks={setTasks} />
					</Col>
					<Col>
						<ul>
							
							{updateCard}
							{tasks
								.filter((task) => task.done === false)
								.map((task) => (
									<Card key={task._id} id={task._id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />
								))}
						</ul>
					</Col>
					<Col>
						<ul>
							{tasks
								.filter((task) => task.done === true)
								.map((task) => (
									<Card key={task._id} id={task._id} task={task} setUpdateCard={setUpdateCard} setTasks={setTasks} />
								))}
						</ul>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TodoList;
