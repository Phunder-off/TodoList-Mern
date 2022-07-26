import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import EmptyCard from "../components/EmptyCard";

const TodoList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/todolist").then((res) => setData(res.data));
	}, [data]);

	return (
		<>
			<Navigation />
			<ul>
				<AddCard />
				{data.map((todo) => (
					<Card key={todo._id} id={todo._id} todo={todo} />
				))}
			</ul>
		</>
	);
};

export default TodoList;
