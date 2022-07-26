import axios from "axios";
import UpdateCard from "./UpdateCard";

const Card = ({ id, todo, setUpdateCard }) => {
	let deleteCard = (id) => {
		axios.delete(`http://localhost:3001/todolist/${id}`);
	};

	let updateCard = (id, data) => {
		setUpdateCard(<UpdateCard id={id} data={data} setUpdateCard={setUpdateCard}/>);
	};

	return (
		<li className="card">
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>
			<h5>{todo.author}</h5>
			<input type="checkbox" defaultChecked={todo.do} />
			<br />
			<button onClick={() => deleteCard(id)}>Delete</button>
			<button onClick={() => updateCard(id, todo, setUpdateCard)}>Update</button>
		</li>
	);
};

export default Card;
