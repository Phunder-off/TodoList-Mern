import axios from "axios";

const Card = ({ id, todo }) => {
	let deleteCard = (id) => {
		axios.delete(`http://localhost:3001/todolist/${id}`);
	};

	let updateCard = (id, info) => {
		return <EmptyCard action={(id, info)} />;
	};

	return (
		<li className="card">
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>
			<h5>{todo.author}</h5>
			<input type="checkbox" defaultChecked={todo.do} />
			<br />
			<button onClick={() => deleteCard(id)}>Delete</button>
			<button onClick={() => updateCard(id)}>Update</button>
		</li>
	);
};

export default Card;
